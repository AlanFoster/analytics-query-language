import React from 'react';
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  BarChart,
  Resizable,
  Legend,
  styler,
  TimeMarker,
  EventMarker,
  ScatterChart
} from "react-timeseries-charts";
import { TimeSeries, Index } from "pondjs";
import { format } from "d3-format";
import _ from 'lodash';

class CrossHairs extends React.Component {
  render() {
    const { x, y } = this.props;
    const style = { pointerEvents: "none", stroke: "#ccc" };
    if (!_.isNull(x) && !_.isNull(y)) {
      return (
        <g>
          <line style={style} x1={0} y1={y} x2={this.props.width} y2={y}/>
          <line style={style} x1={x} y1={0} x2={x} y2={this.props.height}/>
        </g>
      );
    } else {
      return <g/>;
    }
  }
}

const data = {
  name: "traffic",
  columns: ["time", "customer 1", "customer 2"],
  points: [
    [14004259470000, 52, 100],
    [14004259480000, 18, 90],
    [14004259490000, 26, 120,],
    [14004259500000, 20, 512],
    [14004259510000, 20, 512],
    [14004259520000, 20, 512],
  ]
};

const series = new TimeSeries(data);

const style = styler([
  { key: "customer 1", color: "steelblue", width: 2 },
  { key: "customer 2", color: "#F68B24", width: 2 }
]);

const calculateBestHighlight = function (series, e, value) {
  const bestLine = _.minBy(series.columns(), function (column) {
    return Math.abs(e.get(column) - value)
  });

  return bestLine;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  handleMouseMove = (x, y) => {
    this.setState({ x, y });
  };

  handleTrackerChanged = (t, xScale) => {
    if (t) {
      const e = series.atTime(t);
      const eventTime = new Date(
        e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      );

      const bestLine = calculateBestHighlight(series, e, window.yScale.invert(this.state.y));
      const trackerValue = e.get(bestLine);
      this.setState({ tracker: eventTime, trackerValue: trackerValue, trackerEvent: e });
    } else {
      this.setState({ tracker: null, trackerValue: null, trackerEvent: null });
    }
  };

  renderMarker = () => {
    if (!this.state.tracker) {
      return <g/>;
    }

    const bestLine = calculateBestHighlight(series, this.state.trackerEvent, window.yScale.invert(this.state.y));
    const color = style.columnStyles[bestLine].color;

    return (
      <EventMarker
        type="point"
        axis="axis1"
        event={this.state.trackerEvent}
        column={bestLine}
        markerLabel={this.state.trackerValue}
        markerLabelAlign="left"
        markerLabelStyle={{ fill: color, stroke: "white" }}
        markerRadius={3}
        markerStyle={{ fill: color  }}
      />
    )
  };

  render() {
    const categories = series.columns().map((column) => {
      const value =
        this.state.tracker
          ? format("$,.2f", series.atTime(this.state.tracker))
          : null;

      return {
        key: column,
        label: column,
        value: value
      }
    });


    const yLabel = "cost";

    return (
      <div style={{ padding: 50 }}>
        <Resizable>
          <ChartContainer
            utc={true}
            format="%X"
            timeRange={series.range()}
            width={800}
            showGrid={true}
            onMouseMove={(x, y) => this.handleMouseMove(x, y)}
            timeAxisStyle={{
              ticks: {
                stroke: "#AAA",
                opacity: 0.25,
                "stroke-dasharray": "1,1"
                // Note: this isn't in camel case because this is
                // passed into d3's style
              },
              values: {
                fill: "#AAA",
                "font-size": 12
              }
            }}
            maxTime={series.range().end() + 50000}
            minTime={series.range().begin() - 50000}

            trackerPosition={this.state.tracker}
            onTrackerChanged={this.handleTrackerChanged}
          >
            <ChartRow
              height="200"
              trackerShowTime={true}
              leftAxisWidths={500}
            >
              <YAxis
                id="axis1"
                label={yLabel}
                min={_.min(_.map(series.columns(), column => series.min(column)))}
                max={_.max(_.map(series.columns(), column => series.max(column)))}
                width="60"
                type="linear"
                style={{
                  ticks: {
                    stroke: "#AAA",
                    opacity: 0.25,
                    "stroke-dasharray": "1,1"
                    // Note: this isn't in camel case because this is
                    // passed into d3's style
                  }
                }}
                showGrid
                hideAxisLine
              />
              <Charts>
                <ScatterChart
                  style={style}
                  axis="axis1"
                  series={series}
                  columns={series.columns()}
                />

                <LineChart
                  style={style}
                  axis="axis1"
                  series={series}
                  columns={series.columns()}
                />

                <TimeMarker
                  axis="axis1"
                  time={series.range().begin()}
                  infoStyle={{ line: { strokeWidth: "2px", stroke: "#83C2FC" } }}
                  infoValues="Graph"
                />

                {/*<CrossHairs x={this.state.x} y={this.state.y}/>*/}

                {this.renderMarker()}
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>


        <Legend
          type="line"
          align="right"
          style={style}
          categories={categories}/>
      </div>
    )
  }
}

export default App;
