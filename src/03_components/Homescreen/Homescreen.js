import "./Homescreen.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Homescreen() {
  return (
    <div>
      <div className="homescreen">
        <Link className="homescreen__left" to="/home/bar"></Link>
        <Link className="homescreen__right" to="/home/line"></Link>
      </div>
      <span className="optionText__left">BAR CHART</span>
      <span className="optionText__right">LINE CHART</span>
    </div>
  );
}
