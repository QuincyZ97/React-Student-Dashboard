import studentData from "../00_store/studentData.json";



const dataReducer = (state = studentData, action) => {
  switch (action.type) {
    default:
      return state;
    case "TEST":
      return state;
  }
};

export default dataReducer;
