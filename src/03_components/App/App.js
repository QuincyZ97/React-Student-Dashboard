import "./App.css";
import React from "react";
import ChartContainer from "../Charts/ChartContainer";
import LineContainer from "../Charts/LineContainer";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const rawState = useSelector((state) => state.student);
  console.log(rawState);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <li>
              <Link to="/">Bar Chart</Link>
            </li>
            <li>
              <Link to="/line">Line Chart</Link>
            </li>
          </nav>
        </header>

        <div>
          <Switch>
            <Route path="/" exact component={ChartContainer} />
            <Route path="/line" component={LineContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
