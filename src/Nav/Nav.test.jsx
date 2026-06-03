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

  it("hides the menu on mobile until the hamburger is clicked", () => {
    Object.defineProperty(window, "innerWidth", { value: 500, writable: true });
    render(<Nav />);
    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Home")).not.toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("shows the menu by default on desktop widths", () => {
    Object.defineProperty(window, "innerWidth", { value: 1024, writable: true });
    render(<Nav />);
    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("treats exactly 800px as desktop so there is no dead zone at the breakpoint", () => {
    // CSS (min-width:800) hides the hamburger at 800px; the JS must therefore
    // render the links at 800px, or the user would see neither control.
    Object.defineProperty(window, "innerWidth", { value: 800, writable: true });
    render(<Nav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
