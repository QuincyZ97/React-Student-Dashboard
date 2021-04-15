import "./App.css";
import React, { Component } from "react";
import ChartContainer from "../Charts/ChartContainer";
import LineContainer from "../Charts/LineContainer";
import Homescreen from "../Homescreen/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homescreen} />
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
