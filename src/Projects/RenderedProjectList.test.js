import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RenderedProjectlist from "./RenderedProjectList";
import ProjectList from "./ProjectList";

describe("RendedredProjectList component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenderedProjectlist />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the first project by default", () => {
    const wrapper = shallow(<RenderedProjectlist projectList={ProjectList} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("It Renders given no projects", () => {
    const wrapper = shallow(<RenderedProjectlist />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
