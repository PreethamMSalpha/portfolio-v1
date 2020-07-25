import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Homepage from "./homepage.component";
import Projects from "./components/projects/projects.component";
import Knowledge from "./components/skills-knowledge/skills-knowledge.components";
import Contact from "./components/contact/contact.component";
import Navbar from "./components/nav-bar/navbarCombined.component";
import Footer from "./components/footer/footer.component";

const DemoPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/projects">projects</Link>
      <button onClick={() => props.history.push("/projects")}>projects</button>
      <h1>Demo Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/demo" component={DemoPage} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Knowledge} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
