import React, { useRef, useState } from "react";
import "./form.css";

export default function FormComponent(props) {
  let today = new Date();
  let year = today.getFullYear();
  let month = (1 + today.getMonth()).toString().padStart(2, "0");
  let day = today.getDate().toString().padStart(2, "0");

  const [date, setDate] = useState(year + "-" + month + "-" + day);

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
        aria-label="choose what day to reserve"
        onChange={changeDate}
        value={date}
        type="date"
        id="res-date"
        data-testid="date-input"
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select required ref={timeRef} id="res-time" data-testid="time-input">
        {availableTimes}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        aria-label="number of guests"
        ref={guestsRef}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        aria-label="Select The Occasion"
        className="date-select"
        data-testid="date"
        ref={occRef}
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button aria-label="Make Your reservation" type="submit">
        Make Your reservation
      </button>
    </form>
  );
}
