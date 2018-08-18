import {ExtensionContext} from "vscode";

export function activate(context: ExtensionContext) {
    console.log("Activated");
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log("Deactivated");
}
