import React, { useEffect } from "react";
import styled from "styled-components";
// import Burger from "./Burger";
import Burger from "./burger.component";
// import alphaLight from "../../assets/nav-bar/alpha_light.png";
// import alphaDark from "../../assets/nav-bar/alpha_dark.png";
// import {handleSideBar} from './rightnav.component';
// import alphavector from "../../assets/nav-bar/alpha_vector.svg";
import alphacolor from "../../assets/nav-bar/alphacolor.svg";

// import themeStatus from "./rightnav.component";

const NavBase = styled.div`
  width: 100%;
  overflow: hidden;
  /* opacity: 1; */
  /* background: #212121; */
  /* background: ${(props) => (props.mode === "dark" ? "#212121" : "#111")}; */

  /* JSON.parse(localStorage.getItem("theme")).mode === 'dark' ? background: #212121 : background: #111 ; */

  height: 80px;
  /* background: white; */
  /* background: #212121; */
  display: flex;
  z-index: 1;
  /* position: fixed; */
  margin-bottom: unset;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;
  /* background: rgb(33, 33, 33); */
  /* background: rgb(255, 255, 255); */
  border-bottom: unset;
  /* padding-top: 0px; */
  /* height: 200px;
  margin-bottom: 500px; */
  /* position: fixed; */
  /* margin: 0 130px; */

  @media (max-width: 768px) {
    position: fixed;
  }
`;

const Nav = styled.nav`
  margin: auto;
  width: 80%;
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  display: flex;
  overflow: hidden;
  justify-content: space-between;

  /* div {
    display: flex;
  } */
`;

const LnN = styled.div`
  display: flex;

  .logo {
    /* padding: 15px 0px; */
    justify-content: start;
    margin-left: 15px;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
      margin-left: 5px;
    }
  }

  .icon {
    height: 50px;
    width: 70px;
    transition: 0.5s;
    /* height: auto;
    width: auto; */

    &:hover {
      transition: 0.5s;
      transform: rotate(360deg);
    }
    /* @media screen and (max-width: 500px) {
      height: 30px;
      width: 50px;
    } */
  }
`;

const Navbar = (props) => {
  // console.log(props);
  const { history, ...otherProps } = props;
  // console.log(history);
  // console.log(themeStatus);
  useEffect(() => {
    var themeStatus = localStorage.getItem("theme");
    console.log(JSON.parse(themeStatus).mode);
  });

  useEffect(() => {
    console.log(document.body.get);
  });

  // console.log(JSON.parse(localStorage.getItem("theme")).mode);

  // var themeData = localStorage.getItem("theme");
  // var themeStatus = JSON.parse(themeData);

  const ThemeContext = React.createContext(themes.light);

  return (
    <NavBase>
      <Nav>
        <LnN>
          <img
            className="icon"
            src={alphacolor}
            alt="logo"
            onClick={() => history.push("/")}
          />
          <h3 className="logo">PREETHAM.M.S</h3>
        </LnN>
        <Burger history={history} />
      </Nav>
    </NavBase>
  );
};

export default Navbar;
