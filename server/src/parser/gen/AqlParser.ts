// Generated from Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AqlListener } from "./AqlListener";
import { AqlVisitor } from "./AqlVisitor";


export class AqlParser extends Parser {
	public static readonly SELECT = 1;
	public static readonly FROM = 2;
	public static readonly SINCE = 3;
	public static readonly UNTIL = 4;
	public static readonly AT = 5;
	public static readonly WHERE = 6;
	public static readonly LAST = 7;
	public static readonly AGO = 8;
	public static readonly IN = 9;
	public static readonly TRUE = 10;
	public static readonly FALSE = 11;
	public static readonly TODAY = 12;
	public static readonly YESTERDAY = 13;
	public static readonly MONDAY = 14;
	public static readonly TUESDAY = 15;
	public static readonly WEDNESDAY = 16;
	public static readonly THURSDAY = 17;
	public static readonly FRIDAY = 18;
	public static readonly SATURDAY = 19;
	public static readonly SUNDAY = 20;
	public static readonly MINUTES = 21;
	public static readonly HOURS = 22;
	public static readonly DAYS = 23;
	public static readonly WEEKS = 24;
	public static readonly MONTHS = 25;
	public static readonly COUNT = 26;
	public static readonly MAX = 27;
	public static readonly MIN = 28;
	public static readonly ABS = 29;
	public static readonly SUM = 30;
	public static readonly AVG = 31;
	public static readonly TIMESERIES = 32;
	public static readonly EVERY = 33;
	public static readonly FACET = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly INT = 38;
	public static readonly STRING = 39;
	public static readonly OPEN_PAREN = 40;
	public static readonly CLOSE_PAREN = 41;
	public static readonly STAR = 42;
	public static readonly DIVIDE = 43;
	public static readonly PLUS = 44;
	public static readonly MINUS = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly GREATER_THAN = 48;
	public static readonly GREATER_THAN_EQUALS = 49;
	public static readonly LESS_THAN = 50;
	public static readonly LESS_THAN_EQUALS = 51;
	public static readonly COMMA = 52;
	public static readonly COMMENT = 53;
	public static readonly WS = 54;
	public static readonly RULE_prog = 0;
	public static readonly RULE_filters = 1;
	public static readonly RULE_filter = 2;
	public static readonly RULE_facet = 3;
	public static readonly RULE_timeseries = 4;
	public static readonly RULE_duration = 5;
	public static readonly RULE_timeDuration = 6;
	public static readonly RULE_timeUnit = 7;
	public static readonly RULE_selection = 8;
	public static readonly RULE_predicateExpr = 9;
	public static readonly RULE_predicateTerm = 10;
	public static readonly RULE_predicateTermList = 11;
	public static readonly RULE_predicateTerms = 12;
	public static readonly RULE_func = 13;
	public static readonly RULE_funcName = 14;
	public static readonly RULE_selectionExpr = 15;
	public static readonly RULE_selectionTerm = 16;
	public static readonly RULE_date = 17;
	public static readonly RULE_relativeDay = 18;
	public static readonly RULE_relativeTimeUnit = 19;
	public static readonly RULE_absoluteDate = 20;
	public static readonly RULE_day = 21;
	public static readonly RULE_wildcard = 22;
	public static readonly RULE_time = 23;
	public static readonly RULE_table = 24;
	public static readonly RULE_column = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "filters", "filter", "facet", "timeseries", "duration", "timeDuration", 
		"timeUnit", "selection", "predicateExpr", "predicateTerm", "predicateTermList", 
		"predicateTerms", "func", "funcName", "selectionExpr", "selectionTerm", 
		"date", "relativeDay", "relativeTimeUnit", "absoluteDate", "day", "wildcard", 
		"time", "table", "column",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'true'", "'false'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'*'", 
		"'/'", "'+'", "'-'", "'='", "'!='", "'>'", "'>='", "'<'", "'<='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "LAST", 
		"AGO", "IN", "TRUE", "FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", 
		"WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MINUTES", "HOURS", 
		"DAYS", "WEEKS", "MONTHS", "COUNT", "MAX", "MIN", "ABS", "SUM", "AVG", 
		"TIMESERIES", "EVERY", "FACET", "AND", "OR", "IDENTIFIER", "INT", "STRING", 
		"OPEN_PAREN", "CLOSE_PAREN", "STAR", "DIVIDE", "PLUS", "MINUS", "EQUAL", 
		"NOT_EQUAL", "GREATER_THAN", "GREATER_THAN_EQUALS", "LESS_THAN", "LESS_THAN_EQUALS", 
		"COMMA", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AqlParser._LITERAL_NAMES, AqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Aql.g4"; }

