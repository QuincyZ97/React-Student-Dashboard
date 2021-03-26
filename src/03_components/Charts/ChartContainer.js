import React from "react";
import store from "../../00_store/store";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLabel,
} from "victory";

//================MARK UP===========================
const currentState = store.getState();
const getNames = [...new Set(currentState.student.map((item) => item.name))];

const headerButtons = getNames.map((name, index) => (
  <button key={index}>{name}</button>
));

//==========CHART DATA===============================================
const dataA = [
  { x: "Personal Drones", y: 57 },
  { x: "Smart Thermostat", y: 40 },
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 },
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 400;
const height = 400;

class ChartContainer extends React.Component {
  render() {
    return (
      <div className="chartContainer">
        <header>{headerButtons}</header>
        <VictoryChart horizontal height={height} width={width} padding={40}>
          <VictoryStack
            style={{ data: { width: 25 }, labels: { fontSize: 15 } }}
          >
            <VictoryBar
              style={{ data: { fill: "tomato" } }}
              data={dataA}
              y={(data) => -Math.abs(data.y)}
              labels={({ datum }) => `${Math.abs(datum.y)}%`}
            />
            <VictoryBar
              style={{ data: { fill: "orange" } }}
              data={dataB}
              labels={({ datum }) => `${Math.abs(datum.y)}%`}
            />
          </VictoryStack>

          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 15, fill: "black" },
            }}
            /*
            Use a custom tickLabelComponent with
            an absolutely positioned x value to position
            your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
            tickLabelComponent={
              <VictoryLabel x={width / 2} textAnchor="middle" />
            }
            tickValues={dataA.map((point) => point.x).reverse()}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default ChartContainer;
