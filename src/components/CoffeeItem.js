import React from "react";

//Componenets
import DeleteButton from "./buttons/DeleteButton";

//Styling
import { CoffeeWraper } from "../styles";

const CoffeeItem = (props) => {
  const coffee = props.coffee;

  const handleSelect = () => {
    props.selectCoffee(coffee.id);
  };

  return (
    <CoffeeWraper>
      <img alt={coffee.name} src={coffee.image} onClick={handleSelect} />
      <p>{coffee.name}</p>
      <p className="coffee-price">{coffee.price} KD</p>
      <DeleteButton coffeeId={coffee.id} deleteCoffee={props.deleteCoffee} />
    </CoffeeWraper>
  );
};

export default CoffeeItem;
