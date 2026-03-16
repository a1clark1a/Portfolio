import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  it("renders without crashing", () => {
    render(<About />);
  });

  it("renders the headshot image with alt text", () => {
    render(<About />);
    expect(screen.getByAltText("Anthony Clark Perfecto headshot")).toBeInTheDocument();
  });

  it("renders the bio description", () => {
    render(<About />);
    expect(screen.getByText(/Full Stack Engineer with 5\+ years/)).toBeInTheDocument();
  });

  it("renders the Contact section", () => {
    render(<About />);
    expect(screen.getByText(/Let's get in touch/)).toBeInTheDocument();
  });

  it("renders the TechStack section", () => {
    render(<About />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
  });
});
