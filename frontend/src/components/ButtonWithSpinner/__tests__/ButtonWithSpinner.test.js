import { render, screen } from "@testing-library/react";
import ButtonWithSpinner from "../index";

describe("ButtonWithSpinner", () => {
  it("disables button and shows spinner when loading", () => {
    render(<ButtonWithSpinner loading>Send</ButtonWithSpinner>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders children when not loading", () => {
    render(<ButtonWithSpinner loading={false}>Send</ButtonWithSpinner>);
    expect(screen.getByText("Send")).toBeInTheDocument();
  });
});
