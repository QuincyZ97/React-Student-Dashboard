import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SettingsModal from "../ChartSettings/ChartSettings";
import "./Header.css";

function HeaderBar() {
  let currentLocation = useLocation();

  return (
    <header className="App-header navbar bg-dark">
      <nav className="nav nav-pills">
        {!currentLocation.pathname.includes("/chart/") && (
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            exact
            to="/"
          >
            <i className="fa fa-fw fa-home" />
            <span>Home</span>
          </NavLink>
        )}

        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to="/students"
        >
          <i className="far fa-address-card"></i>
          <span>Students</span>
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to="/exercises"
        >
          <i className="fas fa-book"></i>
          <span>Exercises</span>
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to="/overview"
        >
          <i className="fas fa-border-all"></i>
          <span>Overview</span>
        </NavLink>

        {currentLocation.pathname.includes("/chart/") ? (
          <SettingsModal />
        ) : (
          <span className="navbar-text navbar-logo linear-wipe">
            <i className="fas fa-user-graduate"></i> Student Dashboard 
          </span>
        )}
        {currentLocation.pathname.includes("/chart/") && (
          <div className="chartSwitch">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/chart/bar"
            >
              <i className="far fa-chart-bar"></i>
              Bar Chart
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/chart/line"
            >
              <i className="fas fa-chart-area"></i>
              Line Chart
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
export default HeaderBar;
