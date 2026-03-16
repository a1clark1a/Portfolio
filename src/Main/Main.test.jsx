import { render, screen } from "@testing-library/react";
import Main from "./Main";

// Mock the particles library
vi.mock("@tsparticles/react", () => ({
  __esModule: true,
  default: () => null,
  initParticlesEngine: () => Promise.resolve(),
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

  it("renders the title", () => {
    render(<Main />);
    expect(screen.getByText(/Software Engineer \| Full Stack/)).toBeInTheDocument();
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
