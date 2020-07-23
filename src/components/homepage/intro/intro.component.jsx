import React from "react";
import { withRouter } from "react-router-dom";

import "./intro.styles.scss";

const Intro = (props) => {
  function handleButton() {
    props.history.push("/contact");
  }

  return (
    <div className="container">
      <h1>Hi! I'm Preetham</h1>
      <p>
        I'm a self-taught Full Stack JavaScript, Mobile App Developer and UI/UX
        Designer. Currently working as Freelancer. I'm studying Computer Science
        and Engineering in SJBIT, Bangalore. And I love building projects.
      </p>
      <button className="button" onClick={handleButton}>
        Get in touch
      </button>
    </div>
  );
};
export default withRouter(Intro);
