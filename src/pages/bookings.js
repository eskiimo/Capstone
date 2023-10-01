import React, { useReducer, useEffect } from "react";
import "./bookings.css";
import FormComponent from "../components/UI/form";
import { reducer_date } from "../utils/reducer";

export default function Bookings() {
  const [state, dispatch] = useReducer(reducer_date, {
    availableTimes: ["00:00"], // Initialize with a default value
  });

  useEffect(() => {
    dispatch({
      type: "initializeTimes",
    });
  }, []); // Empty dependency array to run the effect once on mount

  // eslint-disable-next-line no-unused-vars
  const updateTimes = (date) => {
    dispatch({
      type: "updateTimes",
      payload: {
        date: date,
      },
    });
  };

  return (
    <div className="booking-page">
      <div className="img-container"></div>
      <div className="form-container">
        <FormComponent availableTimes={state} checkDate={updateTimes} />
      </div>
    </div>
  );
}
