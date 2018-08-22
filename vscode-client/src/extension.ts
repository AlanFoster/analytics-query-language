'use strict';

import * as path from 'path';

import { ExtensionContext, workspace, window, commands } from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    console.log("Activating");

    // The server is implemented in node
    let serverModule = context.asAbsolutePath(
        path.join('server', 'out', 'index.js')
    );

    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions: ServerOptions = {
        run: {
            module: serverModule,
            transport: TransportKind.ipc
        },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    // Options to control the language client
    let clientOptions: LanguageClientOptions = {
        documentSelector: [
            { scheme: 'file', language: 'aql' }
        ],
        synchronize: {
            configurationSection: "aqlLanguage",

            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    // Create the language client and start the client.
    client = new LanguageClient(
        'aql',
        'aql',
        serverOptions,
        clientOptions
    );

    // Start the client. This will also launch the server
    client.start();

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let sayPotatoCommand = commands.registerCommand('client.sayPotato', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(sayPotatoCommand);
}

export function deactivate(): Thenable<void> {
    console.log("Deactivating");

    if (!client) {
        return undefined;
    }

    return client.stop();
}
