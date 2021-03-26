import { createStore } from "redux";
import rootReducer from "../02_reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// GET SPREADSHEET CSV AND EXPORT TO JSON https://csvjson.com/csv2json
