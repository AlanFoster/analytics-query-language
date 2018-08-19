import React from 'react';
import AqlEditor from './aql-editor';
import {Button, Table, Card, CardTitle } from 'reactstrap';
import InformationTooltip from './information-tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = ({ results }) => {
  if (!results.headings) return <div>Loading...</div>

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          {results.headings.map(function (value) {
            return <th key={value}>{value}</th>
          })}
        </tr>
      </thead>

      <tbody>
      {results.values.map(function (values, index) {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            {values.map(function (value, index) {
              return <td key={index}>{value}</td>
            })}
          </tr>
        );
      })}
      </tbody>
    </Table>
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [
        '-- Simple query to help you get started',
        'select *',
        'from table',
        'where id > 500',
        'since monday at \'08:00\'',
        'until wednesday at \'08:00\''
      ].join("\n"),

      results: {
        headings: [
          'foo',
          'bar'
        ],

        values: [
          [10, 20],
          [30, 40]
        ]
      }
    }
  }

  onChange = (newValue) => {
    this.setState({ value: newValue });
  };

  onFetchResults = () => {
    this.setState({ results: {} });

    setTimeout(() => {
      this.setState({
        results: {
          headings: [
            'foo',
            'bar'
          ],

          values: [
            [10, 20],
            [30, 40]
          ]
        }
      })
    }, 600)
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
          <Results results={this.state.results}/>
        </Card>
      </div>
    )
  }
}


export default App;
