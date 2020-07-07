import React from "react";
import { useHistory } from "react-router-dom";

//Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteCoffee(props.coffeeId);
    history.push("/coffees");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
