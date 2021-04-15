import "./Homescreen.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Homescreen() {
  return (
    <div>
      <div className="homescreen">
        <Link className="homescreen__left" to="/chart"></Link>
        <Link className="homescreen__right" to="/line"></Link>
      </div>
      <span className="optionText__left">Chart</span>
      <span className="optionText__right">Line</span>
    </div>
  );
}
