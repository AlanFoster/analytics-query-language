import * as moment from 'moment';
import { Moment } from "moment";
import {
    ColumnContext, DateContext, FiltersContext, FuncContext,
    PredicateAtomContext,
    PredicateBinaryContext, PredicateNestedContext,
    PredicateExprContext, ProgContext, SelectionAtomContext, SelectionBinaryContext,
    SelectionContext, SelectionExprContext, SelectionNestedContext, TableContext,
    WildcardContext, AqlParser
} from '../parser/gen/AqlParser';
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {AqlLexer} from "../parser/gen/AqlLexer";
import ErrorAggregator from "../parser/error-aggregator";
import {AbstractParseTreeVisitor } from "antlr4ts/tree"
import {AqlVisitor} from "../parser/gen/AqlVisitor";

/**
 * Translates a relative date into an absolute date, i.e.
 * What does "yesterday at '08:00'" mean?
 */
class DateCalculator {
    private today: Moment;

    constructor(today: Moment) {
        this.today = today;
    }

    getToday() {
        return this.today.clone();
    }

    getDate(expr: DateContext): Moment {
        if (expr.absoluteDate()) {
            return moment(expr.absoluteDate()!.text);
        }

        const relativeDate = expr.relativeDate();
        if (relativeDate) {
            const newDate = this.today.clone();
            const day = relativeDate.day().text;

            if (day != "today") {
                if (newDate.day() === 0) {
                    newDate.subtract(1, 'week');
                }
                newDate.day(day);
            }

            const time = relativeDate.time();
            if (time) {
                // Note: This is pretty naive, we could enforce iso8601 in our parser
                const timeWithoutQuotes = time.text.slice(1, -1);
                const [hours, minutes] = timeWithoutQuotes.split(':');

                newDate.set('hours', Number(hours));
                newDate.set('minutes', Number(minutes));
                newDate.set('seconds', 0);
                newDate.set('milliseconds', 0);
            }

            return newDate;
        }

        return moment.invalid();
    }
}

class AqlToSqlVisitor extends AbstractParseTreeVisitor<string> implements AqlVisitor<string> {
    private errorListener: ErrorAggregator;
    private dateCalculator: DateCalculator;

    // Note, this is a workaround to track the fact of the original AQL having a timeseries value,
    // which will impact the select generation. If there were multiple variables keeping track
    // of this state, it's a suggestion that we should have our own intermediate representation
    // that represents our own abstract syntax tree which could be converted directly into SQL
    private isTimeseries: boolean = false;

    constructor(errorListener: ErrorAggregator, dateCalculator) {
        super();
        this.errorListener = errorListener;
        this.dateCalculator = dateCalculator;
    }

    protected defaultResult(): string {
        return "<error>";
    }

