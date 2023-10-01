import { checkDate, fetchAPI } from "../utils/api";

export const reducer_date = (state, action) => {
  switch (action.type) {
    case "initializeTimes":
      console.log("called");
      return {
        availableTimes: fetchAPI() || [],
      };

    //  get available times for certain today !!
    case "updateTimes":
      return {
        availableTimes: checkDate(action.payload.date) || [],
      };

    default:
      return state;
  }
};
