import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("renders without crashing", () => {
    render(<Nav />);
  });

  it("renders the navigation element with correct aria-label", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    // Set wide viewport so links are visible
    Object.defineProperty(window, "innerWidth", { value: 1024, writable: true });
    render(<Nav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  it("renders toggle button with correct aria attributes", () => {
    render(<Nav />);
    const toggleButton = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-expanded");
  });

  it("toggles navigation on button click", () => {
    Object.defineProperty(window, "innerWidth", { value: 600, writable: true });
    render(<Nav />);
    const toggleButton = screen.getByRole("button", { name: "Toggle navigation menu" });

    // On mobile, nav starts closed
    fireEvent.click(toggleButton);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
