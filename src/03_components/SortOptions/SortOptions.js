import React from "react";
import "./SortOptions.css";
import {
  sortOnExercise,
  sortOnRating,
  sortOnDifficutly,
  switchDifficultyOption,
  switchRatingOption,
  resetDisplayOption,
} from "../../01_actions";
import { useDispatch } from "react-redux";

let currentlySorted = "exercise";
export default function SortOptions() {
  const dispatch = useDispatch();
  return (
    <div className="sort-options">

      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentlySorted === "exercise"}
          onChange={() => {
            dispatch(sortOnExercise());
            dispatch(resetDisplayOption());
            currentlySorted = "exercise";
          }}
        />
        <span>Exercise</span>
      </label>

      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentlySorted === "difficulty"}
          onChange={() => {
            dispatch(sortOnDifficutly());
            dispatch(resetDisplayOption());
            dispatch(switchRatingOption());
            currentlySorted = "difficulty";
          }}
        />
        <span>Difficulty</span>
      </label>

      <label>
        <input
          type="radio"
          name="sortOption"
          checked={currentlySorted === "rating"}
          onChange={() => {
            dispatch(sortOnRating());
            dispatch(resetDisplayOption());
            dispatch(switchDifficultyOption());
            currentlySorted = "rating";
          }}
        />
        <span>Rating</span>
      </label>
    </div>
  );
}
