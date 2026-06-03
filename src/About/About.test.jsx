import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  it("renders without crashing", () => {
    render(<About />);
  });

  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByText("About me")).toBeInTheDocument();
  });

  it("renders the standfirst lead", () => {
    render(<About />);
    expect(screen.getByText(/hold up when the network/)).toBeInTheDocument();
  });

  it("renders the four stat statements", () => {
    render(<About />);
    expect(screen.getByText(/50\+ Molton Brown stores/)).toBeInTheDocument();
    expect(screen.getByText(/100\+ Kroger drivers/)).toBeInTheDocument();
    expect(screen.getByText(/1M\+ records/)).toBeInTheDocument();
    expect(screen.getByText(/test coverage/)).toBeInTheDocument();
  });
});
