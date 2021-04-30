import "./App.css";
import React, { Component } from "react";
import ChartBar from "../ChartBar/ChartBar";
import ChartLine from "../ChartLine/ChartLine";
import SelectionScreen from "../SelectionScreen/SelectionScreen";
import Exercises from "../Exercises/Exercises";
import Student from "../Student/Student";
import Overview from "../Overview/Overview";
import Copyright from "../Copyright/Copyright";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <React.Fragment>
              <Route exact path="/home" component={SelectionScreen}></Route>
              <Route exact path="/chart/bar" component={ChartBar}></Route>
              <Route exact path="/chart/line" component={ChartLine}></Route>
              <Route exact path="/students" component={Student}></Route>
              <Route exact path="/Exercises" component={Exercises}></Route>
              <Route exact path="/overview" component={Overview}></Route>
            </React.Fragment>
          </Switch>
          <Copyright />
        </div>
      </Router>
    );
  }
}
export default App;

//TO DO: ADD ROUTE ON NAME ( &OPTION if checked?) + ICONS

// CHANGE NAMES ClASSNAMES
// RESPONSIVE UI + COLOR CHANGES + LOGO / ICONS / SCSS?
