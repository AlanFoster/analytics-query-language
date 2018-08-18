import {ExtensionContext} from "vscode";

export function activate(context: ExtensionContext) {
    console.log("Activated");
}

export function deactivate() {
    console.log("Deactivated");
}
