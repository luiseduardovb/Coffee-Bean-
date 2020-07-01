import React from "react";

//Styling
import { CoffeeWraper, DeleteButtonStyled } from "../styles";

const CoffeeItem = (props) => {
  const handleDelete = () => {
    props.deleteCoffee(props.coffee.id);
  };

  return (
    <CoffeeWraper>
      <img alt={props.coffee.name} src={props.coffee.image} />
      <p>{props.coffee.name}</p>
      <p className="coffee-price">{props.coffee.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </CoffeeWraper>
  );
};

export default CoffeeItem;
