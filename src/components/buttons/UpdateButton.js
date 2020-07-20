import React, { useState } from "react";

//Components
import CoffeeModal from "../modals/CoffeeModal";

//Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ coffee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CoffeeModal isOpen={isOpen} closeModal={closeModal} oldCoffee={coffee} />
    </>
  );
};

export default UpdateButton;
