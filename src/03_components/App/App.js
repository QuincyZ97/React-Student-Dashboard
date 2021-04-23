import "./App.css";
import React, { Component } from "react";
import BarContainer from "../Charts/BarContainer";
import LineContainer from "../Charts/LineContainer";
import Homescreen from "../Homescreen/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderNavBar from "../HeaderNavBar/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNavBar />
          <Switch>
            <React.Fragment>
              <Route exact path="/home" component={Homescreen} />
              <Route exact path="/home/bar" component={BarContainer}></Route>
              <Route exact path="/home/line" component={LineContainer}></Route>
              <Route exact path="/users" component={LineContainer}></Route>
              <Route exact path="/exercise" component={LineContainer}></Route>
              <Route exact path="/overview" component={LineContainer}></Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
