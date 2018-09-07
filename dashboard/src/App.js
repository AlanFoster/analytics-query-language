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
  EventMarker
} from "react-timeseries-charts";
import {TimeSeries, Index} from "pondjs";
import {format} from "d3-format";
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
    [14004259500000, 200, 512]
  ]
};

const series = new TimeSeries(data);


const calculateBestHighlight = function (series, e) {
  const bestLine = series.columns().reduce((_previous, column) => {
    return column;
  });

  return bestLine;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  onHighlightChange = (column) => {
    this.setState({ highlighted: column });
  };

  handleMouseMove = (x, y) => {
    this.setState({ x, y });
  };

  handleTrackerChanged = (t, scale) => {
    if (t) {
      const e = series.atTime(t);
      const eventTime = new Date(
        e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
      );

      const bestLine = calculateBestHighlight(series, e);
      const eventValue = e.get(bestLine);
      const v = `${eventValue > 0 ? "+" : ""}${eventValue}°C`;
      this.setState({ s: scale(t), t: t, tracker: eventTime, trackerValue: v, trackerEvent: e });
    } else {
      this.setState({ s: null, t: null, tracker: null, trackerValue: null, trackerEvent: null });
    }
  };

  renderMarker = () => {
    if (!this.state.tracker) {
      return <g/>;
    }

    const bestLine = calculateBestHighlight(series, this.state.trackerEvent);

    return (
      <EventMarker
        type="point"
        axis="axis1"
        event={this.state.trackerEvent}
        column={bestLine}
        markerLabel={this.state.trackerValue}
        markerLabelAlign="left"
        markerLabelStyle={{ fill: "#2db3d1", stroke: "white" }}
        markerRadius={3}
        markerStyle={{ fill: "#2db3d1" }}
      />
    )
  };

  render() {
    const style = styler([
      { key: "customer 1", color: "steelblue", width: 2 },
      { key: "customer 2", color: "#F68B24", width: 2 }
    ]);

    let customer1;
    let customer2;

    if (this.state.tracker) {
      const f = format("$,.2f");
      const trackerEvent = series.atTime(this.state.tracker);
      customer1 = `${f(trackerEvent.get("customer 1"))}`;
      customer2 = `${f(trackerEvent.get("customer 2"))}`;
    }

    return (
      <div>
        <Resizable>
          <ChartContainer
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
            // maxTime={series.range().end()}
            // minTime={series.range().begin() - 500}
            // timeAxisAngledLabels={true}

            trackerPosition={this.state.tracker}
            onTrackerChanged={this.handleTrackerChanged}
          >
            <ChartRow height="200" trackerShowTime={true}>
              <YAxis
                id="axis1"
                label="potatoes"
                min={series.min('customer 1')}
                max={series.max('customer 2')}
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
                <LineChart
                  onHighlightChange={this.onHighlightChange}
                  style={style}
                  axis="axis1"
                  series={series}
                  columns={["customer 1", "customer 2"]}
                  highlight={"customer 1"}
                />


                <TimeMarker
                  axis="axis1"
                  time={series.range().begin()}
                  infoStyle={{ line: { strokeWidth: "2px", stroke: "#83C2FC" } }}
                  infoValues="Peak power"/>

                {this.renderMarker()}
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>


        <Legend
          type="line"
          align="right"
          style={style}
          categories={[
            { key: "customer 1", label: "customer 1", value: customer1 },
            { key: "customer 2", label: "customer 2", value: customer2 }
          ]}/>

        <pre>
          {JSON.stringify(this.state, null, 4)}
        </pre>
      </div>
    )
  }
}

export default App;
