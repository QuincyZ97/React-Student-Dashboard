import React from "react";
import { useSelector } from "react-redux";
import "./ExerciseMenu.css";

export default function ExerciseMenu(props) {
  const studentState = useSelector((state) => state.student);
  const getUniqueExcerise = [
    ...new Set(
      studentState.map((item) => {
        if (item.exercise.length > 10) {
          return item.exercise.slice(17, item.exercise.length);
        } else return item.exercise;
      })
    ),
  ];

  const ExerciseLinkButtons = getUniqueExcerise.map((exerciseName, index) => {
    if (props.activeBtn !== exerciseName) {
      return (
        <button onClick={() => props.changeSelected(exerciseName)} key={index}>
          {exerciseName}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => props.changeSelected(exerciseName)}
          className="active_btn"
          key={index}
        >
          {exerciseName}
        </button>
      );
    }
  });

  return <div className="select__menu--exercise">{ExerciseLinkButtons}</div>;
}
