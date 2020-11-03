import React from "react";
import { Container } from "react-bootstrap";
import Project from "../components/Project";
import projectsArr from "../projects.json";

function Projects(props) {
  return (
    <Container>
      {projectsArr.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          image={item.image}
          link={item.link}
          git={item.git}
          id="project"
        />
      ))}
    </Container>
  );
}

export default Projects;
