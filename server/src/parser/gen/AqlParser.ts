// Generated from Aql.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { AqlListener } from './AqlListener';
import { AqlVisitor } from './AqlVisitor';


export class AqlParser extends Parser {
	public static readonly SELECT=1;
	public static readonly FROM=2;
	public static readonly SINCE=3;
	public static readonly UNTIL=4;
	public static readonly AT=5;
	public static readonly WHERE=6;
	public static readonly LAST=7;
	public static readonly AGO=8;
	public static readonly TRUE=9;
	public static readonly FALSE=10;
	public static readonly TODAY=11;
	public static readonly YESTERDAY=12;
	public static readonly MONDAY=13;
	public static readonly TUESDAY=14;
	public static readonly WEDNESDAY=15;
	public static readonly THURSDAY=16;
	public static readonly FRIDAY=17;
	public static readonly SATURDAY=18;
	public static readonly SUNDAY=19;
	public static readonly MINUTES=20;
	public static readonly HOURS=21;
	public static readonly DAYS=22;
	public static readonly WEEKS=23;
	public static readonly MONTHS=24;
	public static readonly COUNT=25;
	public static readonly MAX=26;
	public static readonly MIN=27;
	public static readonly ABS=28;
	public static readonly SUM=29;
	public static readonly AVG=30;
	public static readonly TIMESERIES=31;
	public static readonly FACET=32;
	public static readonly AND=33;
	public static readonly OR=34;
	public static readonly IDENTIFIER=35;
	public static readonly INT=36;
	public static readonly STRING=37;
	public static readonly OPEN_PAREN=38;
	public static readonly CLOSE_PAREN=39;
	public static readonly STAR=40;
	public static readonly DIVIDE=41;
	public static readonly PLUS=42;
	public static readonly MINUS=43;
	public static readonly EQUAL=44;
	public static readonly NOT_EQUAL=45;
	public static readonly GREATER_THAN=46;
	public static readonly GREATER_THAN_EQUALS=47;
	public static readonly LESS_THAN=48;
	public static readonly LESS_THAN_EQUALS=49;
	public static readonly COMMA=50;
	public static readonly COMMENT=51;
	public static readonly WS=52;
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
	public static readonly RULE_func = 11;
	public static readonly RULE_funcName = 12;
	public static readonly RULE_selectionExpr = 13;
	public static readonly RULE_selectionTerm = 14;
	public static readonly RULE_date = 15;
	public static readonly RULE_relativeDay = 16;
	public static readonly RULE_relativeTimeUnit = 17;
	public static readonly RULE_absoluteDate = 18;
	public static readonly RULE_day = 19;
	public static readonly RULE_wildcard = 20;
	public static readonly RULE_time = 21;
	public static readonly RULE_table = 22;
	public static readonly RULE_column = 23;
	public static readonly ruleNames: string[] = [
		"prog", "filters", "filter", "facet", "timeseries", "duration", "timeDuration", 
		"timeUnit", "selection", "predicateExpr", "predicateTerm", "func", "funcName", 
		"selectionExpr", "selectionTerm", "date", "relativeDay", "relativeTimeUnit", 
		"absoluteDate", "day", "wildcard", "time", "table", "column"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'true'", "'false'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'('", "')'", "'*'", "'/'", "'+'", "'-'", 
		"'='", "'!='", "'>'", "'>='", "'<'", "'<='", "','"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "LAST", 
		"AGO", "TRUE", "FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", "WEDNESDAY", 
		"THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MINUTES", "HOURS", "DAYS", 
		"WEEKS", "MONTHS", "COUNT", "MAX", "MIN", "ABS", "SUM", "AVG", "TIMESERIES", 
		"FACET", "AND", "OR", "IDENTIFIER", "INT", "STRING", "OPEN_PAREN", "CLOSE_PAREN", 
		"STAR", "DIVIDE", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", "GREATER_THAN", 
		"GREATER_THAN_EQUALS", "LESS_THAN", "LESS_THAN_EQUALS", "COMMA", "COMMENT", 
		"WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AqlParser._LITERAL_NAMES, AqlParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return AqlParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Aql.g4"; }

	@Override
	public get ruleNames(): string[] { return AqlParser.ruleNames; }

