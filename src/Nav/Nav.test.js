import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("Nav renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Nav />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
