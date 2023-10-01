import React, { useReducer } from "react";
import "./bookings.css";
import FormComponent from "../components/UI/form";
import { fetchAPI } from "../utils/api";
import { reducer_date } from "../utils/reducer";

export default function Bookings() {
  const initialTimes = {
    availableTimes: fetchAPI() || ["00:00"],
  };
  const [state, dispatch] = useReducer(reducer_date, initialTimes);

  // eslint-disable-next-line no-unused-vars
  const updateTimes = (date) => {
    dispatch({
      type: "updateTimes",
      payload: {
        date: date,
      },
    });
    // console.log(state);
  };

  // const initializeTimes = () => {
  //   dispatch({ type: "initializeTimes" });
  // };

  return (
    <div className="booking-page">
      <div className="img-container"></div>
      <div className="form-container">
        <FormComponent availableTimes={state} checkDate={updateTimes} />
      </div>
    </div>
  );
}
