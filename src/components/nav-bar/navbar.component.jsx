import React from "react";
import styled from "styled-components";
import Burger from "./burger.component";
import alphacolor from "../../assets/nav-bar/alphacolor.svg";

const NavBase = styled.div`
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

const Navbar = (props) => {
  const { history, ...otherProps } = props;

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
