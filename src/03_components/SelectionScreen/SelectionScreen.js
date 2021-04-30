import "./SelectionScreen.css";
import React from "react";
import { Link } from "react-router-dom";

export default function SelectionScreen() {
  return (
    <div>
      <div className="homescreen">
        <Link className="homescreen__left" to="/chart/bar"></Link>
        <Link className="homescreen__right" to="/chart/line"></Link>
      </div>
      <span className="optionText__left">BAR CHART</span>
      <span className="optionText__right">LINE CHART</span>
    </div>
  );
}
