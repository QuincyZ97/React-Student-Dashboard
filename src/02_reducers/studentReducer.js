import rawData from "../00_store/studentData.json";

// const filterByName = rawData.filter((item) => item.name.includes("Evelyn")); // WORKS


// console.log(uniqueNames);
// console.log(filterByName);

const dataReducer = (state = rawData, action) => {
  switch (action.type) {
    default:
      return state;
    case "TEST":
      return state;
  }
};

export default dataReducer;
