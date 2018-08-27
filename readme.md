# Language Plugins

This repository represents a spike into writing language plugins for vscode / monaco, using a simple
SQL-like language AQL (Analytics Query Language) as the proof of concept language.

# Notes

Some lessons learnt from this spike

## VSCode / Monaco

- vscode and monaco have different APIs, and are [not compatible](https://github.com/Microsoft/monaco-editor/issues/430)
- vscode uses text mate for syntax highlighting, whilst monaco uses its own custom json format for
  syntax highlighting
- monaco currently connects to the language server via websockets. This would potentially impact
  deploy procedures.

## Parsing / Error handling

- ANTLR is pretty awesome, it can generate various clients
- ANTLR doesn't support incremental parsing. That shouldn't be an issue for such a small query
  language though.
- I'm still on the fence about a hand rolled parser for better error handling, or investigating
  [Menhir](http://gallium.inria.fr/~fpottier/menhir/)

## Database considerations

- The database should be read only
- The queries should run under a user account with limited permissions
- There should be semantic verification of the schema to ensure that the user doesn't generate valid
  AQL->SQL transformations, that would provide access to other individual's data
- It's not possible to explicitly coerce data types in AQL, meaning the AQL -> SQL layer could help
  the end user out with data coercion, for averaging money fields

# Useful Resources

## Language Design

- https://www.amazon.co.uk/Definitive-ANTLR-4-Reference/dp/1934356999
- https://groups.google.com/forum/?fromgroups#!topic/antlr-discussion/JxTED3XeZuE
- https://github.com/mike-lischke/antlr4-c3
- https://blog.rapid7.com/2015/06/29/how-to-implement-antlr4-autocomplete/

## Monaco / VSCode

- https://code.visualstudio.com/docs/extensions/yocode
- https://github.com/Microsoft/vscode-extension-samples
- https://microsoft.github.io/monaco-editor/monarch.html
- https://tomassetti.me/language-server-dot-visual-studio/
- http://typefox.io/teaching-the-language-server-protocol-to-microsofts-monaco-editor

## Postgres Fun

- https://dba.stackexchange.com/questions/75015/query-to-return-output-column-names-and-data-types-of-a-query-table-or-view
- https://chartio.com/learn/sql/random-sequences/
- https://www.postgresql.org/docs/10/static/index.html
