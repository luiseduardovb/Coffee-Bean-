import React from "react";
import { Link } from "react-router-dom";

//Components
import { AuthButtonStyled } from "./styles";

const SignupButton = () => {
  return (
    <>
      <Link to="/signup">
        <AuthButtonStyled>Sign Up</AuthButtonStyled>
      </Link>
    </>
  );
};

export default SignupButton;
