import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./StudentMenu.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function StudentMenu(props) {
  const filterState = useSelector((state) => state.chartFilter);
  const [initialUrl, setInitialUrl] = useState(0);

  const StudentLinkButtons = filterState.map(({ studentName, id }) => {
    if (props.activeBtn !== id) {
      return (
        <Link
          to={`/students/${studentName}`}
          style={{ textDecoration: "none" }}
        >
          <button onClick={() => props.changeSelected(id)} key={id}>
            {studentName}
          </button>
        </Link>
      );
    } else {
      return (
        <Link
          to={`/students/${studentName}`}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={() => props.changeSelected(id)}
            className="active_btn"
            key={id}
          >
            {studentName}
          </button>
        </Link>
      );
    }
  });

  function InitialURLRender() {
    // bootstrap/ reactRouter active class workaround
    let history = useHistory();
    useEffect(() => {
      history.push("/students/Evelyn"); // initial render state here
      setInitialUrl("initialized");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialUrl]);
  }
  InitialURLRender();

  return <div className="select__menu--students">{StudentLinkButtons}</div>;
}
