//================EMPLOYEES================
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
