import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
import Bookings from "./pages/bookings";

// afterEach(cleanup);

test("form rendered", () => {
  render(<Bookings />);
  const button = screen.getByText("Make Your reservation");
  expect(button).toBeInTheDocument();
});

test("it changes the date input value", () => {
  render(<Bookings />);
  const dateInput = screen.getByTestId("date-input");
  const timeInput = screen.getByTestId("time-input");

  // Initial value should be an empty string
  expect(dateInput.value).toBe("");

  // Simulate a change event to select a different date
  fireEvent.change(dateInput, { target: { value: "2023-10-22" } });

  // Verify that the selected date has changed
  expect(timeInput.value).toBe("16:00");
});
