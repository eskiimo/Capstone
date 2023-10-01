import React, { useRef, useState } from "react";
import "./form.css";

export default function FormComponent(props) {
  const [date, setDate] = useState("");

  const changeDate = (e) => {
    setDate(e.target.value);
    props.checkDate(e.target.value);
  };
  const timeRef = useRef();
  const guestsRef = useRef();
  const occRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `you successfully booked a table for ${guestsRef.current.value}, On ${date} , at ${timeRef.current.value}, for your ${occRef.current.value}`;
    console.log(message);
  };

  const availableTimes = props.availableTimes.availableTimes.map((time) => {
    return <option key={time}>{time}</option>;
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        onChange={changeDate}
        value={date}
        type="date"
        id="res-date"
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select ref={timeRef} id="res-time ">
        {availableTimes.length > 0 ? (
          availableTimes
        ) : (
          <option> no time available for this day</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        ref={guestsRef}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        className="date-select"
        data-testid="date"
        ref={occRef}
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
}
