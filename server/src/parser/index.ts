import { AqlLexer } from './gen/AqlLexer';
import { AqlParser } from './gen/AqlParser';
import ErrorAggregator from './error-aggregator';
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import * as c3 from 'antlr4-c3';
import {CompletionItemKind} from "vscode-languageserver";

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
    let inputStream = new ANTLRInputStream(input);
    let lexer = new AqlLexer(inputStream);

    let tokenCaretPosition = -1;

    const allTokens = lexer.getAllTokens();

    for (let i = 0; i < allTokens.length; i++) {
        const token = allTokens[i];

        if (caretPosition >= token.startIndex  && caretPosition <= token.stopIndex) {
            tokenCaretPosition = i;
        }
    }

    if (tokenCaretPosition === -1) {
        return allTokens.length - 1;
    }

    return tokenCaretPosition;
};

export function extract({ input, caretPosition = 0 }) {
    const errorAggregator = new ErrorAggregator();
    const tokenCaretPosition = getTokenPosition(input, caretPosition);

    let inputStream = new ANTLRInputStream(input);
    let lexer = new AqlLexer(inputStream);

    let tokenStream = new CommonTokenStream(lexer);

    let parser = new AqlParser(tokenStream);

    lexer.removeErrorListeners();
    lexer.addErrorListener(errorAggregator);

    parser.removeErrorListeners();
    parser.addErrorListener(errorAggregator);

    let tree = parser.prog();

    let core = new c3.CodeCompletionCore(parser);

    const autoCompletionMap = {
        [AqlParser.RULE_func_name]: [
            { label: 'count( ', detail: 'testing', documentation: '', kind: CompletionItemKind.Function },
            { label: 'max( ', detail: 'testing', documentation: 'testing doc', kind: CompletionItemKind.Function },
            { label: 'min( ', detail: 'testing', documentation: 'testing doc', kind: CompletionItemKind.Function },
        ],

        [AqlParser.RULE_table]: [
            { label: 'customers', detail: 'detail test', documentation: 'documentation test', kind: CompletionItemKind.Variable },
            { label: 'transactions', detail: 'detail test', documentation: 'documentation test', kind: CompletionItemKind.Variable },
            { label: 'employees', detail: 'detail test', documentation: 'documentation test', kind: CompletionItemKind.Variable },
            { label: 'returns', detail: 'detail test', documentation: 'documentation test', kind: CompletionItemKind.Variable },
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
        ]
    };

    Object.keys(autoCompletionMap).forEach(function (key) {
        core.preferredRules.add(Number(key));
    });

    core.ignoredTokens = new Set([
        AqlLexer.DIVIDE,
        AqlLexer.PLUS, AqlLexer.MINUS,
        AqlLexer.OPEN_PAREN,
        AqlLexer.IDENTIFIER, AqlLexer.INT, AqlLexer.STRING, AqlLexer.EOF
    ]);

    let candidates = core.collectCandidates(tokenCaretPosition);

    let keywords: string[] = [];
    for (let candidate of candidates.tokens) {
        // TODO Consider if we want to add rules for these characters instead
        const suggestion = parser.vocabulary.getDisplayName(candidate[0]).toLowerCase();

        keywords.push(suggestion.split("'").join(""));
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
        keywords: keywords,
        domainSuggestions: domainSuggestions
    }
}
