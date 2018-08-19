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
	public static readonly AND=21;
	public static readonly OR=22;
	public static readonly IDENTIFIER=23;
	public static readonly INT=24;
	public static readonly STRING=25;
	public static readonly OPEN_PAREN=26;
	public static readonly CLOSE_PAREN=27;
	public static readonly STAR=28;
	public static readonly DIVIDE=29;
	public static readonly PLUS=30;
	public static readonly MINUS=31;
	public static readonly EQUAL=32;
	public static readonly NOT_EQUAL=33;
	public static readonly GREATER_THAN=34;
	public static readonly GREATER_THAN_EQUALS=35;
	public static readonly LESS_THAN=36;
	public static readonly LESS_THAN_EQUALS=37;
	public static readonly COMMA=38;
	public static readonly COMMENT=39;
	public static readonly WS=40;
	public static readonly RULE_prog = 0;
	public static readonly RULE_extra_thing = 1;
	public static readonly RULE_selection = 2;
	public static readonly RULE_predicateExpr = 3;
	public static readonly RULE_predicateTerm = 4;
	public static readonly RULE_func = 5;
	public static readonly RULE_func_name = 6;
	public static readonly RULE_selectionExpr = 7;
	public static readonly RULE_selectionTerm = 8;
	public static readonly RULE_date = 9;
	public static readonly RULE_relativeDate = 10;
	public static readonly RULE_absoluteDate = 11;
	public static readonly RULE_day = 12;
	public static readonly RULE_wildcard = 13;
	public static readonly RULE_time = 14;
	public static readonly RULE_table = 15;
	public static readonly RULE_column = 16;
	public static readonly ruleNames: string[] = [
		"prog", "extra_thing", "selection", "predicateExpr", "predicateTerm", 
		"func", "func_name", "selectionExpr", "selectionTerm", "date", "relativeDate", 
		"absoluteDate", "day", "wildcard", "time", "table", "column"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'true'", "'false'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'*'", 
		"'/'", "'+'", "'-'", "'='", "'!='", "'>'", "'>='", "'<'", "'<='", "','"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "SELECT", "FROM", "SINCE", "UNTIL", "AT", "WHERE", "TRUE", 
		"FALSE", "TODAY", "YESTERDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", 
		"FRIDAY", "SATURDAY", "SUNDAY", "COUNT", "MAX", "MIN", "AND", "OR", "IDENTIFIER", 
		"INT", "STRING", "OPEN_PAREN", "CLOSE_PAREN", "STAR", "DIVIDE", "PLUS", 
		"MINUS", "EQUAL", "NOT_EQUAL", "GREATER_THAN", "GREATER_THAN_EQUALS", 
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(AqlParser.SELECT);
			this.state = 35;
			this.selection();
			this.state = 36;
			this.match(AqlParser.FROM);
			this.state = 37;
			this.table();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.SINCE) | (1 << AqlParser.UNTIL) | (1 << AqlParser.WHERE))) !== 0)) {
				{
				{
				this.state = 38;
				this.extra_thing();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
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
	public extra_thing(): Extra_thingContext {
		let _localctx: Extra_thingContext = new Extra_thingContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AqlParser.RULE_extra_thing);
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.WHERE:
				_localctx = new Predicate_branchContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.match(AqlParser.WHERE);
				this.state = 47;
				this.predicateExpr(0);
				}
				break;
			case AqlParser.SINCE:
				_localctx = new Since_branchContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.match(AqlParser.SINCE);
				this.state = 49;
				this.date();
				}
				break;
			case AqlParser.UNTIL:
				_localctx = new Until_branchContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.match(AqlParser.UNTIL);
				this.state = 51;
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
		this.enterRule(_localctx, 4, AqlParser.RULE_selection);
		let _la: number;
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.selectionExpr(0);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AqlParser.COMMA) {
					{
					{
					this.state = 56;
					this.match(AqlParser.COMMA);
					this.state = 57;
					this.selectionExpr(0);
					}
					}
					this.state = 62;
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
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, AqlParser.RULE_predicateExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 66;
			this.predicateTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 86;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
					case 1:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 68;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 69;
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.STAR || _la===AqlParser.DIVIDE) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 70;
						this.predicateExpr(8);
						}
						break;

					case 2:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 71;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 72;
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.PLUS || _la===AqlParser.MINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 73;
						this.predicateExpr(7);
						}
						break;

					case 3:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 74;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 75;
						_la = this._input.LA(1);
						if ( !(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (AqlParser.GREATER_THAN - 34)) | (1 << (AqlParser.GREATER_THAN_EQUALS - 34)) | (1 << (AqlParser.LESS_THAN - 34)) | (1 << (AqlParser.LESS_THAN_EQUALS - 34)))) !== 0)) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 76;
						this.predicateExpr(6);
						}
						break;

					case 4:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 77;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 78;
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.EQUAL || _la===AqlParser.NOT_EQUAL) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 79;
						this.predicateExpr(5);
						}
						break;

					case 5:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 81;
						this.match(AqlParser.AND);
						this.state = 82;
						this.predicateExpr(4);
						}
						break;

					case 6:
						{
						_localctx = new PredicateExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_predicateExpr);
						this.state = 83;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 84;
						this.match(AqlParser.OR);
						this.state = 85;
						this.predicateExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 90;
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
		this.enterRule(_localctx, 8, AqlParser.RULE_predicateTerm);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.column();
				}
				break;
			case AqlParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 94;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 95;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 97;
				this.predicateExpr(0);
				this.state = 98;
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
		this.enterRule(_localctx, 10, AqlParser.RULE_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.func_name();
			this.state = 103;
			this.match(AqlParser.OPEN_PAREN);
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STAR:
				{
				this.state = 104;
				this.wildcard();
				}
				break;
			case AqlParser.TRUE:
			case AqlParser.FALSE:
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
			case AqlParser.IDENTIFIER:
			case AqlParser.INT:
			case AqlParser.STRING:
			case AqlParser.OPEN_PAREN:
				{
				this.state = 105;
				this.selectionExpr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 108;
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
	public func_name(): Func_nameContext {
		let _localctx: Func_nameContext = new Func_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AqlParser.RULE_func_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.COUNT) | (1 << AqlParser.MAX) | (1 << AqlParser.MIN))) !== 0)) ) {
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
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, AqlParser.RULE_selectionExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 113;
			this.selectionTerm();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 123;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 121;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
					case 1:
						{
						_localctx = new SelectionExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 115;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 116;
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.STAR || _la===AqlParser.DIVIDE) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 117;
						this.selectionExpr(4);
						}
						break;

					case 2:
						{
						_localctx = new SelectionExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AqlParser.RULE_selectionExpr);
						this.state = 118;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 119;
						_la = this._input.LA(1);
						if ( !(_la===AqlParser.PLUS || _la===AqlParser.MINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 120;
						this.selectionExpr(3);
						}
						break;
					}
					} 
				}
				this.state = 125;
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
		this.enterRule(_localctx, 16, AqlParser.RULE_selectionTerm);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.COUNT:
			case AqlParser.MAX:
			case AqlParser.MIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.func();
				}
				break;
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.column();
				}
				break;
			case AqlParser.INT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.match(AqlParser.INT);
				}
				break;
			case AqlParser.TRUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 129;
				this.match(AqlParser.TRUE);
				}
				break;
			case AqlParser.FALSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 130;
				this.match(AqlParser.FALSE);
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 131;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				this.match(AqlParser.OPEN_PAREN);
				this.state = 133;
				this.selectionExpr(0);
				this.state = 134;
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
		this.enterRule(_localctx, 18, AqlParser.RULE_date);
		try {
			this.state = 140;
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
				this.state = 138;
				this.relativeDate();
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
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
		this.enterRule(_localctx, 20, AqlParser.RULE_relativeDate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.day();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AqlParser.AT) {
				{
				this.state = 143;
				this.match(AqlParser.AT);
				this.state = 144;
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
		this.enterRule(_localctx, 22, AqlParser.RULE_absoluteDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
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
		this.enterRule(_localctx, 24, AqlParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
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
		this.enterRule(_localctx, 26, AqlParser.RULE_wildcard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
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
		this.enterRule(_localctx, 28, AqlParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
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
		this.enterRule(_localctx, 30, AqlParser.RULE_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
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
		this.enterRule(_localctx, 32, AqlParser.RULE_column);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
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
		case 3:
			return this.predicateExpr_sempred(_localctx as PredicateExprContext, predIndex);

		case 7:
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03*\xA2\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03"+
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02"+
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03"+
		"7\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@"+
		"\v\x04\x05\x04B\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05Y\n\x05\f\x05"+
		"\x0E\x05\\\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x05\x06g\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07"+
		"m\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\t\x03\t\x03\t\x03\t\x07\t|\n\t\f\t\x0E\t\x7F\v\t\x03\n\x03\n\x03\n\x03"+
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8B\n\n\x03\v\x03\v\x05\v"+
		"\x8F\n\v\x03\f\x03\f\x03\f\x05\f\x94\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03"+
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x02"+
		"\x02\x04\b\x10\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10"+
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02"+
		"\x02\b\x03\x02\x1E\x1F\x03\x02 !\x03\x02$\'\x03\x02\"#\x03\x02\x14\x16"+
		"\x03\x02\v\x13\xAB\x02$\x03\x02\x02\x02\x046\x03\x02\x02\x02\x06A\x03"+
		"\x02\x02\x02\bC\x03\x02\x02\x02\nf\x03\x02\x02\x02\fh\x03\x02\x02\x02"+
		"\x0Ep\x03\x02\x02\x02\x10r\x03\x02\x02\x02\x12\x8A\x03\x02\x02\x02\x14"+
		"\x8E\x03\x02\x02\x02\x16\x90\x03\x02\x02\x02\x18\x95\x03\x02\x02\x02\x1A"+
		"\x97\x03\x02\x02\x02\x1C\x99\x03\x02\x02\x02\x1E\x9B\x03\x02\x02\x02 "+
		"\x9D\x03\x02\x02\x02\"\x9F\x03\x02\x02\x02$%\x07\x03\x02\x02%&\x05\x06"+
		"\x04\x02&\'\x07\x04\x02\x02\'+\x05 \x11\x02(*\x05\x04\x03\x02)(\x03\x02"+
		"\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02"+
		"\x02\x02-+\x03\x02\x02\x02./\x07\x02\x02\x03/\x03\x03\x02\x02\x0201\x07"+
		"\b\x02\x0217\x05\b\x05\x0223\x07\x05\x02\x0237\x05\x14\v\x0245\x07\x06"+
		"\x02\x0257\x05\x14\v\x0260\x03\x02\x02\x0262\x03\x02\x02\x0264\x03\x02"+
		"\x02\x027\x05\x03\x02\x02\x028B\x05\x1C\x0F\x029>\x05\x10\t\x02:;\x07"+
		"(\x02\x02;=\x05\x10\t\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02"+
		"\x02\x02>?\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02A8\x03\x02"+
		"\x02\x02A9\x03\x02\x02\x02B\x07\x03\x02\x02\x02CD\b\x05\x01\x02DE\x05"+
		"\n\x06\x02EZ\x03\x02\x02\x02FG\f\t\x02\x02GH\t\x02\x02\x02HY\x05\b\x05"+
		"\nIJ\f\b\x02\x02JK\t\x03\x02\x02KY\x05\b\x05\tLM\f\x07\x02\x02MN\t\x04"+
		"\x02\x02NY\x05\b\x05\bOP\f\x06\x02\x02PQ\t\x05\x02\x02QY\x05\b\x05\x07"+
		"RS\f\x05\x02\x02ST\x07\x17\x02\x02TY\x05\b\x05\x06UV\f\x04\x02\x02VW\x07"+
		"\x18\x02\x02WY\x05\b\x05\x05XF\x03\x02\x02\x02XI\x03\x02\x02\x02XL\x03"+
		"\x02\x02\x02XO\x03\x02\x02\x02XR\x03\x02\x02\x02XU\x03\x02\x02\x02Y\\"+
		"\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\t\x03\x02\x02\x02"+
		"\\Z\x03\x02\x02\x02]g\x05\"\x12\x02^g\x07\x1A\x02\x02_g\x07\t\x02\x02"+
		"`g\x07\n\x02\x02ag\x07\x1B\x02\x02bc\x07\x1C\x02\x02cd\x05\b\x05\x02d"+
		"e\x07\x1D\x02\x02eg\x03\x02\x02\x02f]\x03\x02\x02\x02f^\x03\x02\x02\x02"+
		"f_\x03\x02\x02\x02f`\x03\x02\x02\x02fa\x03\x02\x02\x02fb\x03\x02\x02\x02"+
		"g\v\x03\x02\x02\x02hi\x05\x0E\b\x02il\x07\x1C\x02\x02jm\x05\x1C\x0F\x02"+
		"km\x05\x10\t\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02mn\x03\x02\x02\x02"+
		"no\x07\x1D\x02\x02o\r\x03\x02\x02\x02pq\t\x06\x02\x02q\x0F\x03\x02\x02"+
		"\x02rs\b\t\x01\x02st\x05\x12\n\x02t}\x03\x02\x02\x02uv\f\x05\x02\x02v"+
		"w\t\x02\x02\x02w|\x05\x10\t\x06xy\f\x04\x02\x02yz\t\x03\x02\x02z|\x05"+
		"\x10\t\x05{u\x03\x02\x02\x02{x\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{"+
		"\x03\x02\x02\x02}~\x03\x02\x02\x02~\x11\x03\x02\x02\x02\x7F}\x03\x02\x02"+
		"\x02\x80\x8B\x05\f\x07\x02\x81\x8B\x05\"\x12\x02\x82\x8B\x07\x1A\x02\x02"+
		"\x83\x8B\x07\t\x02\x02\x84\x8B\x07\n\x02\x02\x85\x8B\x07\x1B\x02\x02\x86"+
		"\x87\x07\x1C\x02\x02\x87\x88\x05\x10\t\x02\x88\x89\x07\x1D\x02\x02\x89"+
		"\x8B\x03\x02\x02\x02\x8A\x80\x03\x02\x02\x02\x8A\x81\x03\x02\x02\x02\x8A"+
		"\x82\x03\x02\x02\x02\x8A\x83\x03\x02\x02\x02\x8A\x84\x03\x02\x02\x02\x8A"+
		"\x85\x03\x02\x02\x02\x8A\x86\x03\x02\x02\x02\x8B\x13\x03\x02\x02\x02\x8C"+
		"\x8F\x05\x16\f\x02\x8D\x8F\x05\x18\r\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D"+
		"\x03\x02\x02\x02\x8F\x15\x03\x02\x02\x02\x90\x93\x05\x1A\x0E\x02\x91\x92"+
		"\x07\x07\x02\x02\x92\x94\x05\x1E\x10\x02\x93\x91\x03\x02\x02\x02\x93\x94"+
		"\x03\x02\x02\x02\x94\x17\x03\x02\x02\x02\x95\x96\x07\x1B\x02\x02\x96\x19"+
		"\x03\x02\x02\x02\x97\x98\t\x07\x02\x02\x98\x1B\x03\x02\x02\x02\x99\x9A"+
		"\x07\x1E\x02\x02\x9A\x1D\x03\x02\x02\x02\x9B\x9C\x07\x1B\x02\x02\x9C\x1F"+
		"\x03\x02\x02\x02\x9D\x9E\x07\x19\x02\x02\x9E!\x03\x02\x02\x02\x9F\xA0"+
		"\x07\x19\x02\x02\xA0#\x03\x02\x02\x02\x0F+6>AXZfl{}\x8A\x8E\x93";
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
	public EOF(): TerminalNode { return this.getToken(AqlParser.EOF, 0); }
	public extra_thing(): Extra_thingContext[];
	public extra_thing(i: number): Extra_thingContext;
	public extra_thing(i?: number): Extra_thingContext | Extra_thingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Extra_thingContext);
		} else {
			return this.getRuleContext(i, Extra_thingContext);
		}
	}
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
}


export class Extra_thingContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_extra_thing; }
 
	public copyFrom(ctx: Extra_thingContext): void {
		super.copyFrom(ctx);
	}
}
export class Since_branchContext extends Extra_thingContext {
	public SINCE(): TerminalNode { return this.getToken(AqlParser.SINCE, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	constructor(ctx: Extra_thingContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSince_branch) listener.enterSince_branch(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSince_branch) listener.exitSince_branch(this);
	}
}
export class Predicate_branchContext extends Extra_thingContext {
	public WHERE(): TerminalNode { return this.getToken(AqlParser.WHERE, 0); }
	public predicateExpr(): PredicateExprContext {
		return this.getRuleContext(0, PredicateExprContext);
	}
	constructor(ctx: Extra_thingContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicate_branch) listener.enterPredicate_branch(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicate_branch) listener.exitPredicate_branch(this);
	}
}
export class Until_branchContext extends Extra_thingContext {
	public UNTIL(): TerminalNode { return this.getToken(AqlParser.UNTIL, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	constructor(ctx: Extra_thingContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterUntil_branch) listener.enterUntil_branch(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitUntil_branch) listener.exitUntil_branch(this);
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
}


export class PredicateExprContext extends ParserRuleContext {
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
	public predicateTerm(): PredicateTermContext | undefined {
		return this.tryGetRuleContext(0, PredicateTermContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_predicateExpr; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateExpr) listener.enterPredicateExpr(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateExpr) listener.exitPredicateExpr(this);
	}
}


export class PredicateTermContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FALSE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_PAREN, 0); }
	public predicateExpr(): PredicateExprContext | undefined {
		return this.tryGetRuleContext(0, PredicateExprContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_predicateTerm; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateTerm) listener.enterPredicateTerm(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateTerm) listener.exitPredicateTerm(this);
	}
}


export class FuncContext extends ParserRuleContext {
	public func_name(): Func_nameContext {
		return this.getRuleContext(0, Func_nameContext);
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
}


export class Func_nameContext extends ParserRuleContext {
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COUNT, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MAX, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_func_name; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFunc_name) listener.enterFunc_name(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFunc_name) listener.exitFunc_name(this);
	}
}


export class SelectionExprContext extends ParserRuleContext {
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
	public selectionTerm(): SelectionTermContext | undefined {
		return this.tryGetRuleContext(0, SelectionTermContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_selectionExpr; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionExpr) listener.enterSelectionExpr(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionExpr) listener.exitSelectionExpr(this);
	}
}


export class SelectionTermContext extends ParserRuleContext {
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FALSE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_PAREN, 0); }
	public selectionExpr(): SelectionExprContext | undefined {
		return this.tryGetRuleContext(0, SelectionExprContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AqlParser.RULE_selectionTerm; }
	@Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectionTerm) listener.enterSelectionTerm(this);
	}
	@Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectionTerm) listener.exitSelectionTerm(this);
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
}


