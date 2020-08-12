import React from "react";
import { Link } from "react-router-dom";
import { AuthButtonStyled } from "./styles";

const SigninButton = () => {
  return (
    <>
      <Link to="/signin">
        <AuthButtonStyled>Sign in</AuthButtonStyled>
      </Link>
    </>
  );
};

export default SigninButton;
