import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project";
import { ProjectList } from "./ProjectList";

describe("Project Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Project />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
