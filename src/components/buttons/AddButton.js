import React, { useState } from "react";

//Components
import CoffeeModal from "../modals/CoffeeModal";

//Styling
import { AddButtonStyled } from "./styles";

const AddButton = ({ createCoffee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddButtonStyled
        className="float-right"
        onClick={() => setIsOpen(true)}
      />
      <CoffeeModal
        isOpen={isOpen}
        closeModal={closeModal}
        createCoffee={createCoffee}
      />
    </>
  );
};

export default AddButton;
