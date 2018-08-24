import React from 'react';
import AqlEditor from './aql-editor';
import {Button, Table, Card, CardTitle } from 'reactstrap';
import InformationTooltip from './information-tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = ({ results }) => {
  if (!results) return <div>Run your query above</div>;
  if (results.error) return <div>Error <pre>{JSON.stringify(results.error)}</pre></div>;
  if (!results.rows) return <div>Loading...</div>;
  if (results.rows.length === 0) return <div>No results</div>;

  const headings = Object.keys(results.rows[0]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {headings.map(function (value) {
              return <th key={value}>{value}</th>
            })}
          </tr>
        </thead>

        <tbody>
        {results.rows.map(function (row, index) {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              {Object.keys(row).map(function (key, index) {
                return <td key={index}>{row[key]}</td>
              })}
            </tr>
          );
        })}
        </tbody>
      </Table>
    </div>
  )
};

const ShowQuery = ({ results }) => {
  if (!(results && results.command)) return null;

  return (
    <div>
      Server executed query: <pre>{results.command}</pre>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "select * from products",

      results: undefined
    }
  }

  onChange = (newValue) => {
    this.setState({ value: newValue });
  };

  onFetchResults = () => {
    this.setState({ results: {} });

    fetch('/results', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: this.state.value }),
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({ results: res })
      });
  };

  render() {
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', backgroundColor: '#1e1e1e', padding: '0.8rem', borderRadius: '.25rem' }}>
          <AqlEditor
            value={this.state.value}
            onChange={this.onChange}
            onFetchResults={this.onFetchResults}
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0 0 0.5rem'}}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <Button onClick={this.onFetchResults}>
                Run
              </Button>
              <div style={{ margin: '0 0.5rem' }}>

              </div>
              <InformationTooltip>
                  <div>
                    <div><a href='#help'>Full SQL explanation</a></div>
                    <div>Run with Ctrl/Cmd + Enter</div>
                  </div>
              </InformationTooltip>
            </div>
          </div>
        </div>

        <Card body style={{ margin: '2rem 0' }}>
          <CardTitle>Results</CardTitle>
          <ShowQuery results={this.state.results} />
          <Results results={this.state.results}/>
        </Card>
      </div>
    )
  }
}


export default App;
