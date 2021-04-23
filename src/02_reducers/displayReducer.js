import rawData from "../00_store/studentData.json";

const getNames = [...new Set(rawData.map((item) => item.name))];

const initDisplayState = getNames.map((name, index) =>
  name === "Evelyn"
    ? {
        studentName: name,
        id: index,
        checked: true,
      }
    : {
        studentName: name,
        id: index,
        checked: false,
      }
);

const displayReducer = (state = initDisplayState, action) => {
  switch (action.type) {
    default:
      return state;
    case "CHECKBOX_SWITCH":
      return state.map((obj) => {
        if (obj.id !== action.payload) {
          return obj;
        }
        return {
          ...obj,
          checked: !obj.checked,
        };
      });
  }
};

export default displayReducer;
