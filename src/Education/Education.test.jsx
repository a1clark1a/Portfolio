import { render, screen } from "@testing-library/react";
import Education from "./Education";

describe("Education Component", () => {
  it("renders without crashing", () => {
    render(<Education />);
  });

  it("renders the section heading and eyebrow", () => {
    render(<Education />);
    expect(
      screen.getByRole("heading", { name: "Education", level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText("04 — Education")).toBeInTheDocument();
  });

  it("renders both degrees with their schools", () => {
    render(<Education />);
    expect(screen.getByText(/Computer Science & Visual/)).toBeInTheDocument();
    expect(screen.getByText(/Art Institute of California/)).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Web Development")).toBeInTheDocument();
    expect(screen.getByText(/Thinkful/)).toBeInTheDocument();
  });

  it("exposes the #education anchor for in-page navigation", () => {
    const { container } = render(<Education />);
    expect(container.querySelector("section#education")).toBeInTheDocument();
  });
});
