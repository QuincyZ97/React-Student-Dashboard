export const switchCheckbox = (studentid) => {
  return {
    type: "CHECKBOX_SWITCH",
    payload: studentid,
  };
};

export const switchDifficultyOption = () => {
  return {
    type: "SWITCH_DIFFICULTY",
  };
};

export const switchRatingOption = () => {
  return {
    type: "SWITCH_RATING",
  };
};

export const resetDisplayOption = () => {
  return {
    type: "RESET_DISPLAY",
  };
};

export const sortOnExercise = () => {
  return {
    type: "SORTON_EXERCISE",
  };
};

export const sortOnRating = () => {
  return {
    type: "SORTON_RATING",
  };
};

export const sortOnDifficutly = () => {
  return {
    type: "SORTON_DIFFICULTY",
  };
};
