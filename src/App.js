import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import About from "./About/About";
import Projects from "./Projects/Projects";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header id="home">
          <Nav />
        </header>
        <main className="App">
          <Main />
          <About />
          <Projects />
        </main>
        <footer>
          <code>Anthony Clark Perfecto @2019</code>
        </footer>
      </>
    );
  }
}

export default App;
