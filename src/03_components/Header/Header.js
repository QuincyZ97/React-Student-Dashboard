import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SettingsModal from "../ChartSettings/ChartSettings";
import "./Header.css";

export default function HeaderBar() {
  let currentLocation = useLocation();

  return (
    <header className="App-header navbar bg-dark">
      <nav className="nav nav-pills">
        <div className="mainNav">
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to="/home"
          >
            <i className="fa fa-fw fa-home" />
            <span>Home</span>
          </NavLink>

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
            to="/Exercises"
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
        </div>

        {currentLocation.pathname.includes("/chart/") ? (
          <SettingsModal />
        ) : (
          <span class="navbar-text navbar-center">
            Student Dashboard <i className="fas fa-user-graduate"></i>
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
