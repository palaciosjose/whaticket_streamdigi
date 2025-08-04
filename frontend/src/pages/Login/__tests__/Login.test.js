import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../index";
import { AuthContext } from "../../../context/Auth/AuthContext";

describe("Login page", () => {
  it("submits user credentials", () => {
    const handleLogin = jest.fn();

    render(
      <AuthContext.Provider value={{ handleLogin }}>
        <Login />
      </AuthContext.Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" }
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "123456" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(handleLogin).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "123456",
      remember: false
    });
  });
});
