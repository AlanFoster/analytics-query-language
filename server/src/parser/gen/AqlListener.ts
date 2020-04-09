// Generated from Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PredicateAtomContext } from "./AqlParser";
import { PredicateNestedContext } from "./AqlParser";
import { SelectionBinaryContext } from "./AqlParser";
import { SelectionTermAltContext } from "./AqlParser";
import { SelectionFunctionContext } from "./AqlParser";
import { SelectionAtomContext } from "./AqlParser";
import { SelectionNestedContext } from "./AqlParser";
import { PredicateBinaryContext } from "./AqlParser";
import { PredicateTermAltContext } from "./AqlParser";
import { ProgContext } from "./AqlParser";
import { FiltersContext } from "./AqlParser";
import { FilterContext } from "./AqlParser";
import { FacetContext } from "./AqlParser";
import { TimeseriesContext } from "./AqlParser";
import { DurationContext } from "./AqlParser";
import { TimeDurationContext } from "./AqlParser";
import { TimeUnitContext } from "./AqlParser";
import { SelectionContext } from "./AqlParser";
import { PredicateExprContext } from "./AqlParser";
import { PredicateTermContext } from "./AqlParser";
import { FuncContext } from "./AqlParser";
import { FuncNameContext } from "./AqlParser";
import { SelectionExprContext } from "./AqlParser";
import { SelectionTermContext } from "./AqlParser";
import { DateContext } from "./AqlParser";
import { RelativeDayContext } from "./AqlParser";
import { RelativeTimeUnitContext } from "./AqlParser";
import { AbsoluteDateContext } from "./AqlParser";
import { DayContext } from "./AqlParser";
import { WildcardContext } from "./AqlParser";
import { TimeContext } from "./AqlParser";
import { TableContext } from "./AqlParser";
import { ColumnContext } from "./AqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AqlParser`.
 */
export interface AqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `PredicateAtom`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	enterPredicateAtom?: (ctx: PredicateAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `PredicateAtom`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	exitPredicateAtom?: (ctx: PredicateAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `PredicateNested`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	enterPredicateNested?: (ctx: PredicateNestedContext) => void;
	/**
	 * Exit a parse tree produced by the `PredicateNested`
	 * labeled alternative in `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	exitPredicateNested?: (ctx: PredicateNestedContext) => void;

	/**
	 * Enter a parse tree produced by the `SelectionBinary`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	enterSelectionBinary?: (ctx: SelectionBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectionBinary`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	exitSelectionBinary?: (ctx: SelectionBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `SelectionTermAlt`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	enterSelectionTermAlt?: (ctx: SelectionTermAltContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectionTermAlt`
	 * labeled alternative in `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	exitSelectionTermAlt?: (ctx: SelectionTermAltContext) => void;

	/**
	 * Enter a parse tree produced by the `SelectionFunction`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	enterSelectionFunction?: (ctx: SelectionFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectionFunction`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	exitSelectionFunction?: (ctx: SelectionFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `SelectionAtom`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	enterSelectionAtom?: (ctx: SelectionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectionAtom`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	exitSelectionAtom?: (ctx: SelectionAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `SelectionNested`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	enterSelectionNested?: (ctx: SelectionNestedContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectionNested`
	 * labeled alternative in `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	exitSelectionNested?: (ctx: SelectionNestedContext) => void;

	/**
	 * Enter a parse tree produced by the `PredicateBinary`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	enterPredicateBinary?: (ctx: PredicateBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `PredicateBinary`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	exitPredicateBinary?: (ctx: PredicateBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `PredicateTermAlt`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	enterPredicateTermAlt?: (ctx: PredicateTermAltContext) => void;
	/**
	 * Exit a parse tree produced by the `PredicateTermAlt`
	 * labeled alternative in `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	exitPredicateTermAlt?: (ctx: PredicateTermAltContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.filters`.
	 * @param ctx the parse tree
	 */
	enterFilters?: (ctx: FiltersContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.filters`.
	 * @param ctx the parse tree
	 */
	exitFilters?: (ctx: FiltersContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.facet`.
	 * @param ctx the parse tree
	 */
	enterFacet?: (ctx: FacetContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.facet`.
	 * @param ctx the parse tree
	 */
	exitFacet?: (ctx: FacetContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.timeseries`.
	 * @param ctx the parse tree
	 */
	enterTimeseries?: (ctx: TimeseriesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.timeseries`.
	 * @param ctx the parse tree
	 */
	exitTimeseries?: (ctx: TimeseriesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.timeDuration`.
	 * @param ctx the parse tree
	 */
	enterTimeDuration?: (ctx: TimeDurationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.timeDuration`.
	 * @param ctx the parse tree
	 */
	exitTimeDuration?: (ctx: TimeDurationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeUnit?: (ctx: TimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeUnit?: (ctx: TimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.selection`.
	 * @param ctx the parse tree
	 */
	enterSelection?: (ctx: SelectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.selection`.
	 * @param ctx the parse tree
	 */
	exitSelection?: (ctx: SelectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	enterPredicateExpr?: (ctx: PredicateExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	exitPredicateExpr?: (ctx: PredicateExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	enterPredicateTerm?: (ctx: PredicateTermContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateTerm`.
	 * @param ctx the parse tree
	 */
	exitPredicateTerm?: (ctx: PredicateTermContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.funcName`.
	 * @param ctx the parse tree
	 */
	enterFuncName?: (ctx: FuncNameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.funcName`.
	 * @param ctx the parse tree
	 */
	exitFuncName?: (ctx: FuncNameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	enterSelectionExpr?: (ctx: SelectionExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.selectionExpr`.
	 * @param ctx the parse tree
	 */
	exitSelectionExpr?: (ctx: SelectionExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	enterSelectionTerm?: (ctx: SelectionTermContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.selectionTerm`.
	 * @param ctx the parse tree
	 */
	exitSelectionTerm?: (ctx: SelectionTermContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.relativeDay`.
	 * @param ctx the parse tree
	 */
	enterRelativeDay?: (ctx: RelativeDayContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.relativeDay`.
	 * @param ctx the parse tree
	 */
	exitRelativeDay?: (ctx: RelativeDayContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.relativeTimeUnit`.
	 * @param ctx the parse tree
	 */
	enterRelativeTimeUnit?: (ctx: RelativeTimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.relativeTimeUnit`.
	 * @param ctx the parse tree
	 */
	exitRelativeTimeUnit?: (ctx: RelativeTimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.absoluteDate`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteDate?: (ctx: AbsoluteDateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.absoluteDate`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteDate?: (ctx: AbsoluteDateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.day`.
	 * @param ctx the parse tree
	 */
	enterDay?: (ctx: DayContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.day`.
	 * @param ctx the parse tree
	 */
	exitDay?: (ctx: DayContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.wildcard`.
	 * @param ctx the parse tree
	 */
	enterWildcard?: (ctx: WildcardContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.wildcard`.
	 * @param ctx the parse tree
	 */
	exitWildcard?: (ctx: WildcardContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column`.
	 * @param ctx the parse tree
	 */
	enterColumn?: (ctx: ColumnContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column`.
	 * @param ctx the parse tree
	 */
	exitColumn?: (ctx: ColumnContext) => void;
}

