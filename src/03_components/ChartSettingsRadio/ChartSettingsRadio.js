import React, { useState } from "react";
import "./ChartSettingsRadio.css";
import {
  sortOnExercise,
  sortOnRating,
  sortOnDifficutly,
  switchDifficultyOption,
  switchRatingOption,
  resetDisplayOption,
} from "../../01_actions";
import { useDispatch } from "react-redux";

export default function ChartSettingsRadio() {
  const [currentRadio, setCurrentRadio] = useState(1);

  const dispatch = useDispatch();
  return (
    <div className="sort-options">
      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentRadio === 1}
          onChange={() => {
            dispatch(sortOnExercise());
            dispatch(resetDisplayOption());
            setCurrentRadio(1);
          }}
        />
        <span>Exercise</span>
      </label>

      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentRadio === 2}
          onChange={() => {
            dispatch(sortOnDifficutly());
            dispatch(resetDisplayOption());
            dispatch(switchRatingOption());
            setCurrentRadio(2);
          }}
        />
        <span>Difficulty</span>
      </label>

      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentRadio === 3}
          onChange={() => {
            dispatch(sortOnRating());
            dispatch(resetDisplayOption());
            dispatch(switchDifficultyOption());
            setCurrentRadio(3);
          }}
        />
        <span>Rating</span>
      </label>
    </div>
  );
}
