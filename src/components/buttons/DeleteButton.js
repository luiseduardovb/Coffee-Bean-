import React from "react";
import { observer } from "mobx-react";
//Stores
import coffeeStore from "../../stores/coffeeStore";
import vendorStore from "../../stores/vendorStore";

//Styling
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ coffeeId, vendorId }) => {
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
    } else {
      coffeeStore.deleteCoffee(coffeeId);
    }
  };

  return <DeleteButtonStyled onClick={handleDelete} />;
};

export default observer(DeleteButton);
