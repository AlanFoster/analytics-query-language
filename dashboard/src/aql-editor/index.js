import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as aql from './aql.js';

class AqlEditor extends React.Component {
  editorWillMount = (monaco) => {
    monaco.languages.register({ id: 'aql' });
    monaco.languages.setMonarchTokensProvider('aql', aql.language);
    monaco.languages.setLanguageConfiguration('aql', aql.configuration);
  };

  editorDidMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      this.props.onFetchResults()
    });

    editor.focus();
  };

  render() {
    const { value, onChange } = this.props;

    const fontSize = 24;
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
      theme: "vs-dark",
      language: 'aql',
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
