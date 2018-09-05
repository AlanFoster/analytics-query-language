// Generated from Aql.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { PredicateAtomContext } from './AqlParser';
import { PredicateNestedContext } from './AqlParser';
import { SelectionBinaryContext } from './AqlParser';
import { SelectionTermAltContext } from './AqlParser';
import { SelectionFunctionContext } from './AqlParser';
import { SelectionAtomContext } from './AqlParser';
import { SelectionNestedContext } from './AqlParser';
import { PredicateTermAltContext } from './AqlParser';
import { PredicateBinaryContext } from './AqlParser';
import { ProgContext } from './AqlParser';
import { FiltersContext } from './AqlParser';
import { FilterContext } from './AqlParser';
import { FacetContext } from './AqlParser';
import { TimeseriesContext } from './AqlParser';
import { DurationContext } from './AqlParser';
import { TimeDurationContext } from './AqlParser';
import { TimeUnitContext } from './AqlParser';
import { SelectionContext } from './AqlParser';
import { PredicateExprContext } from './AqlParser';
import { PredicateTermContext } from './AqlParser';
import { FuncContext } from './AqlParser';
import { FuncNameContext } from './AqlParser';
import { SelectionExprContext } from './AqlParser';
import { SelectionTermContext } from './AqlParser';
import { DateContext } from './AqlParser';
import { RelativeDateContext } from './AqlParser';
import { AbsoluteDateContext } from './AqlParser';
import { DayContext } from './AqlParser';
import { WildcardContext } from './AqlParser';
import { TimeContext } from './AqlParser';
import { TableContext } from './AqlParser';
import { ColumnContext } from './AqlParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `PredicateAtom`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateAtom?: (ctx: PredicateAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `PredicateNested`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateNested?: (ctx: PredicateNestedContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelectionBinary`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionBinary?: (ctx: SelectionBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelectionTermAlt`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionTermAlt?: (ctx: SelectionTermAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelectionFunction`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionFunction?: (ctx: SelectionFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelectionAtom`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionAtom?: (ctx: SelectionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `SelectionNested`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionNested?: (ctx: SelectionNestedContext) => Result;

	/**
	 * Visit a parse tree produced by the `PredicateTermAlt`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateTermAlt?: (ctx: PredicateTermAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `PredicateBinary`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateBinary?: (ctx: PredicateBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.filters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilters?: (ctx: FiltersContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.facet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFacet?: (ctx: FacetContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.timeseries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeseries?: (ctx: TimeseriesContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.timeDuration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeDuration?: (ctx: TimeDurationContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.timeUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeUnit?: (ctx: TimeUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelection?: (ctx: SelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateExpr?: (ctx: PredicateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateTerm?: (ctx: PredicateTermContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.funcName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncName?: (ctx: FuncNameContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionExpr?: (ctx: SelectionExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionTerm?: (ctx: SelectionTermContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.relativeDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeDate?: (ctx: RelativeDateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.absoluteDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteDate?: (ctx: AbsoluteDateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.day`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDay?: (ctx: DayContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.wildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard?: (ctx: WildcardContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn?: (ctx: ColumnContext) => Result;
}

