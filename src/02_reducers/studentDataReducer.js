import rawData from "../00_store/studentData.json";

const studentDataReducer = (state = rawData, action) => {
  switch (action.type) {
    default:
      return state; 
    case "SORTON_EXERCISE":
      return [...rawData];
    case "SORTON_RATING": //HIGHEST FIRST
      const sortedRatingState = [...state].sort((a, b) =>
        a.rating < b.rating ? 1 : -1
      );
      return sortedRatingState;
    case "SORTON_DIFFICULTY": //HIGHEST FIRST
      const sortedDifficultyState = [...state].sort((a, b) =>
        a.difficulty < b.difficulty ? 1 : -1
      );
      return sortedDifficultyState;
  }
};

export default studentDataReducer;
