import React from "react";
import { NavLink } from "react-router-dom";
import Switch from "rc-switch";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { switchCheckbox } from "../../01_actions";

function HeaderBar() {
  const dispatch = useDispatch();
  const displayState = useSelector((state) => state.display);

  const headerCheckbox = displayState.map(({ studentName, checked, id }) => {
    return (
      <span>
        <Switch
          className="react-switch"
          onChange={() => dispatch(switchCheckbox(id))}
          key={id}
          checked={checked}
        />
        {studentName}
      </span>
    );
  });
    return (
      <header className="App-header navbar bg-dark">
        <div className="checkbox-container">{headerCheckbox}</div>

        <nav className="nav nav-pills">
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to="/chart"
          >
            Bar Chart
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to="/line"
          >
            Line Chart
          </NavLink>
        </nav>
      </header>
    );
}

export default HeaderBar;
