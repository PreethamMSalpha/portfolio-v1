import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import alphacolor from "../../assets/nav-bar/alphacolor.svg";

import sun from "../../assets/nav-bar/sun.svg";
import moon from "../../assets/nav-bar/moon.svg";

//navbar.styles**************************************************************************
const NavBase = styled.nav`
  width: 100%;
  overflow: hidden;

  height: 80px;
  display: flex;
  z-index: 1;
  margin-bottom: unset;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;
  border-bottom: unset;

  @media (max-width: 768px) {
    position: fixed;
  }
`;

const Nav = styled.nav`
  margin: auto;
  width: 80%;
  height: 55px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`;

const LnN = styled.div`
  display: flex;

  .logo {
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

    &:hover {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }
`;

//burger.styles**************************************************************************

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

//rightnav.styles**************************************************************************

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-direction: row;
  justify-content: end;
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
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#212121" : "#F9F9F9"};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: auto;
    width: wrap-fit-content;
    margin: 0px;
    padding: 55px 0px 0px 0px;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;

    li {
      color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
      padding: 20px;
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
       props.theme.mode === "dark" ? "#212121" : "#F9F9F9"};
     color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }
  nav{
      background: ${(props) =>
        props.theme.mode === "dark" ? "#212121" : "#F9F9F9"};
  }
  
`;

//rightsidenav.component**************************************************************************
function RightNav({ open, history }) {
  const [theme, setTheme] = useState({ mode: "dark" });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const [toggleIcon, setToggleIcon] = useState("sun");

  function toggle() {
    setToggleIcon(toggleIcon === "sun" ? "moon" : "sun");
  }

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

//burger.component**************************************************************************
const Burger = (props) => {
  // console.log(props);
  const { history } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} history={history} />
    </>
  );
};

/*//navbar.component**************************************************************************
 */
const Navbar = (props) => {
  const { history, ...otherProps } = props;
  useEffect(() => {
    var themeStatus = localStorage.getItem("theme");
    console.log(JSON.parse(themeStatus).mode);
  });

  useEffect(() => {
    console.log(document.body.get);
  });

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
