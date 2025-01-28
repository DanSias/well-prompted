import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders the app title", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to My App/i)).toBeInTheDocument();
});
