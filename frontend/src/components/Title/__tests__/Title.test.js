import { render, screen } from "@testing-library/react";
import Title from "../index";

test("renders children text", () => {
  render(<Title>Testing</Title>);
  expect(screen.getByText("Testing")).toBeInTheDocument();
});
