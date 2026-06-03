import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import About from "./About/About";
import TechStack from "./TechStack/TechStack";
import ProjectSect from "./Projects/ProjectSect";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import useTheme from "./hooks/useTheme";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <header>
        <Nav theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main className="App">
        <Main theme={theme} />
        <About />
        <TechStack />
        <ProjectSect />
        <Education />
        <Contact />
      </main>
      <footer>
        <code>Anthony Clark Perfecto @{new Date().getFullYear()}</code>
      </footer>
    </div>
  );
};

export default App;
