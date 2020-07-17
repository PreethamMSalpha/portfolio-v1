import React from "react";
import "./projects.style.scss";

function ProjectTile() {
  return (
    <div className="border">
      <h3>Project Title</h3>
      <p>Project desc</p>
      <button>Link</button>
      <button>Link</button>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <div className="col-sections">
        <h1>Projects</h1>
        <div className="filter">
          <li>All</li>
          <li>Web</li>
          <li>Mob</li>
        </div>
        <div className="project-component">
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
      </div>
    </div>
  );
}

export default Projects;