	@Override
	public get serializedATN(): string { return AqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AqlParser._ATN, this);
	}
	@RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AqlParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(AqlParser.SELECT);
			this.state = 49;
			this.selection();
			this.state = 50;
			this.match(AqlParser.FROM);
			this.state = 51;
			this.table();
			this.state = 52;
			this.filters();
			this.state = 53;
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
	@RuleVersion(0)
	public filters(): FiltersContext {
		let _localctx: FiltersContext = new FiltersContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AqlParser.RULE_filters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (AqlParser.SINCE - 3)) | (1 << (AqlParser.UNTIL - 3)) | (1 << (AqlParser.WHERE - 3)) | (1 << (AqlParser.TIMESERIES - 3)) | (1 << (AqlParser.FACET - 3)))) !== 0)) {
				{
				{
				this.state = 55;
				this.filter();
				}
				}
				this.state = 60;
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
	@RuleVersion(0)
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AqlParser.RULE_filter);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(AqlParser.WHERE);
				this.state = 62;
				this.predicateExpr(0);
				}
				break;
			case AqlParser.SINCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(AqlParser.SINCE);
				this.state = 64;
				this.date();
				}
				break;
			case AqlParser.UNTIL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 65;
				this.match(AqlParser.UNTIL);
				this.state = 66;
				this.date();
				}
				break;
			case AqlParser.TIMESERIES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 67;
				this.timeseries();
				}
				break;
			case AqlParser.FACET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 68;
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
	@RuleVersion(0)
	public facet(): FacetContext {
		let _localctx: FacetContext = new FacetContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AqlParser.RULE_facet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(AqlParser.FACET);
			this.state = 72;
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
	@RuleVersion(0)
	public timeseries(): TimeseriesContext {
		let _localctx: TimeseriesContext = new TimeseriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AqlParser.RULE_timeseries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(AqlParser.TIMESERIES);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AqlParser.INT) {
				{
				this.state = 75;
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
	@RuleVersion(0)
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AqlParser.RULE_duration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.timeDuration();
			this.state = 79;
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
	@RuleVersion(0)
	public timeDuration(): TimeDurationContext {
		let _localctx: TimeDurationContext = new TimeDurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AqlParser.RULE_timeDuration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
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
	@RuleVersion(0)
	public timeUnit(): TimeUnitContext {
		let _localctx: TimeUnitContext = new TimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AqlParser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.MINUTES) | (1 << AqlParser.HOURS) | (1 << AqlParser.DAYS) | (1 << AqlParser.WEEKS) | (1 << AqlParser.MONTHS))) !== 0)) ) {
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
	@RuleVersion(0)
	public selection(): SelectionContext {
		let _localctx: SelectionContext = new SelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AqlParser.RULE_selection);
		let _la: number;
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
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
				this.state = 86;
				this.selectionExpr(0);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AqlParser.COMMA) {
					{
					{
					this.state = 87;
					this.match(AqlParser.COMMA);
					this.state = 88;
					this.selectionExpr(0);
					}
					}
					this.state = 93;
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
	@RuleVersion(0)
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

			this.state = 97;
			this.predicateTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
					case 1:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 99;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 100;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.STAR || _la===AqlParser.DIVIDE) ) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 101;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(8);
						}
						break;

					case 2:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 102;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 103;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.PLUS || _la===AqlParser.MINUS) ) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 104;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(7);
						}
						break;

					case 3:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 105;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 106;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AqlParser.GREATER_THAN - 46)) | (1 << (AqlParser.GREATER_THAN_EQUALS - 46)) | (1 << (AqlParser.LESS_THAN - 46)) | (1 << (AqlParser.LESS_THAN_EQUALS - 46)))) !== 0)) ) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 107;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(6);
						}
						break;

					case 4:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 108;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 109;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.EQUAL || _la===AqlParser.NOT_EQUAL) ) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 110;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(5);
						}
						break;

					case 5:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 111;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 112;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.AND);
						this.state = 113;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(4);
						}
						break;

					case 6:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 114;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 115;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.OR);
						this.state = 116;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
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
	@RuleVersion(0)
	public predicateTerm(): PredicateTermContext {
		let _localctx: PredicateTermContext = new PredicateTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AqlParser.RULE_predicateTerm);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.IDENTIFIER:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 125;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 126;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new PredicateNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 127;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 128;
				this.predicateExpr(0);
				this.state = 129;
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
	@RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AqlParser.RULE_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.funcName();
			this.state = 134;
			this.match(AqlParser.OPEN_PAREN);
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				{
				this.state = 135;
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
				this.state = 136;
				this.selectionExpr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 139;
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
	@RuleVersion(0)
	public funcName(): FuncNameContext {
		let _localctx: FuncNameContext = new FuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AqlParser.RULE_funcName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.COUNT) | (1 << AqlParser.MAX) | (1 << AqlParser.MIN) | (1 << AqlParser.ABS) | (1 << AqlParser.SUM) | (1 << AqlParser.AVG))) !== 0)) ) {
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
	@RuleVersion(0)
	public selectionExpr(_p?: number): SelectionExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SelectionExprContext = new SelectionExprContext(this._ctx, _parentState);
		let _prevctx: SelectionExprContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, AqlParser.RULE_selectionExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SelectionTermAltContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 144;
			this.selectionTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 152;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
					case 1:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 146;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 147;
						(_localctx as SelectionBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.STAR || _la===AqlParser.DIVIDE) ) {
							(_localctx as SelectionBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 148;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(4);
						}
						break;

					case 2:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 149;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 150;
						(_localctx as SelectionBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.PLUS || _la===AqlParser.MINUS) ) {
							(_localctx as SelectionBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 151;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
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
	@RuleVersion(0)
	public selectionTerm(): SelectionTermContext {
		let _localctx: SelectionTermContext = new SelectionTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AqlParser.RULE_selectionTerm);
		try {
			this.state = 167;
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
				this.state = 157;
				this.func();
				}
				break;
			case AqlParser.IDENTIFIER:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 160;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 161;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 162;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new SelectionNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 163;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 164;
				this.selectionExpr(0);
				this.state = 165;
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
	@RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AqlParser.RULE_date);
		try {
			this.state = 172;
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
				this.state = 169;
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
				this.state = 170;
				this.relativeTimeUnit();
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
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
	@RuleVersion(0)
	public relativeDay(): RelativeDayContext {
		let _localctx: RelativeDayContext = new RelativeDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AqlParser.RULE_relativeDay);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AqlParser.LAST) {
				{
				this.state = 174;
				this.match(AqlParser.LAST);
				}
			}

			this.state = 177;
			this.day();
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AqlParser.AT) {
				{
				this.state = 178;
				this.match(AqlParser.AT);
				this.state = 179;
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
	@RuleVersion(0)
	public relativeTimeUnit(): RelativeTimeUnitContext {
		let _localctx: RelativeTimeUnitContext = new RelativeTimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AqlParser.RULE_relativeTimeUnit);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.EOF:
			case AqlParser.SINCE:
			case AqlParser.UNTIL:
			case AqlParser.WHERE:
			case AqlParser.TIMESERIES:
			case AqlParser.FACET:
				this.enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case AqlParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.match(AqlParser.INT);
				this.state = 184;
				this.timeUnit();
				this.state = 185;
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
	@RuleVersion(0)
	public absoluteDate(): AbsoluteDateContext {
		let _localctx: AbsoluteDateContext = new AbsoluteDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AqlParser.RULE_absoluteDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
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
	@RuleVersion(0)
	public day(): DayContext {
		let _localctx: DayContext = new DayContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AqlParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.TODAY) | (1 << AqlParser.YESTERDAY) | (1 << AqlParser.MONDAY) | (1 << AqlParser.TUESDAY) | (1 << AqlParser.WEDNESDAY) | (1 << AqlParser.THURSDAY) | (1 << AqlParser.FRIDAY) | (1 << AqlParser.SATURDAY) | (1 << AqlParser.SUNDAY))) !== 0)) ) {
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
	@RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AqlParser.RULE_wildcard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
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
	@RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AqlParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
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
	@RuleVersion(0)
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AqlParser.RULE_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
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
	@RuleVersion(0)
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AqlParser.RULE_column);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
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

		case 13:
			return this.selectionExpr_sempred(_localctx as SelectionExprContext, predIndex);
		}
		return true;
	}
	private predicateExpr_sempred(_localctx: PredicateExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private selectionExpr_sempred(_localctx: SelectionExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x036\xCC\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
		"\x03\x02\x03\x03\x07\x03;\n\x03\f\x03\x0E\x03>\v\x03\x03\x04\x03\x04\x03"+
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04H\n\x04\x03\x05\x03"+
		"\x05\x03\x05\x03\x06\x03\x06\x05\x06O\n\x06\x03\x07\x03\x07\x03\x07\x03"+
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\\\n\n\f\n\x0E\n_\v"+
		"\n\x05\na\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07"+
		"\vx\n\v\f\v\x0E\v{\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f"+
		"\x03\f\x05\f\x86\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\x8C\n\r\x03\r\x03\r"+
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x07\x0F\x9B\n\x0F\f\x0F\x0E\x0F\x9E\v\x0F\x03\x10\x03"+
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05"+
		"\x10\xAA\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xAF\n\x11\x03\x12\x05\x12"+
		"\xB2\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB7\n\x12\x03\x13\x03\x13\x03"+
		"\x13\x03\x13\x03\x13\x05\x13\xBE\n\x13\x03\x14\x03\x14\x03\x15\x03\x15"+
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19"+
		"\x02\x02\x04\x14\x1C\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E"+
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 "+
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\t\x03\x02\x16\x1A\x03"+
		"\x02*+\x03\x02,-\x03\x0203\x03\x02./\x03\x02\x1B \x03\x02\r\x15\xD4\x02"+
		"2\x03\x02\x02\x02\x04<\x03\x02\x02\x02\x06G\x03\x02\x02\x02\bI\x03\x02"+
		"\x02\x02\nL\x03\x02\x02\x02\fP\x03\x02\x02\x02\x0ES\x03\x02\x02\x02\x10"+
		"U\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14b\x03\x02\x02\x02\x16\x85\x03"+
		"\x02\x02\x02\x18\x87\x03\x02\x02\x02\x1A\x8F\x03\x02\x02\x02\x1C\x91\x03"+
		"\x02\x02\x02\x1E\xA9\x03\x02\x02\x02 \xAE\x03\x02\x02\x02\"\xB1\x03\x02"+
		"\x02\x02$\xBD\x03\x02\x02\x02&\xBF\x03\x02\x02\x02(\xC1\x03\x02\x02\x02"+
		"*\xC3\x03\x02\x02\x02,\xC5\x03\x02\x02\x02.\xC7\x03\x02\x02\x020\xC9\x03"+
		"\x02\x02\x0223\x07\x03\x02\x0234\x05\x12\n\x0245\x07\x04\x02\x0256\x05"+
		".\x18\x0267\x05\x04\x03\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029;\x05"+
		"\x06\x04\x02:9\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03"+
		"\x02\x02\x02=\x05\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07\b\x02\x02@H"+
		"\x05\x14\v\x02AB\x07\x05\x02\x02BH\x05 \x11\x02CD\x07\x06\x02\x02DH\x05"+
		" \x11\x02EH\x05\n\x06\x02FH\x05\b\x05\x02G?\x03\x02\x02\x02GA\x03\x02"+
		"\x02\x02GC\x03\x02\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02H\x07\x03"+
		"\x02\x02\x02IJ\x07\"\x02\x02JK\x050\x19\x02K\t\x03\x02\x02\x02LN\x07!"+
		"\x02\x02MO\x05\f\x07\x02NM\x03\x02\x02\x02NO\x03\x02\x02\x02O\v\x03\x02"+
		"\x02\x02PQ\x05\x0E\b\x02QR\x05\x10\t\x02R\r\x03\x02\x02\x02ST\x07&\x02"+
		"\x02T\x0F\x03\x02\x02\x02UV\t\x02\x02\x02V\x11\x03\x02\x02\x02Wa\x05*"+
		"\x16\x02X]\x05\x1C\x0F\x02YZ\x074\x02\x02Z\\\x05\x1C\x0F\x02[Y\x03\x02"+
		"\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^a\x03"+
		"\x02\x02\x02_]\x03\x02\x02\x02`W\x03\x02\x02\x02`X\x03\x02\x02\x02a\x13"+
		"\x03\x02\x02\x02bc\b\v\x01\x02cd\x05\x16\f\x02dy\x03\x02\x02\x02ef\f\t"+
		"\x02\x02fg\t\x03\x02\x02gx\x05\x14\v\nhi\f\b\x02\x02ij\t\x04\x02\x02j"+
		"x\x05\x14\v\tkl\f\x07\x02\x02lm\t\x05\x02\x02mx\x05\x14\v\bno\f\x06\x02"+
		"\x02op\t\x06\x02\x02px\x05\x14\v\x07qr\f\x05\x02\x02rs\x07#\x02\x02sx"+
		"\x05\x14\v\x06tu\f\x04\x02\x02uv\x07$\x02\x02vx\x05\x14\v\x05we\x03\x02"+
		"\x02\x02wh\x03\x02\x02\x02wk\x03\x02\x02\x02wn\x03\x02\x02\x02wq\x03\x02"+
		"\x02\x02wt\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02"+
		"\x02\x02z\x15\x03\x02\x02\x02{y\x03\x02\x02\x02|\x86\x050\x19\x02}\x86"+
		"\x07&\x02\x02~\x86\x07\v\x02\x02\x7F\x86\x07\f\x02\x02\x80\x86\x07\'\x02"+
		"\x02\x81\x82\x07(\x02\x02\x82\x83\x05\x14\v\x02\x83\x84\x07)\x02\x02\x84"+
		"\x86\x03\x02\x02\x02\x85|\x03\x02\x02\x02\x85}\x03\x02\x02\x02\x85~\x03"+
		"\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03"+
		"\x02\x02\x02\x86\x17\x03\x02\x02\x02\x87\x88\x05\x1A\x0E\x02\x88\x8B\x07"+
		"(\x02\x02\x89\x8C\x05*\x16\x02\x8A\x8C\x05\x1C\x0F\x02\x8B\x89\x03\x02"+
		"\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x07)"+
		"\x02\x02\x8E\x19\x03\x02\x02\x02\x8F\x90\t\x07\x02\x02\x90\x1B\x03\x02"+
		"\x02\x02\x91\x92\b\x0F\x01\x02\x92\x93\x05\x1E\x10\x02\x93\x9C\x03\x02"+
		"\x02\x02\x94\x95\f\x05\x02\x02\x95\x96\t\x03\x02\x02\x96\x9B\x05\x1C\x0F"+
		"\x06\x97\x98\f\x04\x02\x02\x98\x99\t\x04\x02\x02\x99\x9B\x05\x1C\x0F\x05"+
		"\x9A\x94\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02"+
		"\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x1D\x03\x02\x02\x02"+
		"\x9E\x9C\x03\x02\x02\x02\x9F\xAA\x05\x18\r\x02\xA0\xAA\x050\x19\x02\xA1"+
		"\xAA\x07&\x02\x02\xA2\xAA\x07\v\x02\x02\xA3\xAA\x07\f\x02\x02\xA4\xAA"+
		"\x07\'\x02\x02\xA5\xA6\x07(\x02\x02\xA6\xA7\x05\x1C\x0F\x02\xA7\xA8\x07"+
		")\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\x9F\x03\x02\x02\x02\xA9\xA0\x03"+
		"\x02\x02\x02\xA9\xA1\x03\x02\x02\x02\xA9\xA2\x03\x02\x02\x02\xA9\xA3\x03"+
		"\x02\x02\x02\xA9\xA4\x03\x02\x02\x02\xA9\xA5\x03\x02\x02\x02\xAA\x1F\x03"+
		"\x02\x02\x02\xAB\xAF\x05\"\x12\x02\xAC\xAF\x05$\x13\x02\xAD\xAF\x05&\x14"+
		"\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02\x02"+
		"\x02\xAF!\x03\x02\x02\x02\xB0\xB2\x07\t\x02\x02\xB1\xB0\x03\x02\x02\x02"+
		"\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x05(\x15\x02"+
		"\xB4\xB5\x07\x07\x02\x02\xB5\xB7\x05,\x17\x02\xB6\xB4\x03\x02\x02\x02"+
		"\xB6\xB7\x03\x02\x02\x02\xB7#\x03\x02\x02\x02\xB8\xBE\x03\x02\x02\x02"+
		"\xB9\xBA\x07&\x02\x02\xBA\xBB\x05\x10\t\x02\xBB\xBC\x07\n\x02\x02\xBC"+
		"\xBE\x03\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02\xBE"+
		"%\x03\x02\x02\x02\xBF\xC0\x07\'\x02\x02\xC0\'\x03\x02\x02\x02\xC1\xC2"+
		"\t\b\x02\x02\xC2)\x03\x02\x02\x02\xC3\xC4\x07*\x02\x02\xC4+\x03\x02\x02"+
		"\x02\xC5\xC6\x07\'\x02\x02\xC6-\x03\x02\x02\x02\xC7\xC8\x07%\x02\x02\xC8"+
		"/\x03\x02\x02\x02\xC9\xCA\x07%\x02\x02\xCA1\x03\x02\x02\x02\x12<GN]`w"+
		"y\x85\x8B\x9A\x9C\xA9\xAE\xB1\xB6\xBD";
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_prog; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterProg) listener.enterProg(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitProg) listener.exitProg(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitProg) return visitor.visitProg(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_filters; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFilters) listener.enterFilters(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFilters) listener.exitFilters(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFilters) return visitor.visitFilters(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_filter; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFilter) listener.enterFilter(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFilter) listener.exitFilter(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFilter) return visitor.visitFilter(this);
		else return visitor.visitChildren(this);
	}
}


