import "./App.css";
import React, { Component } from "react";
import ChartContainer from "../Charts/ChartContainer";
import LineContainer from "../Charts/LineContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const HomeScreen = () => (
  <div>
    <div className="homescreen">
      <Link className="homescreen__left" to="/chart"></Link>
      <Link className="homescreen__right" to="/line"></Link>
    </div>
    <span className="optionText__left">Chart</span>
    <span className="optionText__right">Line</span>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <React.Fragment>
              <Route exact path="/chart" component={ChartContainer}></Route>
              <Route exact path="/line" component={LineContainer}></Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
