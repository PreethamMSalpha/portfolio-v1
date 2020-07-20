import React from "react";

import "./footer.styles.scss";

import insta from "../../assets/footer/instagram.png";
import linkedIn from "../../assets/footer/linkedin.png";
import fb from "../../assets/footer/facebook.png";
import git from "../../assets/footer/github.png";
// import alpha from "../../assets/footer/logo_and_name@2x.png";
import alpha from "../../assets/footer/alpha_light@2x.png";
import alphaVector from "../../assets/footer/alpha_vector.svg";

const logoSize = {
  height: "25px",
  width: "25px",
};

function Logo(props) {
  return <img className="logos" src={props.name} alt="logo" style={logoSize} />;
}

// const Footer = (props) => (
//   <div className="footer">
//     <div className="center-div">
//       <div className="contents">
//         <div className="logo">
//           <img src={alphaVector} alt="logo" />
//           <p>PREETHAM.M.S</p>
//         </div>
//       </div>
//       <div className="contents">
//         <div className="routes">
//           <p onClick={() => props.history.push("/projects")}>Projects</p>
//           <p onClick={() => props.history.push("/skills")}>Skills</p>
//           <p onClick={() => props.history.push("/contact")}>Contact</p>
//         </div>
//       </div>
//       <div className="contents">
//         <div className="follow-up">
//           <p>Follow me on</p>
//           <div className="logos">
//             <Logo name={insta} />
//             <Logo name={fb} />
//             <Logo name={git} />
//             <Logo name={linkedIn} />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="copywrite">
//       <p>&#169;2020 - PREETHAM.M.S</p>
//     </div>
//   </div>
// );

const Footer = (props) => (
  <div className="footer">
    <div className="center-div">
      <div className="contents">
        <div className="logo">
          <img src={alphaVector} alt="logo" />
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
