import React from "react";
import { render, screen } from "@testing-library/react";
import Toast from "./index";

test("correct render image", () => {
  render(<Toast msg="teste" type="success" state={true} />);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
