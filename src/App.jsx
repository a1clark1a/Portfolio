import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import About from "./About/About";
import ProjectSect from "./Projects/ProjectSect";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
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
  }
}

export default App;
