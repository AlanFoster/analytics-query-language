import { ANTLRErrorListener } from 'antlr4ts';

class ErrorAggregator implements ANTLRErrorListener<Symbol> {
    errors: any[];

    constructor() {
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        const error = {
            message: msg,
            symbol: offendingSymbol ? offendingSymbol.text : '',
            line: line - 1,
            character: charPositionInLine,
            length: offendingSymbol ? offendingSymbol.stop - offendingSymbol.start + 1 : 0
        };

        this.errors.push(error);
    }

    getErrors() {
        return this.errors;
    }
}

export default ErrorAggregator;

