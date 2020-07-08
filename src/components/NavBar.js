import React from "react";

//Styling
import { Logo, NavItem, NavStyled, ThemeButton } from "../styles";
import lightlogo from "../light-logo.png";
import darklogo from "../dark-logo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "lightTheme" ? lightlogo : darklogo}
          alt="lightlogo"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/coffees">
            Coffees
          </NavItem>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "lightTheme" ? "Dark Mode" : "Light Mode"}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
