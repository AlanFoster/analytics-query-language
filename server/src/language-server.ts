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

import parser from './parser';
import Executor from "./executor";
import {AqlParser} from "./parser/gen/AqlParser";
import {AqlLexer} from "./parser/gen/AqlLexer";

export const listen = async function (connection) {
  // Create a simple text document manager. The text document manager
  // supports full document sync only
  const documents: TextDocuments = new TextDocuments();

  let hasConfigurationCapability: boolean = false;
  let hasWorkspaceFolderCapability: boolean = false;

  // TODO: Let's ignore pooling for now as part of this spike
  const executor = new Executor({
    connectionString: process.env.DATABASE_URL
  });
  await executor.start();

  connection.onInitialize((params: InitializeParams) => {
    const { capabilities } = params;
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
          triggerCharacters: [' '],
        },
      },
    };
  });

  connection.onInitialized(() => {
    if (hasConfigurationCapability) {
      // Register for all configuration changes.
      connection.client.register(
        DidChangeConfigurationNotification.type,
        undefined,
      );
    }
    if (hasWorkspaceFolderCapability) {
      connection.workspace.onDidChangeWorkspaceFolders((_event) => {
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
    const defaultSettings: ExampleSettings = { maxNumberOfProblems: 100 };
    let globalSettings: ExampleSettings = defaultSettings;

    // Cache the settings of all open documents
    const documentSettings: Map<string, PromiseLike<ExampleSettings>> = new Map();

    connection.onDidChangeConfiguration((change) => {
      if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
      } else {
        globalSettings = (
          (change.settings.aql || defaultSettings)
        );
      }

      // Revalidate all open text documents
      documents.all().forEach(validateTextDocument);
    });

    // Only keep settings for open documents
    documents.onDidClose((e) => {
      documentSettings.delete(e.document.uri);
    });

    // The content of a text document has changed. This event is emitted
    // when the text document first opened or when its content has changed.
    documents.onDidChangeContent((change) => {
      validateTextDocument(change.document);
    });

    async function validateTextDocument(textDocument: TextDocument): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(() => {
          const { errors } = parser({
            input: textDocument.getText(),
            caretPosition: 0,
          });

          const diagnostics: Diagnostic[] = [];

          for (let errorIndex = 0; errorIndex < errors.length && errorIndex < globalSettings.maxNumberOfProblems; errorIndex++) {
            const error = errors[errorIndex];

            diagnostics.push({
              severity: DiagnosticSeverity.Error,
              range: {
                start: { line: error.line, character: error.character },
                end: { line: error.line, character: error.character + error.length },
              },
              message: error.message,
              source: 'ex',
            });
          }

          connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
        }, 0);
      });
    }

    connection.onDidChangeWatchedFiles((_change) => {
      // Monitored files have change in VSCode
    });

    // This handler provides the initial list of the completion items.
    connection.onCompletion(async (textDocumentPosition: TextDocumentPositionParams): Promise<CompletionItem[]> => {
      const document = documents.get(textDocumentPosition.textDocument.uri);
      if (!document) return [];

      const schema = await executor.extractSchema();
      // const dblookup = await executor.runQuery("select * from products");
      // await executor.generateSampleValues("products", "name");

      const unique = (array) => [...new Set(array)];
      const allColumns = unique(schema.reduce((acc, table) => acc.concat(table.columns.map(column => column.name)), []));

      const autoCompletionMap = {
            [AqlParser.RULE_wildcard]: [
                {
                    label: '* ',
                    kind: CompletionItemKind.Text,
                },
            ],

            [AqlParser.RULE_funcName]: [
                {
                    label: 'count',
                    insertText: {
                        value: 'count(${1:*})',
                    },
                    detail: 'count the given rows',
                    kind: CompletionItemKind.Function,
                },
                {
                    label: 'max',
                    insertText: {
                        value: 'max(${1:*})',
                    },
                    detail: 'count the maximum value',
                    kind: CompletionItemKind.Function,
                },
                {
                    label: 'min',
                    insertText: {
                        value: 'min(${1:*})',
                    },
                    detail: 'count the minimum value',
                    kind: CompletionItemKind.Function,
                },
                {
                    label: 'avg',
                    insertText: {
                        value: 'sum(${1:})',
                    },
                    detail: 'calculate the average for the given field',
                    kind: CompletionItemKind.Function,
                },
                {
                    label: 'sum',
                    insertText: {
                        value: 'sum(${1:})',
                    },
                    detail: 'calculate the sum for the given field',
                    kind: CompletionItemKind.Function,
                },
            ],

            [AqlParser.RULE_table]: schema.map(function (table) {
                return {
                    label: table.name,
                    detail: `${table.name} table`,
                    documentation: `all ${table.name} related information`,
                    kind: CompletionItemKind.Variable
                }
            }),

            // TODO: This currently suggests _all_ known columns, rather than
            // just the columns associated with the currently known table
            [AqlParser.RULE_column]:
                allColumns.map(function (columnName) {
                    return {
                        label: columnName,
                        kind: CompletionItemKind.Variable
                    }
                }),

            [AqlParser.RULE_time]: [
                { label: "'08:00'", kind: CompletionItemKind.Constant },
                { label: "'12:00'", kind: CompletionItemKind.Constant },
                { label: "'18:30'", kind: CompletionItemKind.Constant },
            ],
        };

      const { candidates } = parser({
        input: document.getText(),
        caretPosition: document.offsetAt(textDocumentPosition.position),
        preferredRules: Object.keys(autoCompletionMap)
      });

      const keywordCompletion = candidates.keywords.map(keyword => ({
        label: keyword,
        kind: CompletionItemKind.Keyword,
      }));

      let domainSuggestions = [];

      for (let candidate of candidates.rules) {
        const parserRule = candidate[0];
        const suggestions = autoCompletionMap[parserRule];
        if (suggestions) {
            domainSuggestions = domainSuggestions.concat(suggestions);
        }
      }

      return [
        ...domainSuggestions,
        ...keywordCompletion,
      ];
    });

    // Make the text document manager listen on the connection
    // for open, change and close text document events
    documents.listen(connection);

    // Listen on the connection
    connection.listen();
};
