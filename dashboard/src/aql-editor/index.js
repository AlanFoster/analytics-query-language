import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { listen } from 'vscode-ws-jsonrpc';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {
  MonacoLanguageClient, CloseAction, ErrorAction,
  MonacoServices, createConnection
} from 'monaco-languageclient';
import * as aql from './aql.js';

const languageId = 'aql';

function createWebSocket(url) {
  const socketOptions = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 10000,
    maxRetries: Infinity,
    debug: false
  };
  return new ReconnectingWebSocket(url, undefined, socketOptions);
}

const webSocket = createWebSocket('ws://localhost:5001/');

listen({
  webSocket,
  onConnection: connection => {
    console.log("Opened connection!!");

    // create and start the language client
    const languageClient = createLanguageClient(connection);
    const disposable = languageClient.start();
    connection.onClose(() => disposable.dispose());
  }
});

function createLanguageClient(connection) {
  return new MonacoLanguageClient({
    name: "AQL Language Client",
    clientOptions: {
      // use a language id as a document selector
      documentSelector: [languageId],
      // disable the default error handler
      errorHandler: {
        error: () => ErrorAction.Continue,
        closed: () => CloseAction.DoNotRestart
      }
    },
    // create a language client connection from the JSON RPC connection on demand
    connectionProvider: {
      get: (errorHandler, closeHandler) => {
        return Promise.resolve(createConnection(connection, errorHandler, closeHandler))
      }
    }
  });
}

class AqlEditor extends React.Component {
  editorWillMount = (monaco) => {
    monaco.languages.register({
      id: languageId,
      extensions: ['.aql']
    });
    monaco.languages.setMonarchTokensProvider(languageId, aql.language);
    monaco.languages.setLanguageConfiguration(languageId, aql.configuration);

    monaco.editor.defineTheme(languageId, {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'predefined', foreground: '3dc9b0' },
      ]
    });
  };

  editorDidMount = (editor, monaco) => {
    MonacoServices.install(editor);

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      this.props.onFetchResults()
    });

    editor.focus();
  };

  render() {
    const { value, onChange } = this.props;

    const fontSize = 20;
    const maxLineHeight = 7;
    const height = Math.min(value.split('\n').length, maxLineHeight) * (1.5 * fontSize);

    const options = {
      selectOnLineNumbers: true,
      lineNumbers: "off",
      fontSize: fontSize,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false
      },
      renderLineHighlight: "none",
      overviewRulerBorder: true,
      occurrencesHighlight: false,
      hideCursorInOverviewRuler: true,
      lineDecorationsWidth: "0ch",
      wordWrap: "on",
      theme: languageId,
      language: languageId,
      cursorStyle: 'line',
      disableLayerHinting: true,
      // TODO: Seems to be expensive:
      automaticLayout: true
    };

    return (
      <MonacoEditor
        height={height}
        value={value}
        options={options}
        onChange={onChange}
        editorDidMount={this.editorDidMount}
        editorWillMount={this.editorWillMount}
      />
    );
  }
}

export default AqlEditor;