export class FacetContext extends ParserRuleContext {
	public FACET(): TerminalNode { return this.getToken(AqlParser.FACET, 0); }
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_facet; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFacet) listener.enterFacet(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFacet) listener.exitFacet(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFacet) return visitor.visitFacet(this);
		else return visitor.visitChildren(this);
	}
}


export class TimeseriesContext extends ParserRuleContext {
	public TIMESERIES(): TerminalNode { return this.getToken(AqlParser.TIMESERIES, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_timeseries; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeseries) listener.enterTimeseries(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeseries) listener.exitTimeseries(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeseries) return visitor.visitTimeseries(this);
		else return visitor.visitChildren(this);
	}
}


export class DurationContext extends ParserRuleContext {
	public timeDuration(): TimeDurationContext {
		return this.getRuleContext(0, TimeDurationContext);
	}
	public timeUnit(): TimeUnitContext {
		return this.getRuleContext(0, TimeUnitContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_duration; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDuration) listener.enterDuration(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDuration) listener.exitDuration(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDuration) return visitor.visitDuration(this);
		else return visitor.visitChildren(this);
	}
}


export class TimeDurationContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(AqlParser.INT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_timeDuration; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeDuration) listener.enterTimeDuration(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeDuration) listener.exitTimeDuration(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeDuration) return visitor.visitTimeDuration(this);
		else return visitor.visitChildren(this);
	}
}


