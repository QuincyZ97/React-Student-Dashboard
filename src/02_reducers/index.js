import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import displayReducer from "./displayReducer";
import chartOptionsReducer from "./chartOptionsReducer"

const rootReducer = combineReducers({
  student: studentReducer,
  display: displayReducer,
  options: chartOptionsReducer,
});

export default rootReducer;
