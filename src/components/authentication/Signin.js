import React, { useState } from "react";
import { observer } from "mobx-react";
import { CreateButtonStyled } from "./styles";
import authStore from "../../stores/authStore";
import { Redirect } from "react-router";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  if (authStore.user)
    return (
      <Redirect
        to={
          authStore.user.vendorSlug
            ? `/vendors/${authStore.user.vendorSlug}`
            : "/"
        }
      />
    );

  return (
    <>
      <h3>Signin</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Sign In
        </CreateButtonStyled>
      </form>
    </>
  );
};

export default observer(Signin);
