import React from "react";

import "./homepage.styles.scss";

import SkillsHomepage from "./components/homepage/skills/skills.component";
import Intro from "./components/homepage/intro/into.component";
// import Header from "./components/header/header.component";
import NavBar from "./components/nav-bar/navbar.component";
import Footer from "./components/footer/footer.component";

const Homepage = () => (
  <div>
    <NavBar />
    <Intro />
    <SkillsHomepage />
    <Footer />
  </div>
);

export default Homepage;
