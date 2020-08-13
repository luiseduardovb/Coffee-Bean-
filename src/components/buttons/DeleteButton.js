import React from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

//Stores
import coffeeStore from "../../stores/coffeeStore";
import vendorStore from "../../stores/vendorStore";

//Styling
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ coffeeId, vendorId }) => {
  const handleDelete = async () => {
    if (coffeeId) {
      coffeeStore.deleteCoffee(coffeeId);
    } else {
      await vendorStore.deleteVendor(vendorId);
      authStore.user.vendorSlug = null;
    }
  };

  return <DeleteButtonStyled onClick={handleDelete} />;
};

export default observer(DeleteButton);