    /**
     * Visit a parse tree produced by the `PredicateAtom`
     * labeled alternative in `AqlParser.predicateTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateAtom(ctx: PredicateAtomContext) {
        if (ctx.INT()) {
            return ctx.INT()!.text;
        }

        if (ctx.TRUE()) {
            return 'true';
        }

        if (ctx.FALSE()) {
            return 'false';
        }

        if (ctx.STRING()) {
            return ctx.STRING()!.text;
        }

        if (ctx.column()) {
            return this.visitColumn(ctx.column()!);
        }

        this.errorListener.error("Invalid predicate atom");
        return this.defaultResult();
    }

    /**
     * Visit a parse tree produced by the `PredicatedNested`
     * labeled alternative in `AqlParser.predicateTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateNested(ctx: PredicateNestedContext) {
        return `(${this.visitPredicateExpr(ctx.predicateExpr()!)})`
    };

    /**
     * Visit a parse tree produced by the `SelectionBinary`
     * labeled alternative in `AqlParser.selectionExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectionBinary(ctx: SelectionBinaryContext) {
        const left = this.visit(ctx._left);
        const operator = ctx._operator.text;
        const right = this.visit(ctx._right);

        return `(${left} ${operator} ${right})`;
    }

    /**
     * Visit a parse tree produced by the `SelectionAtom`
     * labeled alternative in `AqlParser.selectionTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectionAtom(ctx: SelectionAtomContext) {
        if (ctx.INT()) {
            return ctx.INT()!.text;
        }

        if (ctx.TRUE()) {
            return 'true';
        }

        if (ctx.FALSE()) {
            return 'false';
        }

        if (ctx.STRING()) {
            return ctx.STRING()!.text;
        }

        if (ctx.column()) {
            return this.visitColumn(ctx.column()!);
        }

        this.errorListener.error("Invalid selection atom");
        return this.defaultResult();
    }


    /**
     * Visit a parse tree produced by the `SelectionNested`
     * labeled alternative in `AqlParser.selectionTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectionNested(ctx: SelectionNestedContext) {
        return `(${this.visitSelectionExpr(ctx.selectionExpr())})`
    }

    /**
     * Visit a parse tree produced by the `PredicateBinary`
     * labeled alternative in `AqlParser.predicateExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateBinary(ctx: PredicateBinaryContext) {
        const left = this.visit(ctx._left);
        const operator = ctx._operator.text;
        const right = this.visit(ctx._right);

        return `(${left} ${operator} ${right})`;
    }

    /**
     * Visit a parse tree produced by `AqlParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg(ctx: ProgContext) {
        let result = '';

        const selection = this.visitSelection!(ctx.selection()) + " ";
        const table = this.visitTable!(ctx.table()) + " ";
        const filters = this.visitFilters(ctx.filters());

        const timeSeriesSelection = this.isTimeseries ? ", date_trunc('day', created_at) as timeseries" : "";
        const query = `select ${selection}${timeSeriesSelection} from ${table} ${filters}`;

        return query;
    }

    /**
     * Visit a parse tree produced by `AqlParser.filters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilters(ctx: FiltersContext) {
        let whereStatements: PredicateExprContext[] = [];
        let since: DateContext | undefined = undefined;
        let until: DateContext | undefined = undefined;
        for (const filter of ctx.filter()) {
            if (filter.WHERE()) {
                const predicateExpr = filter.predicateExpr();
                if (!predicateExpr) {
                    return "[error]"
                }
                whereStatements.push(predicateExpr);
            }
            if (filter.SINCE()) {
                if (since) {
                    this.errorListener.error("Duplicate since statement");
                    return this.defaultResult();
                }
                since = filter.date();
            }
            if (filter.UNTIL()) {
                if (until) {
                    this.errorListener.error("Duplicate until statement");
                    return this.defaultResult();
                }
                until = filter.date();
            }

            if (filter.timeseries()) {
                this.isTimeseries = true
            }
        }

        const startDate =
            since
                ? this.dateCalculator.getDate(since)
                : this.dateCalculator.getToday().subtract(1, 'week');

        const endDate =
            until
                ? this.dateCalculator.getDate(until)
                : this.dateCalculator.getToday();

        if (startDate.isAfter(endDate)) {
            this.errorListener.error("Start date is after end date");
        }

        if (!startDate.isValid()) {
            this.errorListener.error(`Start date ${startDate} not valid`);
        }

        if (!endDate.isValid()) {
            this.errorListener.error(`End date ${startDate} not valid`);
        }

        const datePredicate = `created_at > '${startDate.toISOString()}' and created_at <= '${endDate.toISOString()}'`;

        let result = "";
        if (whereStatements.length > 0) {
            result += 'where ';
            result += whereStatements.map(where => this.visitPredicateExpr(where)).join(' and ');
            result += ` and ${datePredicate}`;
        } else {
            result += `where ${datePredicate}`
        }

        if (this.isTimeseries) {
            result += " group by timeseries order by timeseries desc"
        }

        // TODO: We can expose limit through out grammar
        result += ' limit 100';

        return result;
    }

    /**
     * Visit a parse tree produced by `AqlParser.selection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelection(ctx: SelectionContext) {
        let result = "";

        let wildcard = ctx.wildcard();
        if (wildcard) {
            result += this.visitWildcard(wildcard);
        }

        result += ctx.selectionExpr().map(expr => this.visitSelectionExpr(expr)).join(", ");

        return result;
    }

    /**
     * Visit a parse tree produced by `AqlParser.predicateExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateExpr(ctx: PredicateExprContext) {
        return this.visit(ctx);
    };

    /**
     * Visit a parse tree produced by `AqlParser.func`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc(ctx: FuncContext) {
        let expression = this.defaultResult();

        if (ctx.selectionExpr()) {
            expression = this.visitSelectionExpr(ctx.selectionExpr()!);
        } else if (ctx.wildcard()) {
            expression = this.visitWildcard(ctx.wildcard()!);
        } else {
            this.errorListener.error("invalid function expression");
            return this.defaultResult();
        }

        return `${ctx.funcName().text}(${expression})`;
    }

    /**
     * Visit a parse tree produced by `AqlParser.selectionExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectionExpr(ctx: SelectionExprContext) {
        return this.visit(ctx);
    }

    /**
     * Visit a parse tree produced by `AqlParser.wildcard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildcard(ctx: WildcardContext) {
        return "*";
    }

    /**
     * Visit a parse tree produced by `AqlParser.table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable(ctx: TableContext) {
        return ctx.IDENTIFIER().text;
    }

    /**
     * Visit a parse tree produced by `AqlParser.column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn(ctx: ColumnContext) {
        return ctx.IDENTIFIER().text;
    }
}

export default function (input, today) {
    const errorAggregator = new ErrorAggregator();

    const inputStream = new ANTLRInputStream(input);
    const lexer = new AqlLexer(inputStream);

    const tokenStream = new CommonTokenStream(lexer);

    const parser = new AqlParser(tokenStream);

    lexer.removeErrorListeners();
    lexer.addErrorListener(errorAggregator);

    parser.removeErrorListeners();
    parser.addErrorListener(errorAggregator);

    const tree = parser.prog();
    const errors = errorAggregator.getErrors();

    if (errors.length > 0) {
        return {
            command: null,
            errors: errors
        }
    }

    const aqlToSqlVisitor = new AqlToSqlVisitor(errorAggregator, new DateCalculator(today));

    return {
        command: aqlToSqlVisitor.visit(tree),
        errors: errors
    };
}
