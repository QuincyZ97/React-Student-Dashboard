import React from "react";
import store from "../../00_store/store";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryTooltip,
} from "victory";
import { NavLink } from "react-router-dom";

//================HEADER==========================
const currentState = store.getState();
const getNames = [...new Set(currentState.student.map((item) => item.name))];

const headerButtons = getNames.map((name, index) => (
  <button className="dropdown-item" key={index}>
    {name}
  </button>
));
//TODO: DONT RENDER ON START > PLEASE SELECT A NAME ARROW POINT CONDITIONAL RENDER HTML
//ACTIVE STUDENT BUTTON DISPLAY DROPDOWN + DISPLAY NAME ABOVE
//==========AXIS DATA===============================================
const getStudentData = currentState.student.filter((item) =>
  item.name.includes("Aranka")
); // get objects {DEFAULT SORT ORDER}
const currentName = getStudentData[0].name;
const getExercises = getStudentData.map((obj) => {
  if (obj.exercise.length > 10) {
    // shorten length of eindopdrachten
    return [
      obj.exercise.substring(0, 4) + "\n" + obj.exercise.substring(16),
    ].join("");
  } else return obj.exercise;
});

//------------CHART DATA----------------------
const ratingData = getStudentData.map((obj, index) => {
  const ratingObj = { x: index + 1, y: obj.rating, label: obj.rating };
  return ratingObj;
});

const difficultyData = getStudentData.map((obj, index) => {
  const ratingObj = { x: index + 1, y: obj.difficulty, label: obj.difficulty };
  return ratingObj;
});

// console.log(ratingData);
// console.log(difficultyData);

const axisDataX = getExercises;
const axisDataY = [1.0, 2.0, 3.0, 4.0, 5.0];

//===============COMPONENT====================================================
class ChartContainer extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header navbar bg-dark ">
          <div className="nav-item dropdown">
            <button className="btn dropdown-toggle" data-toggle="dropdown">
              Students
            </button>
            <div className="dropdown-menu">{headerButtons}</div>
          </div>

          <nav className="nav nav-pills justify-content-center">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/chart"
            >
              Bar Chart
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/line"
            >
              Line Chart
            </NavLink>
          </nav>
          <span className="navbar-text">
            Made by <a href="https://github.com/QuincyZ97"> Quincy Zinnemers</a>
          </span>
        </header>

        <div className="chartdisplay">
          <VictoryChart
            domain={{ x: [0, 56] }}
            domainPadding={{ x: 20 }}
            width={800}
            padding={{ left: 40, top: 20, right: 20, bottom: 60 }}
            style={{
              background: { fill: "lavender" },
            }}
            theme={VictoryTheme.material}
            containerComponent={
              <VictoryZoomContainer
                zoomDomain={{ x: [0, 11] }}
                zoomDimension="x"
                allowZoom={false}
              />
            }
          >
            <VictoryAxis
              standalone={true}
              tickFormat={axisDataX}
              label={`${currentName}'s exercises`}
              style={{
                tickLabels: { angle: 50, fontSize: 7, padding: 13 },
                axisLabel: { padding: 43 },
              }}
            />

            <VictoryAxis
              tickFormat={axisDataY}
              label="Rating"
              style={{
                axisLabel: { padding: 13 },
              }}
              dependentAxis
            />

            <VictoryGroup
              offset={15}
              style={{ data: { width: 15 } }}
              colorScale={["tomato", "gold"]}
            >
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={difficultyData}
              />
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={ratingData}
              />
            </VictoryGroup>
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default ChartContainer;
