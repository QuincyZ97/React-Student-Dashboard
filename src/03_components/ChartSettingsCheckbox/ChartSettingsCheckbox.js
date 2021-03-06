import React from "react";
import "./ChartSettingsCheckbox.css";
import { useDispatch, useSelector } from "react-redux";
import { switchDifficultyOption, switchRatingOption } from "../../01_actions";

function ChartSettingsCheckbox() {
  const dispatch = useDispatch();
  const optionState = useSelector((state) => state.chartOptions);

  return (
    <span className="settings__chart--options">
      <label>
        <input
          type="checkbox"
          checked={optionState.difficultyOn}
          onChange={() => dispatch(switchDifficultyOption())}
        />
        <span>Difficulty</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={optionState.ratingOn}
          onChange={() => dispatch(switchRatingOption())}
        />
        <span>Rating</span>
      </label>
    </span>
  );
}

export default ChartSettingsCheckbox;
