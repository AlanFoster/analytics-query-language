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
import { format } from "d3-format";
import _ from 'lodash';

const columnsFor = _.memoize(function (series) {
  return series.columns();
});

const calculateBestHighlight = function (series, trackerEvent, value) {
  const bestLine = _.minBy(columnsFor(series), function (column) {
    return Math.abs(trackerEvent.get(column) - value)
  });

  return bestLine;
};

class TimeSeriesChart extends React.Component {
  debounceDelay = 200;

  constructor(props) {
    super(props);
    this.state = {};
  };

  handleMouseMove = _.throttle((x, y) => {
    console.log("Handle mouse movement");
    this.setState({ x, y });
  }, this.debounceDelay);

  handleTrackerChanged = _.throttle((t) => {
    console.log("handle tracker changed");
    if (t) {
      const { series } = this.props;
      const trackerEvent = series.atTime(t);
      const eventTime = new Date(
        trackerEvent.begin().getTime() + (trackerEvent.end().getTime() - trackerEvent.begin().getTime()) / 2
      );

      const bestLine = calculateBestHighlight(series, trackerEvent, window.yScale.invert(this.state.y));
      const trackerValue = trackerEvent.get(bestLine);
      this.setState({ tracker: eventTime, trackerValue: trackerValue, trackerEvent: trackerEvent });
    } else {
      this.setState({ tracker: null, trackerValue: null, trackerEvent: null });
    }
  }, this.debounceDelay);

  renderMarker = () => {
    if (!this.state.tracker || !this.state.trackerEvent) {
      return <g/>;
    }

    const { series, style } = this.props;
    const bestLine = calculateBestHighlight(series, this.state.trackerEvent, window.yScale.invert(this.state.y));
    if (!bestLine) {
      return <g />;
    }

    const color = style.lineChartStyle()[bestLine].normal.stroke;

    return (
      <EventMarker
        type="flag"
        axis="axis1"
        event={this.state.trackerEvent}
        column={bestLine}
        info={[{ label: bestLine, value: this.state.trackerValue }]}
        // infoStyle={{ fill: "#FFF", stroke: color }}
        infoWidth={160}
        markerRadius={4}
        markerStyle={{ fill: color }}
        // stemStyle={{ stroke: color }}
      />
    )
  };

  render() {
    const { yLabel, series, style } = this.props;

    const categories = columnsFor(series).map((column) => {
      // TODO: Consider if we want legend values, it seems to get pretty noisey
      // const value =
      //   this.state.tracker
      //     ? format("$,.2f")(series.atTime(this.state.tracker).get(column))
      //     : null;

      return {
        key: column,
        label: column,
        // value: value
      }
    });

    return (
      <div>
        <Resizable>
          <ChartContainer
            utc={true}
            // timeAxisTickCount={2}
            // format="day"
            timeRange={series.range()}
            width={800}
            showGrid={true}
            onMouseMove={this.handleMouseMove}
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
            maxTime={series.range().end()}
            minTime={series.range().begin()}

            trackerPosition={this.state.tracker}
            onTrackerChanged={this.handleTrackerChanged}
          >
            <ChartRow
              height="300"
              // trackerShowTime={true}
              leftAxisWidths={500}
            >
              <YAxis
                id="axis1"
                label={yLabel}
                min={_.min(_.map(columnsFor(series), column => series.min(column)))}
                max={_.max(_.map(columnsFor(series), column => series.max(column)))}
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
                  style={style}
                  axis="axis1"
                  series={series}
                  columns={columnsFor(series)}
                />

                <TimeMarker
                  axis="axis1"
                  time={series.range().begin()}
                  infoStyle={{ line: { strokeWidth: "2px", stroke: "#83C2FC" } }}
                  infoValues="Graph"
                />

                {this.renderMarker()}
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>

        <Legend
          type="swatch"
          align="right"
          style={style}
          categories={categories}
        />
      </div>
    )
  }
}

export default TimeSeriesChart;
