import React from "react";
import "./Chartoptions.css";
import { useDispatch, useSelector } from "react-redux";
import { switchDifficultyOption, switchRatingOption } from "../../01_actions";

export default function Chartoptions() {
  const dispatch = useDispatch();
  const optionState = useSelector((state) => state.options);

  return (
    <span className="chart-options">
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
