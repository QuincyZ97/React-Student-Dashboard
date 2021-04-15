import rawData from "../00_store/studentData.json";

const studentReducer = (state = rawData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default studentReducer;
