import rawData from "../00_store/studentData.json";

const getNames = [...new Set(rawData.map((item) => item.name))];

// ============ NOTE: USE TO DEFAULT RENDER CHART AT START ===========
// const initDisplayState = getNames.map((name, index) =>
//   name === "Evelyn"
//     ? {
//         studentName: name,
//         id: index,
//         checked: true,
//       }
//     : {
//         studentName: name,
//         id: index,
//         checked: false,
//       }
// );


const initDisplayState = getNames.map((name, index) => {
  return { studentName: name, id: index, checked: false };
});


const chartFilterReducer = (state = initDisplayState, action) => {
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

export default chartFilterReducer;
