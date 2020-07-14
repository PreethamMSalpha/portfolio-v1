import React from "react";

import "./footer.styles.scss";

import insta from "../../assets/footer/instagram.png";
import linkedIn from "../../assets/footer/linkedin.png";
import fb from "../../assets/footer/facebook.png";
import git from "../../assets/footer/github.png";

const logoSize = {
  height: "20px",
  width: "20px",
};

function Logo(props) {
  return <img className="logos" src={props.name} alt="logo" style={logoSize} />;
}

const Footer = () => (
  <div className="footer">
    <div className="center-div">
      <div className="contents">
        <div className="logo">
          <h3>PREETHAM.M.S</h3>
        </div>
        <div className="routes">
          <p>Projects</p>
          <p>Skills</p>
          <p>Contact</p>
        </div>
        <div className="follow-up">
          <p>Follow me on</p>
          <div className="logos">
            <Logo name={insta} />
            <Logo name={fb} />
            <Logo name={git} />
            <Logo name={linkedIn} />
          </div>
        </div>
      </div>
    </div>
    <div className="copywrite">
      <p>&#169;2020 - PREETHAM.M.S</p>
    </div>
  </div>
);

export default Footer;
