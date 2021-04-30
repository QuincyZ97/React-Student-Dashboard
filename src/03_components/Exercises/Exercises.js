import React, { useState } from "react";
import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLegend,
} from "victory";
import Copyright from "../Copyright/Copyright";
import { useSelector } from "react-redux";
import ExercisesMenu from "../ExercisesMenu/ExercisesMenu";
import "./Exercises.css";

function Exercises() {
  const studentState = useSelector((state) => state.studentData);
  const [selectedExcercise, setSelectedExcercise] = useState("SCRUM");

  const renderAxisData = () => {
    const getExerciseData = studentState.filter((item) =>
      item.exercise.includes(selectedExcercise)
    );

    const getRating = getExerciseData.map((obj) => {
      const ratingObj = {
        x: obj.name,
        y: obj.rating,
        label: `Rating: ${obj.rating}`,
      };
      return ratingObj;
    });

    const getdifficulty = getExerciseData.map((obj) => {
      const difficultyObj = {
        x: obj.name,
        y: obj.difficulty,
        label: `Difficulty: ${obj.difficulty}`,
      };
      return difficultyObj;
    });

    return {
      ratingData: getRating,
      difficultyData: getdifficulty,
    };
  };

  const { ratingData, difficultyData } = renderAxisData();

  return (
    <div className="ExcercisePage__wrapper">
      <ExercisesMenu
        changeSelected={setSelectedExcercise}
        activeBtn={selectedExcercise}
      />
      <div className="ExcercisePage__chartdisplay">
        <VictoryChart padding={20}>
          <VictoryGroup offset={9}>
            <VictoryBar
              color="#007bff"
              labelComponent={<VictoryTooltip style={{ fontSize: 5 }} />}
              data={difficultyData}
              cornerRadius={1}
            />

            <VictoryBar
              color="#334d5c"
              labelComponent={<VictoryTooltip style={{ fontSize: 5 }} />}
              data={ratingData}
              cornerRadius={1}
            />
          </VictoryGroup>

          <VictoryAxis
            label="Students"
            style={{
              axisLabel: { fontSize: 7, padding: 23 },
              tickLabels: { fontSize: 7, padding: 1 },
              ticks: { stroke: "red", size: 2 },
            }}
          />
          <VictoryAxis
            label={`${selectedExcercise}: Score`}
            style={{
              tickLabels: { fontSize: 7, padding: 1 },
              axisLabel: { fontSize: 7, padding: 10 },
              ticks: { stroke: "red", size: 2 },
            }}
            dependentAxis
            tickFormat={[0, 1.0, 2.0, 3.0, 4.0, 5.0]}
          />
          <VictoryLegend
            x={140}
            y={0}
            gutter={10}
            orientation="horizontal"
            colorScale={["#007bff", "#334d5c"]}
            data={[
              { name: "Difficulty", labels: { fontSize: 7 } },
              { name: "Rating", labels: { fontSize: 7 } },
            ]}
          />
        </VictoryChart>
      </div>
      <Copyright />
    </div>
  );
}
export default Exercises;
