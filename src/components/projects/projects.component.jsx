import React, { useState } from "react";
import "./projects.style.scss";

import Data from "./projects.data.jsx";

function ProjectTile({ id, title, description, git, deploy }) {
  return (
    <div className="border">
      <h3>{title}</h3>
      <p>{description}</p>
      {git ? <a href={git}>source code</a> : ""}
      {deploy ? <a href={deploy}>deployed link</a> : " "}
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState(Data);
  return (
    <div className="projects">
      <div className="col-sections">
        <h1>Projects</h1>
        <div className="project-component">
          {projects.items.map(({ id, title, description, git, deploy }) => (
            <ProjectTile
              key={id}
              title={title}
              description={description}
              git={git}
              deploy={deploy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
