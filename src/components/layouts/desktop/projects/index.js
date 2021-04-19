import React from "react";
import { AboutContent } from "../../../contents/about";
import ProjectCard from "./projectCards";
import ProjectContainer from "./projectContainer";
import "./projectStyles.css";

function Projects({ viewstate }) {
  return (
    <>
      <ProjectContainer viewstate={viewstate}>
        {AboutContent.projects.map((project) => (
          <ProjectCard data={project} viewstate={viewstate} key={project.id} />
        ))}

        <div style={{ height: "5rem" }} />
      </ProjectContainer>
    </>
  );
}

export default Projects;
