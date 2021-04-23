import React from "react";
import { useSelector } from "react-redux";

export default function ExerciseDropdown() {

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
    return (
      <button key={index} onClick={() => console.log("working")}>
        {exerciseName}
      </button>
    );
  });

  console.log(ExerciseLinkButtons);

  return <div className="dropDown_Menu">bar</div>;
}