import { combineReducers } from "redux";
import studentDataReducer from "./studentDataReducer";
import chartFilterReducer from "./chartFilterReducer";
import chartOptionsReducer from "./chartOptionsReducer";

const rootReducer = combineReducers({
  studentData: studentDataReducer,
  chartFilter: chartFilterReducer,
  chartOptions: chartOptionsReducer,
});

export default rootReducer;
