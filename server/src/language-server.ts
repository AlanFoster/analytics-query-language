import {
    TextDocuments,
    TextDocument,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    DiagnosticSeverity,
    Diagnostic,
} from 'vscode-languageserver/lib/main';

import * as parser from './parser';

export const listen = function (connection) {
    // Create a simple text document manager. The text document manager
    // supports full document sync only
    let documents: TextDocuments = new TextDocuments();

    let hasConfigurationCapability: boolean = false;
    let hasWorkspaceFolderCapability: boolean = false;

    connection.onInitialize((params: InitializeParams) => {
        let capabilities = params.capabilities;
        // Does the client support the `workspace/configuration` request?
        // If not, we will fall back using global settings
        hasConfigurationCapability =
            !!capabilities.workspace && !!capabilities.workspace.configuration;
        hasWorkspaceFolderCapability =
            !!capabilities.workspace && !!capabilities.workspace.workspaceFolders;

        return {
            capabilities: {
                textDocumentSync: documents.syncKind,
                // Tell the client that the server supports code completion
                completionProvider: {
                    resolveProvider: false,
                    // Always offer auto completion after a space has been pressed
                    triggerCharacters: [' ']
                }
            }
        };
    });

    connection.onInitialized(() => {
        if (hasConfigurationCapability) {
            // Register for all configuration changes.
            connection.client.register(
                DidChangeConfigurationNotification.type,
                undefined
            );
        }
        if (hasWorkspaceFolderCapability) {
            connection.workspace.onDidChangeWorkspaceFolders(_event => {
                connection.console.log('Workspace folder change event received.');
            });
        }
    });

    // The example settings
    interface ExampleSettings {
        maxNumberOfProblems: number;
    }

    // The global settings, used when the `workspace/configuration` request is not supported by the client.
    // Please note that this is not the case when using this server with the client provided in this example
    // but could happen with other clients.
    const defaultSettings: ExampleSettings = {maxNumberOfProblems: 100};
    let globalSettings: ExampleSettings = defaultSettings;

    // Cache the settings of all open documents
    let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

    connection.onDidChangeConfiguration(change => {
        if (hasConfigurationCapability) {
            // Reset all cached document settings
            documentSettings.clear();
        } else {
            globalSettings = <ExampleSettings>(
                (change.settings.aql || defaultSettings)
            );
        }

        // Revalidate all open text documents
        documents.all().forEach(validateTextDocument);
    });

    // Only keep settings for open documents
    documents.onDidClose(e => {
        documentSettings.delete(e.document.uri);
    });

    // The content of a text document has changed. This event is emitted
    // when the text document first opened or when its content has changed.
    documents.onDidChangeContent(change => {
        validateTextDocument(change.document);
    });

    async function validateTextDocument(textDocument: TextDocument): Promise<void> {
        await new Promise(resolve => {
            setTimeout(function () {
                const {errors } = parser.extract({
                    input: textDocument.getText(),
                    caretPosition: 0
                });

                const diagnostics: Diagnostic[] = [];

                for (let errorIndex = 0; errorIndex < errors.length && errorIndex < globalSettings.maxNumberOfProblems; errorIndex++) {
                    const error = errors[errorIndex];

                    diagnostics.push({
                        severity: DiagnosticSeverity.Error,
                        range: {
                            start: {line: error.line, character: error.character},
                            end: {line: error.line, character: error.character + error.length}
                        },
                        message: error.message,
                        source: 'ex'
                    });
                }

                connection.sendDiagnostics({uri: textDocument.uri, diagnostics: diagnostics});
            }, 0)
        });
    }

    connection.onDidChangeWatchedFiles(_change => {
        // Monitored files have change in VSCode
    });

    // This handler provides the initial list of the completion items.
    connection.onCompletion(
        (textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
            const document = documents.get(textDocumentPosition.textDocument.uri);
            if (!document) return [];

            const { keywords, domainSuggestions } = parser.extract({
                input: document.getText(),
                caretPosition: document.offsetAt(textDocumentPosition.position)
            });

            const keywordCompletion = keywords.map(function (keyword) {
                return {
                    label: keyword,
                    kind: CompletionItemKind.Keyword,
                };
            });

            // Always show domain completions first - followed by keywords
            return [
                ...domainSuggestions,
                ...keywordCompletion
            ]
        }
    );

    // Make the text document manager listen on the connection
    // for open, change and close text document events
    documents.listen(connection);

    // Listen on the connection
    connection.listen();
};
