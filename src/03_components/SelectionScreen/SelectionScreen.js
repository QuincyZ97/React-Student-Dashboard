import "./SelectionScreen.css";
import React from "react";
import { Link } from "react-router-dom";

function SelectionScreen() {
  return (
    <div>
      <div className="selection">
        <Link className="selection__left" to="/chart/bar"></Link>
        <Link className="selection__right" to="/chart/line"></Link>
      </div>
      <span className="selection__left--text">BAR CHART</span>
      <span className="selection__right--text">LINE CHART</span>
    </div>
  );
}

export default SelectionScreen;