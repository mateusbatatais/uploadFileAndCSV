import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./index";

test("correct render image", () => {
  render(<Image />);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
