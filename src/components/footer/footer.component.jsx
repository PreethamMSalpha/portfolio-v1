import React from "react";

import "./footer.styles.scss";

import insta from "../../assets/footer/instagram.png";
import linkedIn from "../../assets/footer/linkedin.png";
import fb from "../../assets/footer/facebook.png";
import git from "../../assets/footer/github.png";
import alphaVector from "../../assets/footer/alpha_vector.svg";

const logoSize = {
  height: "25px",
  width: "25px",
};

function Logo(props) {
  return (
    <a href={props.link}>
      <img className="logos" src={props.name} alt="logo" style={logoSize} />
    </a>
  );
}

const Footer = (props) => (
  <div className="footer">
    <div className="center-div">
      <div className="contents">
        <div className="logo">
          <img
            src={alphaVector}
            alt="logo"
            onClick={() => props.history.push("/")}
          />
          <p>PREETHAM.M.S</p>
        </div>
        <div className="routes">
          <p onClick={() => props.history.push("/projects")}>Projects</p>
          <p onClick={() => props.history.push("/skills")}>Skills</p>
          <p onClick={() => props.history.push("/contact")}>Contact</p>
        </div>
        <div className="follow-up">
          <p>Follow me on</p>
          <div className="logos">
            <Logo
              name={insta}
              link={"https://www.instagram.com/always__the__alpha/"}
            />
            <Logo name={fb} link={"https://www.facebook.com/preethamalphams"} />
            <Logo name={git} link={"https://github.com/PreethamMSalpha"} />
            <Logo
              name={linkedIn}
              link={"https://www.linkedin.com/in/preethamms/"}
            />
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
