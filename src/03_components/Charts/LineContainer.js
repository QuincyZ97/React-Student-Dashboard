import React from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryAxis,
  VictoryTooltip,
  VictoryLegend,
  VictoryVoronoiContainer,
} from "victory";
import Copyright from "../Copyright/Copyright";
import { useSelector } from "react-redux";

function LineContainer() {
  const displayState = useSelector((state) => state.display);
  const studentState = useSelector((state) => state.student);
  const optionState = useSelector((state) => state.options);
  //-----------AXIS DISPLAY-------------
  const getCheckedNames = displayState.filter((obj) => {
    return obj.checked === true;
  });

  const shortenName = (obj) => {
    if (obj.length > 10) {
      // shorten length of Exercise names
      return obj.slice(16, obj.length);
    } else return obj;
  };

  //=============SINGLE DISPLAY================
  const renderAxisData = () => {
    if (getCheckedNames.length === 1) {
      const getStudentData = studentState.filter((item) =>
        item.name.includes(getCheckedNames[0].studentName)
      );

      const getRating = getStudentData.map((obj) => {
        const ratingObj = {
          x: shortenName(obj.exercise),
          y: obj.rating,
          label: `${obj.name}: ${obj.rating}`,
        };
        return ratingObj;
      });

      const getdifficulty = getStudentData.map((obj) => {
        const ratingObj = {
          x: shortenName(obj.exercise),
          y: obj.difficulty,
          label: `${obj.name}: ${obj.difficulty}`,
        };
        return ratingObj;
      });
      return {
        ratingData: getRating,
        difficultyData: getdifficulty,
      };
    } else if (getCheckedNames.length >= 2) {
      //=============MULTI DISPLAY (AVARAGE)================
      const multiStudentData = getCheckedNames.map((obj) => {
        return studentState.filter((item) =>
          item.name.includes(obj.studentName)
        );
      });

      const getAllRatingData = (object) =>
        object.map((obj) => {
          const ratingObj = {
            x: shortenName(obj.exercise),
            y: obj.rating,
            label: `${obj.name}: ${obj.rating} \n`,
          };
          return ratingObj;
        });

      const getAlldifficultyData = (object) =>
        object.map((obj) => {
          const difficultyObj = {
            x: shortenName(obj.exercise),
            y: obj.difficulty,
            label: `${obj.name}: ${obj.difficulty} \n`,
          };
          return difficultyObj;
        });

      const combinedRating = [];
      const combinedDifficulty = [];

      multiStudentData.forEach((ArrofObj) => {
        // Seperate rating & difficulty
        combinedRating.push(getAllRatingData(ArrofObj));
        combinedDifficulty.push(getAlldifficultyData(ArrofObj));
      });

      //================ GET AVERAGE ===================
      //NOTE: all arrays being Must be the same order and have the same number of elements
      const [firstRateArr, ...otherRateArrs] = combinedRating;
      // Make template from firstRateArr
      const averageRating = firstRateArr.map(({ x, y, label }, i) => {
        let total = y; //y = default value from firstRateArr
        let combinedLabel = label;
        otherRateArrs.forEach((arr) => (total += arr[i].y)); //add to total
        otherRateArrs.forEach((arr) => (combinedLabel += arr[i].label));
        return {
          x,
          y: total / combinedRating.length,
          label: `${combinedLabel} Average: ${(
            total / combinedRating.length
          ).toFixed(2)}`,
        };
      });

      //---------------------Difficulty-------------------------
      const [firstDiffArr, ...otherDiffArrs] = combinedDifficulty;
      const averageDifficulty = firstDiffArr.map(({ x, y, label }, i) => {
        let total = y;
        let combinedLabel = label;
        otherDiffArrs.forEach((arr) => (total += arr[i].y));
        otherDiffArrs.forEach((arr) => (combinedLabel += arr[i].label));
        return {
          x,
          y: total / combinedDifficulty.length,
          label: `${combinedLabel} Average: ${(
            total / combinedDifficulty.length
          ).toFixed(2)}`,
        };
      });

      return {
        ratingData: averageRating,
        difficultyData: averageDifficulty,
      };
    } else {
      //=============NOTHING SELECTED================
      return {
        ratingData: false,
        difficultyData: false,
      };
    }
  };
  //===============COMPONENT====================================================
  const { ratingData, difficultyData } = renderAxisData();
  return (
    <div className="mainContainer">
      <div className="chartdisplay">
        {ratingData === false && difficultyData === false && (
          <div className="NothingSelected">
            <i class="fas fa-arrow-up"></i>
            <span>Please choose a student</span>
          </div>
        )}

        <VictoryChart
          height={205}
          padding={{ top: 10, bottom: 35, left: 20, right: 20 }}
          containerComponent={<VictoryVoronoiContainer />}
        >
          <VictoryGroup
            style={{
              data: { strokeWidth: 1, fillOpacity: 0.4 },
            }}
          >
            {optionState.difficultyOn && (
              <VictoryArea
                style={{
                  data: { fill: "#007bff", stroke: "#007bff" },
                }}
                labelComponent={<VictoryTooltip style={{ fontSize: 5 }} />}
                data={difficultyData}
              />
            )}

            {optionState.ratingOn && (
              <VictoryArea
                style={{
                  data: { fill: "#334d5c", stroke: "#334d5c" },
                }}
                labelComponent={<VictoryTooltip style={{ fontSize: 5 }} />}
                data={ratingData}
              />
            )}
          </VictoryGroup>
          <VictoryAxis
            style={{
              tickLabels: {
                angle: 75,
                fontSize: 3,
                textAnchor: "start",
                padding: 1,
              },
              ticks: { stroke: "red", size: 2 },
            }}
          />
          <VictoryAxis
            label="Rating"
            style={{
              tickLabels: { fontSize: 5, padding: 1 },
              axisLabel: { fontSize: 5, padding: 10 },
              ticks: { stroke: "red", size: 2 },
            }}
            dependentAxis
            tickFormat={[0, 1.0, 2.0, 3.0, 4.0, 5.0]}
          />
          <VictoryLegend
            x={190}
            y={193}
            gutter={10}
            orientation="horizontal"
            colorScale={["#007bff", "#334d5c"]}
            data={[
              { name: "Difficulty", labels: { fontSize: 5 } },
              { name: "Rating", labels: { fontSize: 5 } },
            ]}
          />
        </VictoryChart>
      </div>
      <Copyright />
    </div>
  );
}

export default LineContainer;
