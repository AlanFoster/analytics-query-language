import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as c3 from 'antlr4-c3';
import { CompletionItemKind } from 'vscode-languageserver';
import { AqlLexer } from './gen/AqlLexer';
import { AqlParser } from './gen/AqlParser';
import ErrorAggregator from './error-aggregator';

/**
 * getTokenPosition naively tries to choose the current token
 * associated with the given input source and caret position
 *
 * Further details:
 *  https://github.com/mike-lischke/antlr4-c3/tree/4f62e87dee69ab6d2a5f9d94dbb7c1fd9d3f310f#selecting-the-right-caret-position
 *
 * @param {string} input The given input source code
 * @param {number} caretPosition The current caret position within the given input string
 * @returns {number} The token position
 */
const getTokenPosition = function (input: string, caretPosition: number): number {
  const inputStream = new ANTLRInputStream(input);
  const lexer = new AqlLexer(inputStream);

  let tokenCaretPosition = -1;

  const allTokens = lexer.getAllTokens();

  for (let i = 0; i < allTokens.length; i++) {
    const token = allTokens[i];

    if (caretPosition >= token.startIndex && caretPosition <= token.stopIndex) {
      tokenCaretPosition = i;
    }
  }

  if (tokenCaretPosition === -1) {
    return allTokens.length - 1;
  }

  return tokenCaretPosition;
};

export default function extract({ input, caretPosition = 0 }) {
  const errorAggregator = new ErrorAggregator();
  const tokenCaretPosition = getTokenPosition(input, caretPosition);

  const inputStream = new ANTLRInputStream(input);
  const lexer = new AqlLexer(inputStream);

  const tokenStream = new CommonTokenStream(lexer);

  const parser = new AqlParser(tokenStream);

  lexer.removeErrorListeners();
  lexer.addErrorListener(errorAggregator);

  parser.removeErrorListeners();
  parser.addErrorListener(errorAggregator);

  parser.prog();

  const core = new c3.CodeCompletionCore(parser);

  const autoCompletionMap = {
    [AqlParser.RULE_wildcard]: [
      {
        label: '* ',
        kind: CompletionItemKind.Text,
      },
    ],

    [AqlParser.RULE_func_name]: [
      {
        label: 'count',
        insertText: {
          value: 'count(${1:*})',
        },
        detail: 'count the given rows',
        kind: CompletionItemKind.Function,
      },
      {
        label: 'max( ',
        insertText: {
          value: 'max(${1:*})',
        },
        detail: 'count the maximum value',
        kind: CompletionItemKind.Function,
      },
      {
        label: 'min( ',
        insertText: {
          value: 'min(${1:*})',
        },
        detail: 'count the minimum value',
        kind: CompletionItemKind.Function,
      },
    ],

    [AqlParser.RULE_table]: [
      {
        label: 'customers',
        detail: 'customers table',
        documentation: 'all customer related information',
        kind: CompletionItemKind.Variable,
      },
      {
        label: 'transactions',
        detail: 'transactions table',
        documentation: 'all customer related information',
        kind: CompletionItemKind.Variable,
      },
      {
        label: 'employees',
        detail: 'employees table',
        documentation: 'all customer related information',
        kind: CompletionItemKind.Variable,
      },
      {
        label: 'returns',
        detail: 'returns table',
        documentation: 'all customer related information',
        kind: CompletionItemKind.Variable,
      },
    ],

    [AqlParser.RULE_column]: [
      { label: 'id', kind: CompletionItemKind.Variable },
      { label: 'description', kind: CompletionItemKind.Variable },
      { label: 'value', kind: CompletionItemKind.Variable },
      { label: 'name', kind: CompletionItemKind.Variable },
      { label: 'contact_number', kind: CompletionItemKind.Variable },
      { label: 'timestamp', kind: CompletionItemKind.Variable },
    ],

    [AqlParser.RULE_time]: [
      { label: "'08:00'", kind: CompletionItemKind.Constant },
      { label: "'12:00'", kind: CompletionItemKind.Constant },
      { label: "'18:30'", kind: CompletionItemKind.Constant },
    ],
  };

  Object.keys(autoCompletionMap).forEach((key) => {
    core.preferredRules.add(Number(key));
  });

  core.ignoredTokens = new Set([
    AqlLexer.DIVIDE,
    AqlLexer.PLUS, AqlLexer.MINUS,
    AqlLexer.OPEN_PAREN,
    AqlLexer.IDENTIFIER, AqlLexer.INT, AqlLexer.STRING, AqlLexer.EOF,
  ]);

  const candidates = core.collectCandidates(tokenCaretPosition);

  const keywords: string[] = [];
  for (let candidate of candidates.tokens) {
    // TODO Consider if we want to add rules for these characters instead
    const suggestion = parser.vocabulary.getDisplayName(candidate[0]).toLowerCase();

    keywords.push(suggestion.split("'").join(''));
  }

  let domainSuggestions = [];

  for (let candidate of candidates.rules) {
    const parserRule = candidate[0];
    const suggestions = autoCompletionMap[parserRule];
    if (suggestions) {
      domainSuggestions = domainSuggestions.concat(suggestions);
    }
  }

  return {
    errors: errorAggregator.getErrors(),
    keywords,
    domainSuggestions,
  };
}
