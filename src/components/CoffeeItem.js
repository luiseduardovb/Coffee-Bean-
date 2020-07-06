import React from "react";

//Styling
import { CoffeeWraper, DeleteButtonStyled } from "../styles";

const CoffeeItem = (props) => {
  const coffee = props.coffee;

  const handleDelete = () => {
    props.deleteCoffee(coffee.id);
  };

  const handleSelect = () => {
    props.selectCoffee(coffee.id);
  };

  return (
    <CoffeeWraper>
      <img alt={coffee.name} src={coffee.image} onClick={handleSelect} />
      <p>{coffee.name}</p>
      <p className="coffee-price">{coffee.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </CoffeeWraper>
  );
};

export default CoffeeItem;
