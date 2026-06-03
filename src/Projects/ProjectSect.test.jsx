import { render, screen, fireEvent } from "@testing-library/react";
import ProjectSect from "./ProjectSect";

// ProjectSect reads window.innerWidth to swap the compact tab label at <600px.
const setWidth = (value) =>
  Object.defineProperty(window, "innerWidth", { value, writable: true });

describe("ProjectSect Component", () => {
  it("renders the eyebrow and section heading", () => {
    setWidth(1024);
    render(<ProjectSect />);
    expect(screen.getByText("03 — Work")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Experience & Projects/ })
    ).toBeInTheDocument();
  });

  it("renders the three category tabs", () => {
    setWidth(1024);
    render(<ProjectSect />);
    expect(screen.getAllByRole("tab")).toHaveLength(3);
  });

  it("shows the full 'Experience' label on wide viewports", () => {
    setWidth(1024);
    render(<ProjectSect />);
    expect(screen.getByRole("tab", { name: "Experience" })).toBeInTheDocument();
  });

  it("shows the compact 'Exp' label below the 600px breakpoint", () => {
    setWidth(500);
    render(<ProjectSect />);
    expect(screen.getByRole("tab", { name: "Exp" })).toBeInTheDocument();
    expect(
      screen.queryByRole("tab", { name: "Experience" })
    ).not.toBeInTheDocument();
  });

  it("activates a tab on click via aria-selected", () => {
    setWidth(1024);
    render(<ProjectSect />);
    const fullStack = screen.getByRole("tab", { name: "Full Stack" });
    expect(fullStack).toHaveAttribute("aria-selected", "false");
    fireEvent.click(fullStack);
    expect(fullStack).toHaveAttribute("aria-selected", "true");
  });
});
