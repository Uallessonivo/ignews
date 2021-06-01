import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/client";
import { SignInButton } from ".";
import { mocked } from "ts-jest/utils";

jest.mock("next-auth/client");

describe("SignInButton Component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText("Sign in With Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John Doe", email: "johndoe@example.com" },
        expires: "fake-expires",
      },
      false,
    ]);

    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
