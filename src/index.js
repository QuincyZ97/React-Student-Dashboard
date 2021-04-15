import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/03_components/App/App";
import { Provider } from "react-redux";
import store from "./00_store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "rc-switch/assets/index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
