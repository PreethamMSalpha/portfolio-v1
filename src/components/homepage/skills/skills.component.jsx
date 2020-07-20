import React from "react";

import "./skills.styles.scss";
import web from "../../../assets/homepage/undraw_developer_activity_bv83.svg";
import ui from "../../../assets/homepage/undraw_responsive_6c8s.svg";
import app from "../../../assets/homepage/undraw_develop_app_kvt2.svg";

function SkillContainer(props) {
  const { image, title } = props;
  return (
    <div className="skills-col">
      <img src={image} alt="logo" className="img-size" />
      <p className="title">{title}</p>
    </div>
  );
}

const SkillsHomepage = () => (
  <div className="skills">
    <h1>Skills</h1>

    <div className="skill-content">
      <SkillContainer image={web} title="Full Stack Development" />
      <SkillContainer image={ui} title="UI/UX design" />
      <SkillContainer image={app} title="Mobile App Development" />
    </div>
  </div>
);

export default SkillsHomepage;
