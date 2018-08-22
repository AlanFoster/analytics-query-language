import * as rpc from 'vscode-ws-jsonrpc';
import * as ws from 'ws';
import * as vscode from 'vscode-languageserver';
import * as languageServer from './language-server';

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
  const webSocketServer = new ws.Server({
    port,
    perMessageDeflate: false,
  });

  webSocketServer.on('connection', (webSocket, request) => {
    console.log(`received new connection ${request.connection.remoteAddress}`);

    if (webSocket.readyState === webSocket.OPEN) {
      launchRpcWebSocket(webSocket);
    } else {
      webSocket.on('open', () => launchRpcWebSocket(webSocket));
    }
  });

  return webSocketServer;
}

/**
 * Creates a running connection for either a websocket connection for the monaco browser,
 * or an IPC connection for running with vscode
 */
function createConnection() {
  const webSocketFlagIndex = process.argv.findIndex(value => value.startsWith('--web-socket='));
  const isWebSocket = webSocketFlagIndex !== -1;
  if (isWebSocket) {
    const port = Number(process.argv[webSocketFlagIndex].split('=')[1]);
    createWebSocketServer(port);
  } else {
    console.log('starting other one');
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
}