export class TimeUnitContext extends ParserRuleContext {
	public MINUTES(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MINUTES, 0); }
	public HOURS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.HOURS, 0); }
	public DAYS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DAYS, 0); }
	public WEEKS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.WEEKS, 0); }
	public MONTHS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MONTHS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_timeUnit; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTimeUnit) listener.enterTimeUnit(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTimeUnit) listener.exitTimeUnit(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTimeUnit) return visitor.visitTimeUnit(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_selection; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelection) listener.enterSelection(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelection) listener.exitSelection(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelection) return visitor.visitSelection(this);
		else return visitor.visitChildren(this);
	}
}


export class PredicateExprContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_predicateExpr; }
 
	public copyFrom(ctx: PredicateExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicateTermAltContext extends PredicateExprContext {
	public predicateTerm(): PredicateTermContext {
		return this.getRuleContext(0, PredicateTermContext);
	}
	constructor(ctx: PredicateExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateTermAlt) listener.enterPredicateTermAlt(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateTermAlt) listener.exitPredicateTermAlt(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateTermAlt) return visitor.visitPredicateTermAlt(this);
		else return visitor.visitChildren(this);
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
	constructor(ctx: PredicateExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateBinary) listener.enterPredicateBinary(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateBinary) listener.exitPredicateBinary(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateBinary) return visitor.visitPredicateBinary(this);
		else return visitor.visitChildren(this);
	}
}


