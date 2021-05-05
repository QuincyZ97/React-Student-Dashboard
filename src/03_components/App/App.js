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
            <>
              <Route exact path="/" component={SelectionScreen}></Route>
              <Route path="/chart/bar" component={ChartBar}></Route>
              <Route path="/chart/line" component={ChartLine}></Route>
              <Route path="/students" component={Student}></Route>
              <Route path="/exercises" component={Exercises}></Route>
              <Route path="/overview" component={Overview}></Route>
            </>
          </Switch>
          <Copyright />
        </div>
      </Router>
    );
  }
}
export default App;

//TO DO: ADD ROUTE ON NAME ( &OPTION if checked?)
// CHANGE ClASSNAMES / RESPONSIVE UI / COLOR CHANGES / MAYBE SCSS?
