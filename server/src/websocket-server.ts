import * as rpc from 'vscode-ws-jsonrpc';
import * as ws from "ws";
import { createConnection } from 'vscode-languageserver';

const launchRpcWebSocket = function (webSocket, languageServer)  {
    const rpcWebSocket: rpc.IWebSocket = {
        send: content => {
            console.log(content);
            return webSocket.send(content, error => {
                if (error) {
                    throw error;
                }
            })
        },
        onMessage: cb => webSocket.on('message', cb),
        onError: cb => webSocket.on('error', cb),
        onClose: cb => webSocket.on('close', cb),
        dispose: () => webSocket.close()
    };

    const reader = new rpc.WebSocketMessageReader(rpcWebSocket);
    const writer = new rpc.WebSocketMessageWriter(rpcWebSocket);
    languageServer.listen(createConnection(reader, writer));
};

export const listen = function (languageServer, port) {
    const webSocketServer = new ws.Server({
        port: port,
        perMessageDeflate: false
    });

    webSocketServer.on('connection', function (webSocket, request) {
        console.log("received new connection " + request.connection.remoteAddress);

        if (webSocket.readyState === webSocket.OPEN) {
            launchRpcWebSocket(webSocket, languageServer);
        } else {
            webSocket.on('open', () => launchRpcWebSocket(webSocket, languageServer));
        }
    });

    return webSocketServer;
};
