import React, { useState } from "react";
import Modal from "react-modal";
import { observer } from "mobx-react";
import { CreateButtonStyled } from "./styles";
import authStore from "../../stores/authStore";

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    closeModal();
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
      color: "#000000",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel="Example Modal"
    >
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
    </Modal>
  );
};

export default observer(SigninModal);
