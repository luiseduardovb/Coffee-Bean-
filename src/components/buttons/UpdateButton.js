import React, { useState } from "react";

//Components
import CoffeeModal from "../modals/CoffeeModal";
import VendorModal from "../modals/VendorModal";

//Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ coffee, vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  console.log(coffee);
  return (
    <>
      <UpdateButtonStyled onClick={openModal} />
      {vendor ? (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <CoffeeModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldCoffee={coffee}
        />
      )}
    </>
  );
};

export default UpdateButton;
