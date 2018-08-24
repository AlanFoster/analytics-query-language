# Language Plugins

This repository represents a spike into writing language plugins for vscode /
monaco, using a simple SQL-like language AQL (Analaytics Query Language) as the
proof of concept language.

# Notes

Some lessons learnt from this spike

## VSCode / Monaco

- vscode and monaco have different APIs, and are [not compatible](https://github.com/Microsoft/monaco-editor/issues/430)
- vscode uses text mate for syntax highlighting, whilst monaco uses its own custom json format for syntax highlighting
- monaco currently connects to the language server via websockets. This would potentially impact deploy procedures.

## Parsing / Error handling

- ANTLR is pretty awesome, it can generate various clients
- ANTLR doesn't support incremental parsing. That shouldn't be an issue for such a small query language though.
- I'm still on the fence about a hand rolled parser for better error handling, or investigating [Menhir](http://gallium.inria.fr/~fpottier/menhir/)

# Useful Resources

- https://code.visualstudio.com/docs/extensions/yocode
- https://github.com/Microsoft/vscode-extension-samples
- https://microsoft.github.io/monaco-editor/monarch.html
- https://tomassetti.me/language-server-dot-visual-studio/
- https://groups.google.com/forum/?fromgroups#!topic/antlr-discussion/JxTED3XeZuE
- https://github.com/mike-lischke/antlr4-c3
- https://blog.rapid7.com/2015/06/29/how-to-implement-antlr4-autocomplete/
- https://www.amazon.co.uk/Definitive-ANTLR-4-Reference/dp/1934356999
- http://typefox.io/teaching-the-language-server-protocol-to-microsofts-monaco-editor
