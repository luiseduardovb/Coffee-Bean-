import React from "react";
import { observer } from "mobx-react";

//Components
import SignupButton from "../buttons/SignupButton";
import SigninButton from "../buttons/SigninButton";

//Styling
import { Logo, NavItem, NavStyled, ThemeButton } from "./styles";
import lightlogo from "../../../src/light-logo.png";
import darklogo from "../../../src/dark-logo.png";
import authStore from "../../stores/authStore";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "light" ? lightlogo : darklogo}
          alt="light"
        />
      </Logo>
      <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <p>{`Heloo ${authStore.user.firstName}`}</p>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          {authStore.user && authStore.user.role === "admin" && (
            <>
              <NavItem className="nav-item" to="/vendors">
                Vendors
              </NavItem>
              <NavItem className="nav-item" to="/coffees">
                Coffees
              </NavItem>
            </>
          )}

          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeButton>
        </div>
      </ul>
    </NavStyled>
  );
};

export default observer(NavBar);
