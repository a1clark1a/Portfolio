import React from "react";
import "./RenderedProjectList.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RenderedProjectList(props) {
  console.log(props.projectList);
  const projList_render = props.projectList.map((proj, i) => {
    const str = Object.values(proj.img)[0];
    console.log(proj.description);
    return (
      <Carousel.Item key={`proj_${i}`} className="proj_box">
        <a href={proj.link} target="_blank" rel="noopener noreferrer">
          <img src={str} className="d-block w-100 img" alt={`${proj.name}`} />
        </a>
      </Carousel.Item>
    );
  });
  return (
    <div className="proj_content">
      <div className="carousel_wrapper">
        <Carousel>{projList_render}</Carousel>
      </div>
    </div>
  );
}
