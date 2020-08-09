import React from "react";

//Components
import SignupButton from "../buttons/SignupButton";

//Styling
import { Logo, NavItem, NavStyled, ThemeButton } from "./styles";
import lightlogo from "../../../src/light-logo.png";
import darklogo from "../../../src/dark-logo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "light" ? lightlogo : darklogo}
          alt="light"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/vendors">
            Vendors
          </NavItem>
          <NavItem className="nav-item" to="/coffees">
            Coffees
          </NavItem>
          <SignupButton />
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
