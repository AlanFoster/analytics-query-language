import React from 'react';
import AqlEditor from './aql-editor';
import {Button, Table, Card, CardBody, CardTitle, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import InformationTooltip from './information-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faFileCode } from '@fortawesome/free-regular-svg-icons';
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

const ListView = ({ results }) => {
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
};

const DataView = ({ results }) => {
  return (
    <div style={{ backgroundColor: '#F6F6F6', border: '1px solid #dee2e6', padding: '1rem' }}>
      <pre>
        {JSON.stringify(results, null, 4)}
      </pre>
    </div>
  );
};

const resultsView = {
  listView: 'list-view',
  dataView: 'data-view'
};

const ToggleView = ({ onClick, value, isActive, icon }) => {
  return (
    <NavItem>
      <NavLink
        className={isActive ? 'active' : ''}
        onClick={() => { onClick(value); }}
      >
        <FontAwesomeIcon icon={icon} color={isActive ? '#333' : '#AAA'} />
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
          <Row>
            <Col sm="12">
              <ListView results={results} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={resultsView.dataView}>
          <DataView results={results} />
        </TabPane>
      </TabContent>
    </div>
  )
};

const ShowQuery = ({ results }) => {
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
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: window.sessionStorage.value || "select * from products_view",
      results: undefined
    }
  }

  onChange = (newValue) => {
    window.sessionStorage.value = newValue;
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
        this.setState({
          results: res,
          view: resultsView.listView
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
        <div style={{ display: 'flex', backgroundColor: '#1e1e1e', padding: '0.8rem', borderRadius: '.25rem', marginBottom: '1rem' }}>
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

        {(results && results.errors && results.errors.length > 0) &&(
          <div className="alert alert-danger" role="alert">
            <pre>
              {JSON.stringify(results.errors, null, 4)}
            </pre>
          </div>
        )}

        <ShowQuery results={results} />

        {results && results.rows && (
          <Nav tabs>
            <ToggleView
              isActive={view === resultsView.listView}
              icon={faListAlt}
              value={resultsView.listView}
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
          <div style={{ borderLeft: '1px solid #dee2e6', borderRight: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6', }}>
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
