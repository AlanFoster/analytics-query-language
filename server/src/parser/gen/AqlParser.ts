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
	public static readonly TRUE=7;
	public static readonly FALSE=8;
	public static readonly TODAY=9;
	public static readonly YESTERDAY=10;
	public static readonly MONDAY=11;
	public static readonly TUESDAY=12;
	public static readonly WEDNESDAY=13;
	public static readonly THURSDAY=14;
	public static readonly FRIDAY=15;
	public static readonly SATURDAY=16;
	public static readonly SUNDAY=17;
	public static readonly COUNT=18;
	public static readonly MAX=19;
	public static readonly MIN=20;
	public static readonly SUM=21;
	public static readonly AVG=22;
	public static readonly AND=23;
	public static readonly OR=24;
	public static readonly IDENTIFIER=25;
	public static readonly INT=26;
	public static readonly STRING=27;
	public static readonly OPEN_PAREN=28;
	public static readonly CLOSE_PAREN=29;
	public static readonly STAR=30;
	public static readonly DIVIDE=31;
	public static readonly PLUS=32;
	public static readonly MINUS=33;
	public static readonly EQUAL=34;
	public static readonly NOT_EQUAL=35;
	public static readonly GREATER_THAN=36;
	public static readonly GREATER_THAN_EQUALS=37;
	public static readonly LESS_THAN=38;
	public static readonly LESS_THAN_EQUALS=39;
	public static readonly COMMA=40;
	public static readonly COMMENT=41;
	public static readonly WS=42;
	public static readonly RULE_prog = 0;
	public static readonly RULE_filters = 1;
	public static readonly RULE_filter = 2;
	public static readonly RULE_selection = 3;
	public static readonly RULE_predicateExpr = 4;
	public static readonly RULE_predicateTerm = 5;
	public static readonly RULE_func = 6;
	public static readonly RULE_funcName = 7;
	public static readonly RULE_selectionExpr = 8;
	public static readonly RULE_selectionTerm = 9;
	public static readonly RULE_date = 10;
	public static readonly RULE_relativeDate = 11;
	public static readonly RULE_absoluteDate = 12;
	public static readonly RULE_day = 13;
	public static readonly RULE_wildcard = 14;
	public static readonly RULE_time = 15;
	public static readonly RULE_table = 16;
	public static readonly RULE_column = 17;
	public static readonly ruleNames: string[] = [
		"prog", "filters", "filter", "selection", "predicateExpr", "predicateTerm", 
		"func", "funcName", "selectionExpr", "selectionTerm", "date", "relativeDate", 
		"absoluteDate", "day", "wildcard", "time", "table", "column"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'true'", "'false'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'('", "')'", "'*'", "'/'", "'+'", "'-'", "'='", "'!='", "'>'", "'>='", 
		"'<'", "'<='", "','"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "TRUE", 
		"FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", 
		"FRIDAY", "SATURDAY", "SUNDAY", "COUNT", "MAX", "MIN", "SUM", "AVG", "AND", 
		"OR", "IDENTIFIER", "INT", "STRING", "OPEN_PAREN", "CLOSE_PAREN", "STAR", 
		"DIVIDE", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", "GREATER_THAN", "GREATER_THAN_EQUALS", 
		"LESS_THAN", "LESS_THAN_EQUALS", "COMMA", "COMMENT", "WS"
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
			this.state = 36;
			this.match(AqlParser.SELECT);
			this.state = 37;
			this.selection();
			this.state = 38;
			this.match(AqlParser.FROM);
			this.state = 39;
			this.table();
			this.state = 40;
			this.filters();
			this.state = 41;
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
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.SINCE) | (1 << AqlParser.UNTIL) | (1 << AqlParser.WHERE))) !== 0)) {
				{
				{
				this.state = 43;
				this.filter();
				}
				}
				this.state = 48;
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
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.match(AqlParser.WHERE);
				this.state = 50;
				this.predicateExpr(0);
				}
				break;
			case AqlParser.SINCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.match(AqlParser.SINCE);
				this.state = 52;
				this.date();
				}
				break;
			case AqlParser.UNTIL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 53;
				this.match(AqlParser.UNTIL);
				this.state = 54;
				this.date();
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
	public selection(): SelectionContext {
		let _localctx: SelectionContext = new SelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AqlParser.RULE_selection);
		let _la: number;
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.SUM:
			case AqlParser.AVG:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.selectionExpr(0);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AqlParser.COMMA) {
					{
					{
					this.state = 59;
					this.match(AqlParser.COMMA);
					this.state = 60;
					this.selectionExpr(0);
					}
					}
					this.state = 65;
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, AqlParser.RULE_predicateExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PredicateTermAltContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 69;
			this.predicateTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 89;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
					case 1:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 71;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 72;
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
						this.state = 73;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(8);
						}
						break;

					case 2:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 74;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 75;
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
						this.state = 76;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(7);
						}
						break;

					case 3:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 77;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 78;
						(_localctx as PredicateBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AqlParser.GREATER_THAN - 36)) | (1 << (AqlParser.GREATER_THAN_EQUALS - 36)) | (1 << (AqlParser.LESS_THAN - 36)) | (1 << (AqlParser.LESS_THAN_EQUALS - 36)))) !== 0)) ) {
							(_localctx as PredicateBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 79;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(6);
						}
						break;

					case 4:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 81;
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
						this.state = 82;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(5);
						}
						break;

					case 5:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 83;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 84;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.AND);
						this.state = 85;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(4);
						}
						break;

					case 6:
						{
						_localctx = new PredicateBinaryContext(new PredicateExprContext(_parentctx, _parentState));
						(_localctx as PredicateBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 86;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 87;
						(_localctx as PredicateBinaryContext)._operator = this.match(AqlParser.OR);
						this.state = 88;
						(_localctx as PredicateBinaryContext)._right = this.predicateExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
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
		this.enterRule(_localctx, 10, AqlParser.RULE_predicateTerm);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.IDENTIFIER:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 97;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new PredicateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new PredicateNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 99;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 100;
				this.predicateExpr(0);
				this.state = 101;
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
		this.enterRule(_localctx, 12, AqlParser.RULE_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.funcName();
			this.state = 106;
			this.match(AqlParser.OPEN_PAREN);
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				{
				this.state = 107;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.SUM:
			case AqlParser.AVG:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				{
				this.state = 108;
				this.selectionExpr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 111;
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
		this.enterRule(_localctx, 14, AqlParser.RULE_funcName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.COUNT) | (1 << AqlParser.MAX) | (1 << AqlParser.MIN) | (1 << AqlParser.SUM) | (1 << AqlParser.AVG))) !== 0)) ) {
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
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, AqlParser.RULE_selectionExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SelectionTermAltContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 116;
			this.selectionTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 126;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 124;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
					case 1:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 118;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 119;
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
						this.state = 120;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(4);
						}
						break;

					case 2:
						{
						_localctx = new SelectionBinaryContext(new SelectionExprContext(_parentctx, _parentState));
						(_localctx as SelectionBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 121;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 122;
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
						this.state = 123;
						(_localctx as SelectionBinaryContext)._right = this.selectionExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
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
		this.enterRule(_localctx, 18, AqlParser.RULE_selectionTerm);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.SUM:
			case AqlParser.AVG:
				_localctx = new SelectionFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.func();
				}
				break;
			case AqlParser.IDENTIFIER:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.column();
				}
				break;
			case AqlParser.INT:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 131;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 132;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 133;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				_localctx = new SelectionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 134;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				_localctx = new SelectionNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 135;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 136;
				this.selectionExpr(0);
				this.state = 137;
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
		this.enterRule(_localctx, 20, AqlParser.RULE_date);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				this.state = 141;
				this.relativeDate();
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
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
	public relativeDate(): RelativeDateContext {
		let _localctx: RelativeDateContext = new RelativeDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AqlParser.RULE_relativeDate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.day();
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AqlParser.AT) {
				{
				this.state = 146;
				this.match(AqlParser.AT);
				this.state = 147;
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
	public absoluteDate(): AbsoluteDateContext {
		let _localctx: AbsoluteDateContext = new AbsoluteDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AqlParser.RULE_absoluteDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
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
		this.enterRule(_localctx, 26, AqlParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
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
		this.enterRule(_localctx, 28, AqlParser.RULE_wildcard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
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
		this.enterRule(_localctx, 30, AqlParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
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
		this.enterRule(_localctx, 32, AqlParser.RULE_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
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
		this.enterRule(_localctx, 34, AqlParser.RULE_column);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
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
		case 4:
			return this.predicateExpr_sempred(_localctx as PredicateExprContext, predIndex);

		case 8:
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03,\xA5\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
		"\x03\x07\x03/\n\x03\f\x03\x0E\x032\v\x03\x03\x04\x03\x04\x03\x04\x03\x04"+
		"\x03\x04\x03\x04\x05\x04:\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05"+
		"@\n\x05\f\x05\x0E\x05C\v\x05\x05\x05E\n\x05\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07"+
		"\x06\\\n\x06\f\x06\x0E\x06_\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03"+
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07j\n\x07\x03\b\x03\b\x03\b"+
		"\x03\b\x05\bp\n\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03"+
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\x7F\n\n\f\n\x0E\n\x82\v\n\x03\v\x03\v"+
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x8E\n\v\x03\f\x03"+
		"\f\x05\f\x92\n\f\x03\r\x03\r\x03\r\x05\r\x97\n\r\x03\x0E\x03\x0E\x03\x0F"+
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13"+
		"\x03\x13\x02\x02\x04\n\x12\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02"+
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02"+
		" \x02\"\x02$\x02\x02\b\x03\x02 !\x03\x02\"#\x03\x02&)\x03\x02$%\x03\x02"+
		"\x14\x18\x03\x02\v\x13\xAD\x02&\x03\x02\x02\x02\x040\x03\x02\x02\x02\x06"+
		"9\x03\x02\x02\x02\bD\x03\x02\x02\x02\nF\x03\x02\x02\x02\fi\x03\x02\x02"+
		"\x02\x0Ek\x03\x02\x02\x02\x10s\x03\x02\x02\x02\x12u\x03\x02\x02\x02\x14"+
		"\x8D\x03\x02\x02\x02\x16\x91\x03\x02\x02\x02\x18\x93\x03\x02\x02\x02\x1A"+
		"\x98\x03\x02\x02\x02\x1C\x9A\x03\x02\x02\x02\x1E\x9C\x03\x02\x02\x02 "+
		"\x9E\x03\x02\x02\x02\"\xA0\x03\x02\x02\x02$\xA2\x03\x02\x02\x02&\'\x07"+
		"\x03\x02\x02\'(\x05\b\x05\x02()\x07\x04\x02\x02)*\x05\"\x12\x02*+\x05"+
		"\x04\x03\x02+,\x07\x02\x02\x03,\x03\x03\x02\x02\x02-/\x05\x06\x04\x02"+
		".-\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x02"+
		"1\x05\x03\x02\x02\x0220\x03\x02\x02\x0234\x07\b\x02\x024:\x05\n\x06\x02"+
		"56\x07\x05\x02\x026:\x05\x16\f\x0278\x07\x06\x02\x028:\x05\x16\f\x029"+
		"3\x03\x02\x02\x0295\x03\x02\x02\x0297\x03\x02\x02\x02:\x07\x03\x02\x02"+
		"\x02;E\x05\x1E\x10\x02<A\x05\x12\n\x02=>\x07*\x02\x02>@\x05\x12\n\x02"+
		"?=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02"+
		"BE\x03\x02\x02\x02CA\x03\x02\x02\x02D;\x03\x02\x02\x02D<\x03\x02\x02\x02"+
		"E\t\x03\x02\x02\x02FG\b\x06\x01\x02GH\x05\f\x07\x02H]\x03\x02\x02\x02"+
		"IJ\f\t\x02\x02JK\t\x02\x02\x02K\\\x05\n\x06\nLM\f\b\x02\x02MN\t\x03\x02"+
		"\x02N\\\x05\n\x06\tOP\f\x07\x02\x02PQ\t\x04\x02\x02Q\\\x05\n\x06\bRS\f"+
		"\x06\x02\x02ST\t\x05\x02\x02T\\\x05\n\x06\x07UV\f\x05\x02\x02VW\x07\x19"+
		"\x02\x02W\\\x05\n\x06\x06XY\f\x04\x02\x02YZ\x07\x1A\x02\x02Z\\\x05\n\x06"+
		"\x05[I\x03\x02\x02\x02[L\x03\x02\x02\x02[O\x03\x02\x02\x02[R\x03\x02\x02"+
		"\x02[U\x03\x02\x02\x02[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02"+
		"\x02\x02]^\x03\x02\x02\x02^\v\x03\x02\x02\x02_]\x03\x02\x02\x02`j\x05"+
		"$\x13\x02aj\x07\x1C\x02\x02bj\x07\t\x02\x02cj\x07\n\x02\x02dj\x07\x1D"+
		"\x02\x02ef\x07\x1E\x02\x02fg\x05\n\x06\x02gh\x07\x1F\x02\x02hj\x03\x02"+
		"\x02\x02i`\x03\x02\x02\x02ia\x03\x02\x02\x02ib\x03\x02\x02\x02ic\x03\x02"+
		"\x02\x02id\x03\x02\x02\x02ie\x03\x02\x02\x02j\r\x03\x02\x02\x02kl\x05"+
		"\x10\t\x02lo\x07\x1E\x02\x02mp\x05\x1E\x10\x02np\x05\x12\n\x02om\x03\x02"+
		"\x02\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x07\x1F\x02\x02r\x0F\x03"+
		"\x02\x02\x02st\t\x06\x02\x02t\x11\x03\x02\x02\x02uv\b\n\x01\x02vw\x05"+
		"\x14\v\x02w\x80\x03\x02\x02\x02xy\f\x05\x02\x02yz\t\x02\x02\x02z\x7F\x05"+
		"\x12\n\x06{|\f\x04\x02\x02|}\t\x03\x02\x02}\x7F\x05\x12\n\x05~x\x03\x02"+
		"\x02\x02~{\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02"+
		"\x80\x81\x03\x02\x02\x02\x81\x13\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02"+
		"\x83\x8E\x05\x0E\b\x02\x84\x8E\x05$\x13\x02\x85\x8E\x07\x1C\x02\x02\x86"+
		"\x8E\x07\t\x02\x02\x87\x8E\x07\n\x02\x02\x88\x8E\x07\x1D\x02\x02\x89\x8A"+
		"\x07\x1E\x02\x02\x8A\x8B\x05\x12\n\x02\x8B\x8C\x07\x1F\x02\x02\x8C\x8E"+
		"\x03\x02\x02\x02\x8D\x83\x03\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x85"+
		"\x03\x02\x02\x02\x8D\x86\x03\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8D\x88"+
		"\x03\x02\x02\x02\x8D\x89\x03\x02\x02\x02\x8E\x15\x03\x02\x02\x02\x8F\x92"+
		"\x05\x18\r\x02\x90\x92\x05\x1A\x0E\x02\x91\x8F\x03\x02\x02\x02\x91\x90"+
		"\x03\x02\x02\x02\x92\x17\x03\x02\x02\x02\x93\x96\x05\x1C\x0F\x02\x94\x95"+
		"\x07\x07\x02\x02\x95\x97\x05 \x11\x02\x96\x94\x03\x02\x02\x02\x96\x97"+
		"\x03\x02\x02\x02\x97\x19\x03\x02\x02\x02\x98\x99\x07\x1D\x02\x02\x99\x1B"+
		"\x03\x02\x02\x02\x9A\x9B\t\x07\x02\x02\x9B\x1D\x03\x02\x02\x02\x9C\x9D"+
		"\x07 \x02\x02\x9D\x1F\x03\x02\x02\x02\x9E\x9F\x07\x1D\x02\x02\x9F!\x03"+
		"\x02\x02\x02\xA0\xA1\x07\x1B\x02\x02\xA1#\x03\x02\x02\x02\xA2\xA3\x07"+
		"\x1B\x02\x02\xA3%\x03\x02\x02\x02\x0F09AD[]io~\x80\x8D\x91\x96";
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
	public relativeDate(): RelativeDateContext | undefined {
		return this.tryGetRuleContext(0, RelativeDateContext);
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


export class RelativeDateContext extends ParserRuleContext {
	public day(): DayContext {
		return this.getRuleContext(0, DayContext);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AT, 0); }
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_relativeDate; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterRelativeDate) listener.enterRelativeDate(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitRelativeDate) listener.exitRelativeDate(this);
	}
	@Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitRelativeDate) return visitor.visitRelativeDate(this);
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


