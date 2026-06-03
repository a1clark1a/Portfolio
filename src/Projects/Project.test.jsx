import { render, screen } from "@testing-library/react";
import Project from "./Project";

const experienceProps = {
  name: "Test Company",
  link: "https://example.com",
  subtitle: "A test company subtitle",
  bullets: ["Test bullet content"],
  tools: "React · Node.js",
  renderedProject: "Experience",
  date: "Jan 2024 - Present",
  title: "Software Engineer",
};

const projectProps = {
  name: "Test Project",
  imgPc: "test-pc.png",
  imgMobile: "test-mobile.png",
  showMobile: false,
  link: "https://example.com",
  description: "A test project description",
  position: "left",
  stack: [],
  client: "https://github.com/test/client",
  server: "https://github.com/test/server",
  renderedProject: "Web Project",
};

describe("Project Component", () => {
  describe("Experience mode", () => {
    it("renders experience card with job title", () => {
      render(<Project {...experienceProps} />);
      expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });

    it("renders company name and date", () => {
      render(<Project {...experienceProps} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
      expect(screen.getByText(/Jan 2024 - Present/)).toBeInTheDocument();
    });

    it("renders the subtitle, bullets, and tools footer", () => {
      render(<Project {...experienceProps} />);
      expect(screen.getByText("A test company subtitle")).toBeInTheDocument();
      expect(screen.getByText("Test bullet content")).toBeInTheDocument();
      expect(screen.getByText(/React · Node.js/)).toBeInTheDocument();
    });
  });

  describe("Project mode", () => {
    it("renders project name", () => {
      render(<Project {...projectProps} />);
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("renders client and server repo links", () => {
      render(<Project {...projectProps} />);
      expect(screen.getByText("Client Repo")).toBeInTheDocument();
      expect(screen.getByText("Server Repo")).toBeInTheDocument();
    });

    it("renders project description", () => {
      render(<Project {...projectProps} />);
      expect(screen.getByText("A test project description")).toBeInTheDocument();
    });

    it("renders GitHub Repo label for non-web projects", () => {
      render(<Project {...projectProps} renderedProject="Game Project" />);
      expect(screen.getByText("Github Repo")).toBeInTheDocument();
    });
  });
});
