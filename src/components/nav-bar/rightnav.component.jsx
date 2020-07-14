import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import sun from "../../assets/nav-bar/sun.svg";
import moon from "../../assets/nav-bar/moon.svg";

// const sun = require("../../assets/nav-bar/sun.svg");
// const moon = require("../../assets/nav-bar/moon.svg");
// const icon = { sun, moon };

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-direction: row;
  justify-content: end;
  li {
    padding: 0 10px;
  }
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0d2538; */
    background-image: linear-gradient(0deg, #4085d6 0%, #2bb2bb 100%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: wrap-fit-content;
    margin: 0px;
    padding: 40px 0px;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      padding: 20px;
      justify-content: center;
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
       props.theme.mode === "dark" ? "#2B2A2A" : "#EEE"};
     color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};

  }

  
  

 
`;

function RightNav({ open }) {
  const [theme, setTheme] = useState({ mode: "dark" });
  const [toggleIcon, setToggleIcon] = useState("sun");

  function toggle() {
    setToggleIcon(toggleIcon === "sun" ? "moon" : "sun");
    console.log(toggleIcon);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Ul open={open}>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
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

export default RightNav;

// nav{

//   background-color: ${(props) =>
//     props.theme.mode === "dark" ? "#212121" : "#EEE"};

// }
