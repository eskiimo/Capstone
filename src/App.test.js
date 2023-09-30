import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
import Bookings from "./pages/bookings";

afterEach(cleanup);

test("rorm rendered", () => {
  render(<Bookings />);
  const button = screen.getByText("Make Your reservation");
  expect(button).toBeInTheDocument();
});

test("update times reducer", () => {
  render(<Bookings />);

  const updateBtn = screen.getByTestId("update");

  fireEvent.click(updateBtn);
  expect(screen.getByText("17:00")).toBeInTheDocument();
});

test("update initialize date reducer", () => {
  render(<Bookings />);
  const initializeBtn = screen.getByTestId("initialize");

  fireEvent.click(initializeBtn);
  expect(screen.getByText("18:00")).toBeInTheDocument();
});
