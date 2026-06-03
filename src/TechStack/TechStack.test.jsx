import { render, screen } from "@testing-library/react";
import TechStack from "./TechStack";
import { skillCategories } from "../data/skills";

describe("TechStack Component", () => {
  it("renders without crashing", () => {
    render(<TechStack />);
  });

  it("renders the eyebrow label", () => {
    render(<TechStack />);
    expect(screen.getByText("02 — Skills")).toBeInTheDocument();
  });

  it("renders a category-title heading for every skill category in the data", () => {
    render(<TechStack />);
    skillCategories.forEach(({ category }) => {
      expect(
        screen.getByRole("heading", { name: category, level: 3 })
      ).toBeInTheDocument();
    });
  });
});
