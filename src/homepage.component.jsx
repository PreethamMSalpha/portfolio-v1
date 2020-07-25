import React from "react";

import "./homepage.styles.scss";

import SkillsHomepage from "./components/homepage/skills/skills.component";
import Intro from "./components/homepage/intro/intro.component";

const Homepage = () => (
  <div>
    <Intro />
    <SkillsHomepage />
  </div>
);

export default Homepage;
