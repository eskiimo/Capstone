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

  expect(screen.getByText("mm/dd/yyy")).toBeInTheDocument();
});
