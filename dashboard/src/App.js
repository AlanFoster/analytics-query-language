import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as aql from './aql.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [
        '-- Simple query to help you get started',
        'select *',
        'from table',
        'where id > 500',
        'since monday at \'08:00\'',
        'until wednesday at \'08:00\''
      ].join("\n")
    }
  }

  editorWillMount = (monaco) => {
    monaco.languages.register({ id: 'aql' });
    monaco.languages.setMonarchTokensProvider('aql', aql.language);
    monaco.languages.setLanguageConfiguration('aql', aql.configuration);
  };

  editorDidMount = (editor) => {
    editor.focus();
  };

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      lineNumbers: "off",
      fontSize: 24,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false
      },
      wordWrap: "on",
      theme: "vs-dark",
      language: 'aql'
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
        editorWillMount={this.editorWillMount}
      />
    );
  }
}

export default App;
