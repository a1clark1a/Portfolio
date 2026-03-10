import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import About from "./About/About";
import ProjectSect from "./Projects/ProjectSect";
import "./App.css";

const App = () => {
  return (
    <div>
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <header id="home">
        <Nav />
      </header>
      <main className="App">
        <Main />
        <About />
        <ProjectSect />
      </main>
      <footer>
        <code>Anthony Clark Perfecto @{new Date().getFullYear()}</code>
      </footer>
    </div>
  );
};

export default App;
