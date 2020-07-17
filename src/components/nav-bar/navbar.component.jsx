import React from "react";
import styled from "styled-components";
// import Burger from "./Burger";
import Burger from "./burger.component";

const NavBase = styled.div`
  width: 100%;
  overflow: hidden;
  /* opacity: 1; */
  /* background: #212121; */
  height: 80px;
  /* background: white; */
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
`;

const Nav = styled.nav`
  margin: auto;
  width: 80%;
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  display: flex;
  overflow: hidden;
  justify-content: space-between;

  .logo {
    /* padding: 15px 0px; */
    justify-content: start;
  }
`;

const Navbar = (props) => {
  // console.log(props);
  const { history, ...otherProps } = props;
  // console.log(history);
  return (
    <NavBase>
      <Nav>
        <div>
          <h3 className="logo">PREETHAM.M.S</h3>
        </div>
        <Burger history={history} />
      </Nav>
    </NavBase>
  );
};

export default Navbar;
