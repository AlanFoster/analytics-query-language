// Generated from Aql.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { Since_branchContext } from './AqlParser';
import { Predicate_branchContext } from './AqlParser';
import { Until_branchContext } from './AqlParser';
import { ProgContext } from './AqlParser';
import { Extra_thingContext } from './AqlParser';
import { SelectionContext } from './AqlParser';
import { PredicateExprContext } from './AqlParser';
import { PredicateTermContext } from './AqlParser';
import { FuncContext } from './AqlParser';
import { Func_nameContext } from './AqlParser';
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
 * This interface defines a complete listener for a parse tree produced by
 * `AqlParser`.
 */
export interface AqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `since_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	enterSince_branch?: (ctx: Since_branchContext) => void;
	/**
	 * Exit a parse tree produced by the `since_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	exitSince_branch?: (ctx: Since_branchContext) => void;

	/**
	 * Enter a parse tree produced by the `predicate_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	enterPredicate_branch?: (ctx: Predicate_branchContext) => void;
	/**
	 * Exit a parse tree produced by the `predicate_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	exitPredicate_branch?: (ctx: Predicate_branchContext) => void;

	/**
	 * Enter a parse tree produced by the `until_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	enterUntil_branch?: (ctx: Until_branchContext) => void;
	/**
	 * Exit a parse tree produced by the `until_branch`
	 * labeled alternative in `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	exitUntil_branch?: (ctx: Until_branchContext) => void;

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
	 * Enter a parse tree produced by `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	enterExtra_thing?: (ctx: Extra_thingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.extra_thing`.
	 * @param ctx the parse tree
	 */
	exitExtra_thing?: (ctx: Extra_thingContext) => void;

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
	 * Enter a parse tree produced by `AqlParser.func_name`.
	 * @param ctx the parse tree
	 */
	enterFunc_name?: (ctx: Func_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_name`.
	 * @param ctx the parse tree
	 */
	exitFunc_name?: (ctx: Func_nameContext) => void;

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
	 * Enter a parse tree produced by `AqlParser.relativeDate`.
	 * @param ctx the parse tree
	 */
	enterRelativeDate?: (ctx: RelativeDateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.relativeDate`.
	 * @param ctx the parse tree
	 */
	exitRelativeDate?: (ctx: RelativeDateContext) => void;

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

