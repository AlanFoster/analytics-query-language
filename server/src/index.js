import * as rpc from 'vscode-ws-jsonrpc';
import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ws from 'ws';
import * as vscode from 'vscode-languageserver';
import * as languageServer from './language-server';
import { execute } from './executor';

function launchRpcWebSocket(webSocket) {
  const rpcWebSocket = {
    send: (content) => {
      console.log(content);
      return webSocket.send(content, (error) => {
        if (error) {
          throw error;
        }
      });
    },
    onMessage: cb => webSocket.on('message', cb),
    onError: cb => webSocket.on('error', cb),
    onClose: cb => webSocket.on('close', cb),
    dispose: () => webSocket.close(),
  };

  const reader = new rpc.WebSocketMessageReader(rpcWebSocket);
  const writer = new rpc.WebSocketMessageWriter(rpcWebSocket);
  languageServer.listen(vscode.createConnection(reader, writer));
}

function createWebSocketServer(port) {
  const app = express();
  app.use(bodyParser.json());
  const server = http.createServer(app);

  const webSocketServer = new ws.Server({
    server: server,
    perMessageDeflate: false,
  });

  app.post('/results', (req, res) => execute(req, res));

  webSocketServer.on('connection', (webSocket, request) => {
    console.log(`received new connection ${request.connection.remoteAddress}`);

    if (webSocket.readyState === webSocket.OPEN) {
      launchRpcWebSocket(webSocket);
    } else {
      webSocket.on('open', () => launchRpcWebSocket(webSocket));
    }
  });

  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

/**
 * Creates a running connection for either a websocket connection for the monaco browser,
 * or an IPC connection for running with vscode
 */
async function createConnection() {
  const webSocketFlagIndex = process.argv.findIndex(value => value.startsWith('--web-socket='));
  const isWebSocket = webSocketFlagIndex !== -1;
  if (isWebSocket) {
    console.log("Starting websocket interop");
    const port = Number(process.argv[webSocketFlagIndex].split('=')[1]);
    createWebSocketServer(port);
  } else {
    console.log("Starting vscode interop");
    // Delegate responsibility to the default vscode connection implementation, and create
    // a connection for the server. The connection uses Node's IPC as a transport.
    // Also include all preview / proposed LSP features.
    const connection = vscode.createConnection(vscode.ProposedFeatures.all);
    languageServer.listen(connection);
  }
}

createConnection();

if (module.hot) {
  module.hot.accept('./language-server');
  module.hot.accept('./executor');
}
