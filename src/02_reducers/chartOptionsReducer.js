const initDisplayState = {
  sort: "default",
  difficultyOn: true,
  ratingOn: true,
};

const chartOptionsReducer = (state = initDisplayState, action) => {
  switch (action.type) {
    default:
      return state;
    case "SWITCH_DIFFICULTY":
      return {
        ...state,
        difficultyOn: !state.difficultyOn,
      };
    case "SWITCH_RATING":
      return {
        ...state,
        ratingOn: !state.ratingOn,
      };
    case "RESET_DISPLAY":
      return { ...initDisplayState };
  }
};

export default chartOptionsReducer;
