import React, { useReducer } from "react";
import "./bookings.css";
import FormComponent from "../components/UI/form";

const reducer = (state, action) => {
  if (action.type === "initializeTimes")
    return {
      availableTimes: ["18:00", "19:00", "20:00", "21:00", "22:00"],
    };
  if (action.type === "updateTimes")
    return {
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
  return state;
};

export default function Bookings() {
  const initialTimes = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const [state, dispatch] = useReducer(reducer, initialTimes);

  // eslint-disable-next-line no-unused-vars
  const updateTimes = (date) => {
    dispatch({ type: "updateTimes" });
    console.log(state);
  };

  // eslint-disable-next-line no-unused-vars
  const initializeTimes = () => {
    dispatch({ type: "initializeTimes" });
    console.log(state);
  };

  return (
    <div className="booking-page">
      <div className="img-container"></div>
      <div className="form-container">
        <FormComponent availableTimes={state} />
        {/* 
          buttons for testing reducers
        <button data-testid="initialize" onClick={initializeTimes}>
          {" "}
          initialize
        </button>
        <button data-testid="update" onClick={updateTimes}>
          {" "}
          update
        </button> */}
      </div>
    </div>
  );
}
