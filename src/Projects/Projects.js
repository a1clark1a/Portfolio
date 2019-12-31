import React, { Component } from "react";
import RenderedProjectList from "./RenderedProjectList";
import { ProjectList } from "./ProjectList";
import "./Projects.css";

export default class Projects extends Component {
  state = {
    projects: ProjectList[0]["Web Project"]
  };

  handleProjectToRender = proj => {
    this.setState({
      projects: proj
    });
  };

  render() {
    const proj_keys = ProjectList.map(proj => Object.keys(proj));
    const proj_tab = ProjectList.map((proj, i) => {
      return (
        <button
          key={`button_${i}`}
          value={i}
          onClick={e => this.handleProjectToRender(proj[proj_keys[i]])}
        >
          <span>{proj_keys[i]}</span>
        </button>
      );
    });
    const { projects } = this.state;
    return (
      <section className="projects_sect" id="projects">
        <div className="proj_wrapper">
          <div className="tab_wrapper">{proj_tab}</div>
          <RenderedProjectList projectList={projects} />
        </div>
      </section>
    );
  }
}
