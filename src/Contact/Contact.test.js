import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Component", () => {
  it("renders without crashing", () => {
    render(<Contact />);
  });

  it("renders the heading", () => {
    render(<Contact />);
    expect(screen.getByText(/Let's get in touch/)).toBeInTheDocument();
  });

  it("renders LinkedIn link with aria-label", () => {
    render(<Contact />);
    const linkedinLink = screen.getByLabelText("Visit LinkedIn profile");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/acperfecto/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders email link with aria-label", () => {
    render(<Contact />);
    const emailLink = screen.getByLabelText("Send email");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });

  it("renders GitHub link with aria-label", () => {
    render(<Contact />);
    const githubLink = screen.getByLabelText("Visit GitHub profile");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/a1clark1a");
  });

  it("renders contact icons", () => {
    render(<Contact />);
    expect(screen.getByAltText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByAltText("Email")).toBeInTheDocument();
    expect(screen.getByAltText("GitHub")).toBeInTheDocument();
  });
});
