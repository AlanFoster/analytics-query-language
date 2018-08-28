import React from 'react';
import AqlEditor from './aql-editor';
import {Button, Table, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import InformationTooltip from './information-tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListAlt, faFileCode, faChartBar} from '@fortawesome/free-regular-svg-icons';
import {ResponsiveContainer,BarChart, Bar, LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Line} from 'recharts';
import { pure } from 'recompose';
import * as moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const getFormatterFor = function (heading) {
  if (heading === 'created_at' || heading === 'timeseries') {
    return value => moment(value).fromNow();
  }

  // Identity
  return x => x;
};

const ListView = pure(({ results }) => {
  if (results.rows.length === 0) return <div>No results</div>;

  // The server should expand wildcard to select only the fields we care about, let's cheat for now.
  const headings = Object.keys(results.rows[0]).filter(heading => !(heading === 'id' || heading === 'deleted_at'));

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
              {headings.map(function (heading) {
                const formatter = getFormatterFor(heading);
                const value = formatter(row[heading]);

                return <td key={heading}>{value}</td>
              })}
            </tr>
          );
        })}
        </tbody>
      </Table>
    </div>
  );
});

const ChartView = pure(({ results }) => {
  if (results.rows.length === 0) {
    return <div>There is no data to plot</div>
  }

  // TODO: Guess the key blindly for now. The best way to handle this might be the server returning
  // the data directly in a usable format by our charts, rather than the client guessing what to aggregate on
  const possibleAggregations = ['count', 'sum', 'avg', 'min', 'max', 'coalesce'];
  const key = possibleAggregations.find(function (key) {
    if (key in results.rows[0]) {
      return key;
    }
  });

  if (!key) return <div>Only Aggregate functions can be plotted</div>

  const data = results.rows.map(function (row) {
    return {
      name: moment(row.timeseries).fromNow(),
      raw: (key in row) ? row[key] : 'Missing',
      [key]: (key in row) ? Number(row[key].match(/^\$?(.*)/)[1]) : 0
    }
  }).reverse();

  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey='name'/>
        <YAxis
          label={{ value: key, angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          formatter={(value, name, props) => props.payload.raw}
        />
        <Legend/>
        <Bar isAnimationActive={false} type="monotone" dataKey={key} fill="#8884d8"/>
      </BarChart>
    </ResponsiveContainer>
  );
});

const DataView = pure(({ results }) => {
  return (
    <div style={{ backgroundColor: '#F6F6F6', border: '1px solid #dee2e6', padding: '1rem' }}>
      <pre>
        {JSON.stringify(results, null, 4)}
      </pre>
    </div>
  );
});

const resultsView = {
  listView: 'list-view',
  dataView: 'data-view',
  chartView: 'chart-view',
};

const ToggleView = ({ onClick, value, isActive, icon }) => {
  return (
    <NavItem>
      <NavLink
        className={isActive ? 'active' : ''}
        onClick={() => {
          onClick(value);
        }}
      >
        <FontAwesomeIcon icon={icon} color={isActive ? '#333' : '#AAA'}/>
      </NavLink>
    </NavItem>
  )
};

const Results = ({ results, view }) => {
  if (!results.rows) return null;

  return (
    <div style={{ background: '#FFFFFF', padding: '1rem' }}>
      <TabContent activeTab={view}>
        <TabPane tabId={resultsView.listView}>
          <ListView results={results}/>
        </TabPane>
        <TabPane tabId={resultsView.dataView}>
          <DataView results={results}/>
        </TabPane>
        <TabPane tabId={resultsView.chartView}>
          <ChartView results={results}/>
        </TabPane>
      </TabContent>
    </div>
  )
};

const ShowQuery = pure(({ results }) => {
  const hasExecuted = (results && results.command);
  if (!hasExecuted) return null;

  return (
    <div className="alert alert-primary" role="alert">
      Server executed query:
      <pre style={{ margin: '0' }}>
        {results.command}
      </pre>
    </div>
  );
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: window.sessionStorage.value || "select * from products_view",
      results: undefined
    };
  }

  componentDidMount() {
    this.onFetchResults();
  }

  onChange = (newValue) => {
    window.sessionStorage.value = newValue;
    this.setState({ value: newValue });
  };

  onFetchResults = () => {
    this.setState({ results: {} });

    fetch('/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: this.state.value }),
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          results: res,
          view: resultsView.chartView
        })
      });
  };

  onToggleView = (view) => {
    this.setState({ view: view });
  };

  render() {
    const { view, results } = this.state;

    return (
      <div style={{ padding: '2rem' }}>
        <div style={{
          display: 'flex',
          backgroundColor: '#1e1e1e',
          padding: '0.8rem',
          borderRadius: '.25rem',
          marginBottom: '1rem'
        }}>
          <AqlEditor
            value={this.state.value}
            onChange={this.onChange}
            onFetchResults={this.onFetchResults}
          />
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0 0 0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
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

        {(results && results.errors && results.errors.length > 0) && (
          <div className="alert alert-danger" role="alert">
            <pre>
              {JSON.stringify(results.errors, null, 4)}
            </pre>
          </div>
        )}

        <ShowQuery results={results}/>

        {results && results.rows && (
          <Nav tabs>
            <ToggleView
              isActive={view === resultsView.listView}
              icon={faListAlt}
              value={resultsView.listView}
              onClick={this.onToggleView}
            />
            <ToggleView
              isActive={view === resultsView.chartView}
              icon={faChartBar}
              value={resultsView.chartView}
              onClick={this.onToggleView}
            />
            <ToggleView
              isActive={view === resultsView.dataView}
              icon={faFileCode}
              value={resultsView.dataView}
              onClick={this.onToggleView}
            />
          </Nav>
        )}

        {results && (
          <div style={{
            borderLeft: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            borderBottom: '1px solid #dee2e6',
          }}>
            <Results
              results={results}
              view={view}
            />
          </div>
        )}
      </div>
    )
  }
}

export default App;
