import React from "react";
import { observer } from "mobx-react";
//Stores
import coffeeStore from "../../stores/coffeeStore";

//Styling
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ coffeeId }) => {
  const handleDelete = () => {
    coffeeStore.deleteCoffee(coffeeId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
