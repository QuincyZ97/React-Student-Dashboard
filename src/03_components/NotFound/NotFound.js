import "./NotFound.css";
import React, { useEffect, useState } from "react";
import errorImg from "./images/error.gif";
import { Redirect } from "react-router-dom";

function NotFound() {
  const [countdown, setcountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setcountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (countdown === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="notFound_wrapper">
        <div className="hit-the-floor">404</div>
        <div className="notFound__image">
          <img src={errorImg} alt="something went wrong :(" />
        </div>
        <div className="hit-the-floor">page not found</div>
        <h1 className="notFound__count">Going back in {countdown} seconds</h1>
      </div>
    );
  }
}

export default NotFound;
