import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { connect } from "react-redux";

import sun from "../../assets/nav-bar/sun.svg";
import moon from "../../assets/nav-bar/moon.svg";

// const sun = require("../../assets/nav-bar/sun.svg");
// const moon = require("../../assets/nav-bar/moon.svg");
// const icon = { sun, moon };

const Ul = styled.ul`
  list-style: none;
  display: flex;
  /* display: block; */
  flex-flow: row nowrap;
  flex-direction: row;
  justify-content: end;
  /* height: 100%; */
  li {
    padding: 0 10px;
    cursor: pointer;
  }
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0d2538; */
    /* background-image: linear-gradient(0deg, #4085d6 0%, #2bb2bb 100%); */
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2B2A2A" : "#F9F9F9"};
    position: fixed;
    /* position: absolute; */
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    /* height: 100vh; */
    height: auto;
    width: wrap-fit-content;
    margin: 0px;
    padding: 40px 0px 0px 0px;
    /* padding-top: 40px; */
    z-index: 1;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;

    li {
      /* color: #fff; */
      /* color: black; */
      color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
      padding: 20px;
      /* padding: 20px 0px 0px 0px; */
      justify-content: center;
      cursor: pointer;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body{
     background-color: ${(props) =>
       props.theme.mode === "dark" ? "#2B2A2A" : "#F9F9F9"};
     color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
      
  }

  
  
  

 
`;

function RightNav({ open, history }) {
  // const { history } = history;
  // console.log(history);
  // console.log(open);
  const sideBar = open;
  const [burger, setBurger] = useState(sideBar);
  const [theme, setTheme] = useState({ mode: "dark" });

  const [toggleIcon, setToggleIcon] = useState("sun");

  function toggle() {
    setToggleIcon(toggleIcon === "sun" ? "moon" : "sun");
  }

  function handleClicks() {
    setBurger(!burger);
    console.log(burger);
    // history.push(`/${route}`);
    // open = false;
  }
  // <li onClick={() => history.push("/")}>Home</li>
  // <Ul open={open}>
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Ul open={open}>
        <li onClick={() => history.push("/")}>Home</li>
        <li onClick={() => history.push("/projects")}>Projects</li>
        <li onClick={() => history.push("/skills")}>Skills</li>
        <li onClick={() => history.push("/contact")}>Contact</li>
        <li onClick={toggle}>
          <img
            alt="icon"
            src={toggleIcon === "sun" ? sun : moon}
            onClick={() =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          />
        </li>
      </Ul>
    </ThemeProvider>
  );
}

export default withRouter(RightNav);

// using - redux
// const mapStateToProps = (state) => ({
//   open: state.sidebar.open,
// });

// export default connect(mapStateToProps)(withRouter(RightNav));
