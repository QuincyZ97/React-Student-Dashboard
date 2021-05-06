import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ExercisesMenu.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

 function ExercisesMenu(props) {
  const studentState = useSelector((state) => state.studentData);
  const [initialUrl, setInitialUrl] = useState(0);

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
        <Link
          to={`/exercises/${exerciseName}`}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => props.changeSelected(exerciseName)}
            key={index}
          >
            {exerciseName}
          </button>
        </Link>
      );
    } else {
      return (
        <Link
          to={`/exercises/${exerciseName}`}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => props.changeSelected(exerciseName)}
            className="active_btn"
            key={index}
          >
            {exerciseName}
          </button>
        </Link>
      );
    }
  });

  function InitialURLRender() {
    let history = useHistory();
    useEffect(() => {
      history.push("/exercises/SCRUM");
      setInitialUrl("initialized");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialUrl]);
  }
  InitialURLRender();

  return <div className="select__menu--exercise">{ExerciseLinkButtons}</div>;
}

export default ExercisesMenu;