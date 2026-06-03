import { render, screen } from "@testing-library/react";
import Main from "./Main";

// Mock the particles engine — Main drives tsParticles.load() directly.
vi.mock("@tsparticles/engine", () => ({
  tsParticles: { load: () => Promise.resolve({ destroy: () => {} }) },
}));
vi.mock("@tsparticles/slim", () => ({
  loadSlim: () => Promise.resolve(),
}));

describe("Main Component", () => {
  it("renders without crashing", () => {
    render(<Main />);
  });

  it("renders the introduction heading", () => {
    render(<Main />);
    expect(screen.getByText(/I'm Clark Perfecto/)).toBeInTheDocument();
  });

  it("renders the eyebrow label", () => {
    render(<Main />);
    expect(screen.getByText("Software Engineer · Full Stack")).toBeInTheDocument();
  });

  it("renders the headshot moved into the hero", () => {
    render(<Main />);
    expect(
      screen.getByAltText("Anthony Clark Perfecto headshot")
    ).toBeInTheDocument();
  });

  it("renders the call-to-action button", () => {
    render(<Main />);
    expect(screen.getByText("Get to know me")).toBeInTheDocument();
  });

  it("has an accessible section label", () => {
    render(<Main />);
    expect(screen.getByLabelText("Introduction")).toBeInTheDocument();
  });
});
