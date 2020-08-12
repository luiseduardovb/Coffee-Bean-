import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import SignupButton from "../buttons/SignupButton";
import SigninButton from "../buttons/SigninButton";

//Styling
import { Logo, NavItem, NavStyled, ThemeButton } from "./styles";
import lightlogo from "../../../src/light-logo.png";
import darklogo from "../../../src/dark-logo.png";
import authStore from "../../stores/authStore";
import { FiLogOut } from "react-icons/fi";
import VendorModal from "../modals/VendorModal";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
            <>
              <p>{`Heloo ${authStore.user.firstName}`}</p>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
            </>
          ) : (
            <>
              <SigninButton to="/signin" />
              <SignupButton to="/signup" />
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

          {authStore.user && !authStore.user.vendorSlug && (
            <button onClick={openModal}>Create Vendor</button>
          )}
          <VendorModal isOpen={isOpen} closeModal={closeModal} />

          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeButton>
        </div>
      </ul>
    </NavStyled>
  );
};

export default observer(NavBar);
