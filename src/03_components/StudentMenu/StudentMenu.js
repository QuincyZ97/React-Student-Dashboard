import React from "react";
import { useSelector } from "react-redux";
import "./StudentMenu.css";

export default function StudentMenu(props) {
  const filterState = useSelector((state) => state.chartFilter);

  const StudentLinkButtons = filterState.map(({ studentName, id }) => {
    if (props.activeBtn !== id) {
      return (
        <button onClick={() => props.changeSelected(id)} key={id}>
          {studentName}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => props.changeSelected(id)}
          className="active_btn"
          key={id}
        >
          {studentName}
        </button>
      );
    }
  });

  return <div className="select__menu--students">{StudentLinkButtons}</div>;
}
