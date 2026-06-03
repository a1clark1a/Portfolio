import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the particles library to avoid initialization in tests
// (tsParticles v4: named Particles + ParticlesProvider)
vi.mock("@tsparticles/react", () => ({
  __esModule: true,
  Particles: () => null,
  ParticlesProvider: ({ children }) => children,
}));
vi.mock("@tsparticles/slim", () => ({
  loadSlim: () => Promise.resolve(),
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the navigation", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the footer with current year", () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
  });

  it("renders skip-to-content link", () => {
    render(<App />);
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  it("renders main sections", () => {
    render(<App />);
    expect(screen.getByText(/I'm Clark Perfecto/)).toBeInTheDocument();
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    expect(screen.getByText(/Let's get in touch/)).toBeInTheDocument();
  });
});
