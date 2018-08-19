import * as webSocketServer from './websocket-server';
import * as vscode from 'vscode-languageserver/lib/main';
import * as languageServer from './language-server';

/**
 * Creates a running connection for either a websocket connection for the monaco browser,
 * or an IPC connection for running with vscode
 */
function createConnection() {
    const websocketFlagIndex = process.argv.findIndex(value => value.startsWith('--websocket='));
    const isWebsocket = websocketFlagIndex !== -1;
    if (isWebsocket) {
        const port = Number(process.argv[websocketFlagIndex].split('=')[1]);
        console.log(`starting websocket server on port ${port}`);

        webSocketServer.listen(languageServer, port)
    } else {
        // Delegate responsibility to the default vscode connection implementation, and create
        // a connection for the server. The connection uses Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        const connection = vscode.createConnection(vscode.ProposedFeatures.all);
        languageServer.listen(connection);
    }
}

createConnection();