export class PredicateTermContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_predicateTerm; }
 
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
	constructor(ctx: PredicateTermContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateAtom) listener.enterPredicateAtom(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateAtom) listener.exitPredicateAtom(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateAtom) return visitor.visitPredicateAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class PredicateNestedContext extends PredicateTermContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public predicateExpr(): PredicateExprContext {
		return this.getRuleContext(0, PredicateExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(ctx: PredicateTermContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateNested) listener.enterPredicateNested(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateNested) listener.exitPredicateNested(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateNested) return visitor.visitPredicateNested(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_func; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFunc) listener.enterFunc(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFunc) listener.exitFunc(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFunc) return visitor.visitFunc(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncNameContext extends ParserRuleContext {
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COUNT, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MAX, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MIN, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AVG, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SUM, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ABS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_funcName; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFuncName) listener.enterFuncName(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFuncName) listener.exitFuncName(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFuncName) return visitor.visitFuncName(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectionExprContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_selectionExpr; }
 
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
	constructor(ctx: SelectionExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionBinary) listener.enterSelectionBinary(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionBinary) listener.exitSelectionBinary(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionBinary) return visitor.visitSelectionBinary(this);
		else return visitor.visitChildren(this);
	}
}
export class SelectionTermAltContext extends SelectionExprContext {
	public selectionTerm(): SelectionTermContext {
		return this.getRuleContext(0, SelectionTermContext);
	}
	constructor(ctx: SelectionExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionTermAlt) listener.enterSelectionTermAlt(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionTermAlt) listener.exitSelectionTermAlt(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionTermAlt) return visitor.visitSelectionTermAlt(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectionTermContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_selectionTerm; }
 
	public copyFrom(ctx: SelectionTermContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectionFunctionContext extends SelectionTermContext {
	public func(): FuncContext {
		return this.getRuleContext(0, FuncContext);
	}
	constructor(ctx: SelectionTermContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionFunction) listener.enterSelectionFunction(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionFunction) listener.exitSelectionFunction(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionFunction) return visitor.visitSelectionFunction(this);
		else return visitor.visitChildren(this);
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
	constructor(ctx: SelectionTermContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionAtom) listener.enterSelectionAtom(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionAtom) listener.exitSelectionAtom(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionAtom) return visitor.visitSelectionAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class SelectionNestedContext extends SelectionTermContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(AqlParser.OPEN_PAREN, 0); }
	public selectionExpr(): SelectionExprContext {
		return this.getRuleContext(0, SelectionExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(ctx: SelectionTermContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionNested) listener.enterSelectionNested(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionNested) listener.exitSelectionNested(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectionNested) return visitor.visitSelectionNested(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_date; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDate) listener.enterDate(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDate) listener.exitDate(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDate) return visitor.visitDate(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_relativeDay; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterRelativeDay) listener.enterRelativeDay(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitRelativeDay) listener.exitRelativeDay(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitRelativeDay) return visitor.visitRelativeDay(this);
		else return visitor.visitChildren(this);
	}
}


export class RelativeTimeUnitContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public timeUnit(): TimeUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeUnitContext);
	}
	public AGO(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AGO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_relativeTimeUnit; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterRelativeTimeUnit) listener.enterRelativeTimeUnit(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitRelativeTimeUnit) listener.exitRelativeTimeUnit(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitRelativeTimeUnit) return visitor.visitRelativeTimeUnit(this);
		else return visitor.visitChildren(this);
	}
}


export class AbsoluteDateContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_absoluteDate; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterAbsoluteDate) listener.enterAbsoluteDate(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitAbsoluteDate) listener.exitAbsoluteDate(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitAbsoluteDate) return visitor.visitAbsoluteDate(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_day; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterDay) listener.enterDay(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitDay) listener.exitDay(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitDay) return visitor.visitDay(this);
		else return visitor.visitChildren(this);
	}
}


export class WildcardContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(AqlParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_wildcard; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterWildcard) listener.enterWildcard(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitWildcard) listener.exitWildcard(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitWildcard) return visitor.visitWildcard(this);
		else return visitor.visitChildren(this);
	}
}


export class TimeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_time; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTime) listener.enterTime(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTime) listener.exitTime(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTime) return visitor.visitTime(this);
		else return visitor.visitChildren(this);
	}
}


export class TableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_table; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTable) listener.enterTable(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTable) listener.exitTable(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTable) return visitor.visitTable(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_column; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterColumn) listener.enterColumn(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitColumn) listener.exitColumn(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitColumn) return visitor.visitColumn(this);
		else return visitor.visitChildren(this);
	}
}


