import React, { useState } from "react";

//Components
import CoffeeModal from "../modals/CoffeeModal";

//Styling
import { AddButtonStyled } from "./styles";
import VendorModal from "../modals/VendorModal";

const AddButton = ({ vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddButtonStyled
        className="float-right"
        onClick={() => setIsOpen(true)}
      />
      {vendor ? (
        <CoffeeModal isOpen={isOpen} closeModal={closeModal} vendor={vendor} />
      ) : (
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