	// @Override
	public get ruleNames(): string[] { return AqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AqlParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(AqlParser.SELECT);
			this.state = 53;
			this.selection();
			this.state = 54;
			this.match(AqlParser.FROM);
			this.state = 55;
			this.table();
			this.state = 56;
			this.filters();
			this.state = 57;
			this.match(AqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filters(): FiltersContext {
		let _localctx: FiltersContext = new FiltersContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AqlParser.RULE_filters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (AqlParser.SINCE - 3)) | (1 << (AqlParser.UNTIL - 3)) | (1 << (AqlParser.WHERE - 3)) | (1 << (AqlParser.TIMESERIES - 3)) | (1 << (AqlParser.FACET - 3)))) !== 0)) {
				{
				{
				this.state = 59;
				this.filter();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AqlParser.RULE_filter);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.match(AqlParser.WHERE);
				this.state = 66;
				this.predicateExpr(0);
				}
				break;
			case AqlParser.SINCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.match(AqlParser.SINCE);
				this.state = 68;
				this.date();
				}
				break;
			case AqlParser.UNTIL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 69;
				this.match(AqlParser.UNTIL);
				this.state = 70;
				this.date();
				}
				break;
			case AqlParser.TIMESERIES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.timeseries();
				}
				break;
			case AqlParser.FACET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.facet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public facet(): FacetContext {
		let _localctx: FacetContext = new FacetContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AqlParser.RULE_facet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(AqlParser.FACET);
			this.state = 76;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeseries(): TimeseriesContext {
		let _localctx: TimeseriesContext = new TimeseriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AqlParser.RULE_timeseries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(AqlParser.TIMESERIES);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.IDENTIFIER) {
				{
				this.state = 79;
				this.column();
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.EVERY) {
				{
				this.state = 82;
				this.match(AqlParser.EVERY);
				}
			}

			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.INT) {
				{
				this.state = 85;
				this.duration();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AqlParser.RULE_duration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.timeDuration();
			this.state = 89;
			this.timeUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeDuration(): TimeDurationContext {
		let _localctx: TimeDurationContext = new TimeDurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AqlParser.RULE_timeDuration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(AqlParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeUnit(): TimeUnitContext {
		let _localctx: TimeUnitContext = new TimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AqlParser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.MINUTES) | (1 << AqlParser.HOURS) | (1 << AqlParser.DAYS) | (1 << AqlParser.WEEKS) | (1 << AqlParser.MONTHS))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selection(): SelectionContext {
		let _localctx: SelectionContext = new SelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AqlParser.RULE_selection);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.ABS:
			case AqlParser.SUM:
			case AqlParser.AVG:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.selectionExpr(0);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.COMMA) {
					{
					{
					this.state = 97;
					this.match(AqlParser.COMMA);
					this.state = 98;
					this.selectionExpr(0);
					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public predicateExpr(): PredicateExprContext;
	public predicateExpr(_p: number): PredicateExprContext;
	// @RuleVersion(0)
	public predicateExpr(_p?: number): PredicateExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PredicateExprContext = new PredicateExprContext(this._ctx, _parentState);
		let _prevctx: PredicateExprContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, AqlParser.RULE_predicateExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PredicateTermAltContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 107;
			this.predicateTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 132;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 130;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 109;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 110;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AqlParser.STAR || _la === AqlParser.DIVIDE)) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 111;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(9);
						}
						break;

					case 2:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 112;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 113;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AqlParser.PLUS || _la === AqlParser.MINUS)) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 114;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(8);
						}
						break;

					case 3:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 115;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 116;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (AqlParser.GREATER_THAN - 48)) | (1 << (AqlParser.GREATER_THAN_EQUALS - 48)) | (1 << (AqlParser.LESS_THAN - 48)) | (1 << (AqlParser.LESS_THAN_EQUALS - 48)))) !== 0))) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 117;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(7);
						}
						break;

					case 4:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 118;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 119;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AqlParser.EQUAL || _la === AqlParser.NOT_EQUAL)) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 120;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(6);
						}
						break;

					case 5:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 121;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 122;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.AND);
						this.state = 123;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(5);
						}
						break;

					case 6:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 124;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 125;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.OR);
						this.state = 126;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(4);
						}
						break;

					case 7:
						{
						_localctx = new PredicateInTermsContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateInTermsContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 127;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 128;
						this.match(AqlParser.IN);
						this.state = 129;
						(_localctx as PredicateInTermsContext)._right = this.predicateTerms();
						}
						break;
					}
					}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateTerm(): PredicateTermContext {
		let _localctx: PredicateTermContext = new PredicateTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AqlParser.RULE_predicateTerm);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.IDENTIFIER:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 138;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 139;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new PredicateNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 140;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 141;
				this.predicateExpr(0);
				this.state = 142;
				this.match(AqlParser.CLOSE_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateTermList(): PredicateTermListContext {
		let _localctx: PredicateTermListContext = new PredicateTermListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AqlParser.RULE_predicateTermList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			_localctx._predicateTerm = this.predicateTerm();
			_localctx._terms.push(_localctx._predicateTerm);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.COMMA) {
				{
				{
				this.state = 147;
				this.match(AqlParser.COMMA);
				this.state = 148;
				_localctx._predicateTerm = this.predicateTerm();
				_localctx._terms.push(_localctx._predicateTerm);
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateTerms(): PredicateTermsContext {
		let _localctx: PredicateTermsContext = new PredicateTermsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AqlParser.RULE_predicateTerms);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(AqlParser.OPEN_PAREN);
			this.state = 155;
			this.predicateTermList();
			this.state = 156;
			this.match(AqlParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AqlParser.RULE_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.funcName();
			this.state = 159;
			this.match(AqlParser.OPEN_PAREN);
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				{
				this.state = 160;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.ABS:
			case AqlParser.SUM:
			case AqlParser.AVG:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				{
				this.state = 161;
				this.selectionExpr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 164;
			this.match(AqlParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcName(): FuncNameContext {
		let _localctx: FuncNameContext = new FuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AqlParser.RULE_funcName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.COUNT) | (1 << AqlParser.MAX) | (1 << AqlParser.MIN) | (1 << AqlParser.ABS) | (1 << AqlParser.SUM) | (1 << AqlParser.AVG))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public selectionExpr(): SelectionExprContext;
	public selectionExpr(_p: number): SelectionExprContext;
	// @RuleVersion(0)
	public selectionExpr(_p?: number): SelectionExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SelectionExprContext = new SelectionExprContext(this._ctx, _parentState);
		let _prevctx: SelectionExprContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, AqlParser.RULE_selectionExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SelectionTermAltContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 169;
			this.selectionTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 177;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 171;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 172;
						(_localctx as SelectionBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AqlParser.STAR || _la === AqlParser.DIVIDE)) {
							(_localctx as SelectionBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 173;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(4);
						}
						break;

					case 2:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 174;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 175;
						(_localctx as SelectionBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AqlParser.PLUS || _la === AqlParser.MINUS)) {
							(_localctx as SelectionBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 176;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(3);
						}
						break;
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionTerm(): SelectionTermContext {
		let _localctx: SelectionTermContext = new SelectionTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AqlParser.RULE_selectionTerm);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.ABS:
			case AqlParser.SUM:
			case AqlParser.AVG:
				_localctx = new SelectionFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.func();
				}
				break;
			case AqlParser.IDENTIFIER:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 185;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 186;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 187;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new SelectionNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 188;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 189;
				this.selectionExpr(0);
				this.state = 190;
				this.match(AqlParser.CLOSE_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AqlParser.RULE_date);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.LAST:
			case AqlParser.TODAY:
			case AqlParser.YESTERDAY:
			case AqlParser.MONDAY:
			case AqlParser.TUESDAY:
			case AqlParser.WEDNESDAY:
			case AqlParser.THURSDAY:
			case AqlParser.FRIDAY:
			case AqlParser.SATURDAY:
			case AqlParser.SUNDAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.relativeDay();
				}
				break;
			case AqlParser.EOF:
			case AqlParser.SINCE:
			case AqlParser.UNTIL:
			case AqlParser.WHERE:
			case AqlParser.TIMESERIES:
			case AqlParser.FACET:
			case AqlParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.relativeTimeUnit();
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.absoluteDate();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relativeDay(): RelativeDayContext {
		let _localctx: RelativeDayContext = new RelativeDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AqlParser.RULE_relativeDay);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.LAST) {
				{
				this.state = 199;
				this.match(AqlParser.LAST);
				}
			}

			this.state = 202;
			this.day();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.AT) {
				{
				this.state = 203;
				this.match(AqlParser.AT);
				this.state = 204;
				this.time();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relativeTimeUnit(): RelativeTimeUnitContext {
		let _localctx: RelativeTimeUnitContext = new RelativeTimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AqlParser.RULE_relativeTimeUnit);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.EOF:
			case AqlParser.SINCE:
			case AqlParser.UNTIL:
			case AqlParser.WHERE:
			case AqlParser.TIMESERIES:
			case AqlParser.FACET:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case AqlParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.match(AqlParser.INT);
				this.state = 209;
				this.timeUnit();
				this.state = 210;
				this.match(AqlParser.AGO);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public absoluteDate(): AbsoluteDateContext {
		let _localctx: AbsoluteDateContext = new AbsoluteDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AqlParser.RULE_absoluteDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(AqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public day(): DayContext {
		let _localctx: DayContext = new DayContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AqlParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.TODAY) | (1 << AqlParser.YESTERDAY) | (1 << AqlParser.MONDAY) | (1 << AqlParser.TUESDAY) | (1 << AqlParser.WEDNESDAY) | (1 << AqlParser.THURSDAY) | (1 << AqlParser.FRIDAY) | (1 << AqlParser.SATURDAY) | (1 << AqlParser.SUNDAY))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AqlParser.RULE_wildcard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(AqlParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AqlParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(AqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AqlParser.RULE_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(AqlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AqlParser.RULE_column);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(AqlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.predicateExpr_sempred(_localctx as PredicateExprContext, predIndex);

		case 15:
			return this.selectionExpr_sempred(_localctx as SelectionExprContext, predIndex);
		}
		return true;
	}
	private predicateExpr_sempred(_localctx: PredicateExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private selectionExpr_sempred(_localctx: SelectionExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 3);

		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\xE5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03?\n\x03\f\x03\x0E" +
		"\x03B\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04L\n\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06S\n" +
		"\x06\x03\x06\x05\x06V\n\x06\x03\x06\x05\x06Y\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\nf\n\n\f\n\x0E" +
		"\ni\v\n\x05\nk\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\x85\n\v\f\v\x0E\v\x88\v\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x93\n\f\x03\r\x03\r\x03\r\x07" +
		"\r\x98\n\r\f\r\x0E\r\x9B\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xA5\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x07\x11\xB4\n\x11\f\x11\x0E\x11\xB7\v\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xC3\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\xC8\n\x13\x03\x14\x05\x14\xCB\n\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\xD0\n\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\xD7\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x02\x02\x04" +
		"\x14 \x1C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02\t\x03\x02\x17\x1B\x03\x02" +
		",-\x03\x02./\x03\x0225\x03\x0201\x03\x02\x1C!\x03\x02\x0E\x16\x02\xEF" +
		"\x026\x03\x02\x02\x02\x04@\x03\x02\x02\x02\x06K\x03\x02\x02\x02\bM\x03" +
		"\x02\x02\x02\nP\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E]\x03\x02\x02\x02" +
		"\x10_\x03\x02\x02\x02\x12j\x03\x02\x02\x02\x14l\x03\x02\x02\x02\x16\x92" +
		"\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x9C\x03\x02\x02\x02\x1C\xA0" +
		"\x03\x02\x02\x02\x1E\xA8\x03\x02\x02\x02 \xAA\x03\x02\x02\x02\"\xC2\x03" +
		"\x02\x02\x02$\xC7\x03\x02\x02\x02&\xCA\x03\x02\x02\x02(\xD6\x03\x02\x02" +
		"\x02*\xD8\x03\x02\x02\x02,\xDA\x03\x02\x02\x02.\xDC\x03\x02\x02\x020\xDE" +
		"\x03\x02\x02\x022\xE0\x03\x02\x02\x024\xE2\x03\x02\x02\x0267\x07\x03\x02" +
		"\x0278\x05\x12\n\x0289\x07\x04\x02\x029:\x052\x1A\x02:;\x05\x04\x03\x02" +
		";<\x07\x02\x02\x03<\x03\x03\x02\x02\x02=?\x05\x06\x04\x02>=\x03\x02\x02" +
		"\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\x05\x03\x02" +
		"\x02\x02B@\x03\x02\x02\x02CD\x07\b\x02\x02DL\x05\x14\v\x02EF\x07\x05\x02" +
		"\x02FL\x05$\x13\x02GH\x07\x06\x02\x02HL\x05$\x13\x02IL\x05\n\x06\x02J" +
		"L\x05\b\x05\x02KC\x03\x02\x02\x02KE\x03\x02\x02\x02KG\x03\x02\x02\x02" +
		"KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\x07\x03\x02\x02\x02MN\x07$\x02\x02" +
		"NO\x054\x1B\x02O\t\x03\x02\x02\x02PR\x07\"\x02\x02QS\x054\x1B\x02RQ\x03" +
		"\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TV\x07#\x02\x02UT\x03" +
		"\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WY\x05\f\x07\x02XW\x03" +
		"\x02\x02\x02XY\x03\x02\x02\x02Y\v\x03\x02\x02\x02Z[\x05\x0E\b\x02[\\\x05" +
		"\x10\t\x02\\\r\x03\x02\x02\x02]^\x07(\x02\x02^\x0F\x03\x02\x02\x02_`\t" +
		"\x02\x02\x02`\x11\x03\x02\x02\x02ak\x05.\x18\x02bg\x05 \x11\x02cd\x07" +
		"6\x02\x02df\x05 \x11\x02ec\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ja\x03\x02" +
		"\x02\x02jb\x03\x02\x02\x02k\x13\x03\x02\x02\x02lm\b\v\x01\x02mn\x05\x16" +
		"\f\x02n\x86\x03\x02\x02\x02op\f\n\x02\x02pq\t\x03\x02\x02q\x85\x05\x14" +
		"\v\vrs\f\t\x02\x02st\t\x04\x02\x02t\x85\x05\x14\v\nuv\f\b\x02\x02vw\t" +
		"\x05\x02\x02w\x85\x05\x14\v\txy\f\x07\x02\x02yz\t\x06\x02\x02z\x85\x05" +
		"\x14\v\b{|\f\x06\x02\x02|}\x07%\x02\x02}\x85\x05\x14\v\x07~\x7F\f\x05" +
		"\x02\x02\x7F\x80\x07&\x02\x02\x80\x85\x05\x14\v\x06\x81\x82\f\x04\x02" +
		"\x02\x82\x83\x07\v\x02\x02\x83\x85\x05\x1A\x0E\x02\x84o\x03\x02\x02\x02" +
		"\x84r\x03\x02\x02\x02\x84u\x03\x02\x02\x02\x84x\x03\x02\x02\x02\x84{\x03" +
		"\x02\x02\x02\x84~\x03\x02\x02\x02\x84\x81\x03\x02\x02\x02\x85\x88\x03" +
		"\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x15\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x93\x054\x1B\x02\x8A\x93\x07" +
		"(\x02\x02\x8B\x93\x07\f\x02\x02\x8C\x93\x07\r\x02\x02\x8D\x93\x07)\x02" +
		"\x02\x8E\x8F\x07*\x02\x02\x8F\x90\x05\x14\v\x02\x90\x91\x07+\x02\x02\x91" +
		"\x93\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x92\x8A\x03\x02\x02\x02\x92" +
		"\x8B\x03\x02\x02\x02\x92\x8C\x03\x02\x02\x02\x92\x8D\x03\x02\x02\x02\x92" +
		"\x8E\x03\x02\x02\x02\x93\x17\x03\x02\x02\x02\x94\x99\x05\x16\f\x02\x95" +
		"\x96\x076\x02\x02\x96\x98\x05\x16\f\x02\x97\x95\x03\x02\x02\x02\x98\x9B" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x19" +
		"\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9D\x07*\x02\x02\x9D\x9E" +
		"\x05\x18\r\x02\x9E\x9F\x07+\x02\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA1\x05" +
		"\x1E\x10\x02\xA1\xA4\x07*\x02\x02\xA2\xA5\x05.\x18\x02\xA3\xA5\x05 \x11" +
		"\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02" +
		"\x02\xA6\xA7\x07+\x02\x02\xA7\x1D\x03\x02\x02\x02\xA8\xA9\t\x07\x02\x02" +
		"\xA9\x1F\x03\x02\x02\x02\xAA\xAB\b\x11\x01\x02\xAB\xAC\x05\"\x12\x02\xAC" +
		"\xB5\x03\x02\x02\x02\xAD\xAE\f\x05\x02\x02\xAE\xAF\t\x03\x02\x02\xAF\xB4" +
		"\x05 \x11\x06\xB0\xB1\f\x04\x02\x02\xB1\xB2\t\x04\x02\x02\xB2\xB4\x05" +
		" \x11\x05\xB3\xAD\x03\x02\x02\x02\xB3\xB0\x03\x02\x02\x02\xB4\xB7\x03" +
		"\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6!\x03" +
		"\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xC3\x05\x1C\x0F\x02\xB9\xC3\x05" +
		"4\x1B\x02\xBA\xC3\x07(\x02\x02\xBB\xC3\x07\f\x02\x02\xBC\xC3\x07\r\x02" +
		"\x02\xBD\xC3\x07)\x02\x02\xBE\xBF\x07*\x02\x02\xBF\xC0\x05 \x11\x02\xC0" +
		"\xC1\x07+\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xB8\x03\x02\x02\x02\xC2" +
		"\xB9\x03\x02\x02\x02\xC2\xBA\x03\x02\x02\x02\xC2\xBB\x03\x02\x02\x02\xC2" +
		"\xBC\x03\x02\x02\x02\xC2\xBD\x03\x02\x02\x02\xC2\xBE\x03\x02\x02\x02\xC3" +
		"#\x03\x02\x02\x02\xC4\xC8\x05&\x14\x02\xC5\xC8\x05(\x15\x02\xC6\xC8\x05" +
		"*\x16\x02\xC7\xC4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03" +
		"\x02\x02\x02\xC8%\x03\x02\x02\x02\xC9\xCB\x07\t\x02\x02\xCA\xC9\x03\x02" +
		"\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCF\x05," +
		"\x17\x02\xCD\xCE\x07\x07\x02\x02\xCE\xD0\x050\x19\x02\xCF\xCD\x03\x02" +
		"\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\'\x03\x02\x02\x02\xD1\xD7\x03\x02" +
		"\x02\x02\xD2\xD3\x07(\x02\x02\xD3\xD4\x05\x10\t\x02\xD4\xD5\x07\n\x02" +
		"\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD1\x03\x02\x02\x02\xD6\xD2\x03\x02\x02" +
		"\x02\xD7)\x03\x02\x02\x02\xD8\xD9\x07)\x02\x02\xD9+\x03\x02\x02\x02\xDA" +
		"\xDB\t\b\x02\x02\xDB-\x03\x02\x02\x02\xDC\xDD\x07,\x02\x02\xDD/\x03\x02" +
		"\x02\x02\xDE\xDF\x07)\x02\x02\xDF1\x03\x02\x02\x02\xE0\xE1\x07\'\x02\x02" +
		"\xE13\x03\x02\x02\x02\xE2\xE3\x07\'\x02\x02\xE35\x03\x02\x02\x02\x15@" +
		"KRUXgj\x84\x86\x92\x99\xA4\xB3\xB5\xC2\xC7\xCA\xCF\xD6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AqlParser.__ATN) {
			AqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AqlParser._serializedATN));
		}

		return AqlParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(AqlParser.SELECT, 0); }
	public selection(): SelectionContext {
		return this.getRuleContext(0, SelectionContext);
	}
	public FROM(): TerminalNode { return this.getToken(AqlParser.FROM, 0); }
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public filters(): FiltersContext {
		return this.getRuleContext(0, FiltersContext);
	}
	public EOF(): TerminalNode { return this.getToken(AqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_prog; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FiltersContext extends ParserRuleContext {
	public filter(): FilterContext[];
	public filter(i: number): FilterContext;
	public filter(i?: number): FilterContext | FilterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FilterContext);
		} else {
			return this.getRuleContext(i, FilterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_filters; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFilters) {
			listener.enterFilters(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFilters) {
			listener.exitFilters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFilters) {
			return visitor.visitFilters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.WHERE, 0); }
	public predicateExpr(): PredicateExprContext | undefined {
		return this.tryGetRuleContext(0, PredicateExprContext);
	}
	public SINCE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SINCE, 0); }
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(AqlParser.UNTIL, 0); }
	public timeseries(): TimeseriesContext | undefined {
		return this.tryGetRuleContext(0, TimeseriesContext);
	}
	public facet(): FacetContext | undefined {
		return this.tryGetRuleContext(0, FacetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_filter; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFilter) {
			listener.enterFilter(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFilter) {
			listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FacetContext extends ParserRuleContext {
	public FACET(): TerminalNode { return this.getToken(AqlParser.FACET, 0); }
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_facet; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFacet) {
			listener.enterFacet(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFacet) {
			listener.exitFacet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFacet) {
			return visitor.visitFacet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeseriesContext extends ParserRuleContext {
	public TIMESERIES(): TerminalNode { return this.getToken(AqlParser.TIMESERIES, 0); }
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public EVERY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.EVERY, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_timeseries; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeseries) {
			listener.enterTimeseries(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeseries) {
			listener.exitTimeseries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeseries) {
			return visitor.visitTimeseries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationContext extends ParserRuleContext {
	public timeDuration(): TimeDurationContext {
		return this.getRuleContext(0, TimeDurationContext);
	}
	public timeUnit(): TimeUnitContext {
		return this.getRuleContext(0, TimeUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_duration; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDuration) {
			listener.enterDuration(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDuration) {
			listener.exitDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDuration) {
			return visitor.visitDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeDurationContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(AqlParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_timeDuration; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeDuration) {
			listener.enterTimeDuration(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeDuration) {
			listener.exitTimeDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeDuration) {
			return visitor.visitTimeDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeUnitContext extends ParserRuleContext {
	public MINUTES(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MINUTES, 0); }
	public HOURS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.HOURS, 0); }
	public DAYS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DAYS, 0); }
	public WEEKS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.WEEKS, 0); }
	public MONTHS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MONTHS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_timeUnit; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeUnit) {
			listener.enterTimeUnit(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeUnit) {
			listener.exitTimeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeUnit) {
			return visitor.visitTimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionContext extends ParserRuleContext {
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	public selectionExpr(): SelectionExprContext[];
	public selectionExpr(i: number): SelectionExprContext;
	public selectionExpr(i?: number): SelectionExprContext | SelectionExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectionExprContext);
		} else {
			return this.getRuleContext(i, SelectionExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.COMMA);
		} else {
			return this.getToken(AqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_selection; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelection) {
			listener.enterSelection(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelection) {
			listener.exitSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelection) {
			return visitor.visitSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateExpr; }
	public copyFrom(ctx: PredicateExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicateBinaryContext extends PredicateExprContext {
	public _left: PredicateExprContext;
	public _operator: Token;
	public _right: PredicateExprContext;
	public predicateExpr(): PredicateExprContext[];
	public predicateExpr(i: number): PredicateExprContext;
	public predicateExpr(i?: number): PredicateExprContext | PredicateExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateExprContext);
		} else {
			return this.getRuleContext(i, PredicateExprContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STAR, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DIVIDE, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MINUS, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.GREATER_THAN, 0); }
	public GREATER_THAN_EQUALS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.GREATER_THAN_EQUALS, 0); }
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.LESS_THAN, 0); }
	public LESS_THAN_EQUALS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.LESS_THAN_EQUALS, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(AqlParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(AqlParser.NOT_EQUAL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OR, 0); }
	constructor(ctx: PredicateExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateBinary) {
			listener.enterPredicateBinary(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateBinary) {
			listener.exitPredicateBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateBinary) {
			return visitor.visitPredicateBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicateInTermsContext extends PredicateExprContext {
	public _left: PredicateExprContext;
	public _right: PredicateTermsContext;
	public IN(): TerminalNode { return this.getToken(AqlParser.IN, 0); }
	public predicateExpr(): PredicateExprContext {
		return this.getRuleContext(0, PredicateExprContext);
	}
	public predicateTerms(): PredicateTermsContext {
		return this.getRuleContext(0, PredicateTermsContext);
	}
	constructor(ctx: PredicateExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateInTerms) {
			listener.enterPredicateInTerms(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateInTerms) {
			listener.exitPredicateInTerms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateInTerms) {
			return visitor.visitPredicateInTerms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicateTermAltContext extends PredicateExprContext {
	public predicateTerm(): PredicateTermContext {
		return this.getRuleContext(0, PredicateTermContext);
	}
	constructor(ctx: PredicateExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateTermAlt) {
			listener.enterPredicateTermAlt(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateTermAlt) {
			listener.exitPredicateTermAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateTermAlt) {
			return visitor.visitPredicateTermAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateTerm; }
	public copyFrom(ctx: PredicateTermContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicateAtomContext extends PredicateTermContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FALSE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	constructor(ctx: PredicateTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateAtom) {
			listener.enterPredicateAtom(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateAtom) {
			listener.exitPredicateAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateAtom) {
			return visitor.visitPredicateAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicateNestedContext extends PredicateTermContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public predicateExpr(): PredicateExprContext {
		return this.getRuleContext(0, PredicateExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(ctx: PredicateTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateNested) {
			listener.enterPredicateNested(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateNested) {
			listener.exitPredicateNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateNested) {
			return visitor.visitPredicateNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateTermListContext extends ParserRuleContext {
	public _predicateTerm: PredicateTermContext;
	public _terms: PredicateTermContext[] = [];
	public predicateTerm(): PredicateTermContext[];
	public predicateTerm(i: number): PredicateTermContext;
	public predicateTerm(i?: number): PredicateTermContext | PredicateTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateTermContext);
		} else {
			return this.getRuleContext(i, PredicateTermContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.COMMA);
		} else {
			return this.getToken(AqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateTermList; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateTermList) {
			listener.enterPredicateTermList(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateTermList) {
			listener.exitPredicateTermList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateTermList) {
			return visitor.visitPredicateTermList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateTermsContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public predicateTermList(): PredicateTermListContext {
		return this.getRuleContext(0, PredicateTermListContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateTerms; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateTerms) {
			listener.enterPredicateTerms(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateTerms) {
			listener.exitPredicateTerms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateTerms) {
			return visitor.visitPredicateTerms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public funcName(): FuncNameContext {
		return this.getRuleContext(0, FuncNameContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	public selectionExpr(): SelectionExprContext | undefined {
		return this.tryGetRuleContext(0, SelectionExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_func; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncNameContext extends ParserRuleContext {
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COUNT, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MAX, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MIN, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AVG, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SUM, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ABS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_funcName; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFuncName) {
			listener.enterFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFuncName) {
			listener.exitFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFuncName) {
			return visitor.visitFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_selectionExpr; }
	public copyFrom(ctx: SelectionExprContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectionBinaryContext extends SelectionExprContext {
	public _left: SelectionExprContext;
	public _operator: Token;
	public _right: SelectionExprContext;
	public selectionExpr(): SelectionExprContext[];
	public selectionExpr(i: number): SelectionExprContext;
	public selectionExpr(i?: number): SelectionExprContext | SelectionExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectionExprContext);
		} else {
			return this.getRuleContext(i, SelectionExprContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STAR, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DIVIDE, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MINUS, 0); }
	constructor(ctx: SelectionExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionBinary) {
			listener.enterSelectionBinary(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionBinary) {
			listener.exitSelectionBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionBinary) {
			return visitor.visitSelectionBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectionTermAltContext extends SelectionExprContext {
	public selectionTerm(): SelectionTermContext {
		return this.getRuleContext(0, SelectionTermContext);
	}
	constructor(ctx: SelectionExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionTermAlt) {
			listener.enterSelectionTermAlt(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionTermAlt) {
			listener.exitSelectionTermAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionTermAlt) {
			return visitor.visitSelectionTermAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_selectionTerm; }
	public copyFrom(ctx: SelectionTermContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectionFunctionContext extends SelectionTermContext {
	public func(): FuncContext {
		return this.getRuleContext(0, FuncContext);
	}
	constructor(ctx: SelectionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionFunction) {
			listener.enterSelectionFunction(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionFunction) {
			listener.exitSelectionFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionFunction) {
			return visitor.visitSelectionFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectionAtomContext extends SelectionTermContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FALSE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	constructor(ctx: SelectionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionAtom) {
			listener.enterSelectionAtom(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionAtom) {
			listener.exitSelectionAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionAtom) {
			return visitor.visitSelectionAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectionNestedContext extends SelectionTermContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public selectionExpr(): SelectionExprContext {
		return this.getRuleContext(0, SelectionExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(ctx: SelectionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionNested) {
			listener.enterSelectionNested(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionNested) {
			listener.exitSelectionNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionNested) {
			return visitor.visitSelectionNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public relativeDay(): RelativeDayContext | undefined {
		return this.tryGetRuleContext(0, RelativeDayContext);
	}
	public relativeTimeUnit(): RelativeTimeUnitContext | undefined {
		return this.tryGetRuleContext(0, RelativeTimeUnitContext);
	}
	public absoluteDate(): AbsoluteDateContext | undefined {
		return this.tryGetRuleContext(0, AbsoluteDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_date; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelativeDayContext extends ParserRuleContext {
	public day(): DayContext {
		return this.getRuleContext(0, DayContext);
	}
	public LAST(): TerminalNode | undefined { return this.tryGetToken(AqlParser.LAST, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AT, 0); }
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_relativeDay; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterRelativeDay) {
			listener.enterRelativeDay(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitRelativeDay) {
			listener.exitRelativeDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitRelativeDay) {
			return visitor.visitRelativeDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelativeTimeUnitContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public timeUnit(): TimeUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeUnitContext);
	}
	public AGO(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AGO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_relativeTimeUnit; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterRelativeTimeUnit) {
			listener.enterRelativeTimeUnit(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitRelativeTimeUnit) {
			listener.exitRelativeTimeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitRelativeTimeUnit) {
			return visitor.visitRelativeTimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbsoluteDateContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_absoluteDate; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterAbsoluteDate) {
			listener.enterAbsoluteDate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitAbsoluteDate) {
			listener.exitAbsoluteDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitAbsoluteDate) {
			return visitor.visitAbsoluteDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DayContext extends ParserRuleContext {
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TODAY, 0); }
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.YESTERDAY, 0); }
	public MONDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MONDAY, 0); }
	public TUESDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TUESDAY, 0); }
	public WEDNESDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.WEDNESDAY, 0); }
	public THURSDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.THURSDAY, 0); }
	public FRIDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FRIDAY, 0); }
	public SATURDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SATURDAY, 0); }
	public SUNDAY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SUNDAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_day; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDay) {
			listener.enterDay(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDay) {
			listener.exitDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDay) {
			return visitor.visitDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(AqlParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_wildcard; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterWildcard) {
			listener.enterWildcard(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitWildcard) {
			listener.exitWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_time; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_table; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_column; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterColumn) {
			listener.enterColumn(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitColumn) {
			listener.exitColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitColumn) {
			return visitor.visitColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


