import React from "react";

//Styling
import { CoffeeWraper } from "../styles";

const CoffeeItem = (props) => {
  return (
    <CoffeeWraper>
      <img alt={props.coffee.name} src={props.coffee.image} />
      <p>{props.coffee.name}</p>
      <p className="coffee-price">{props.coffee.price} KD</p>
    </CoffeeWraper>
  );
};

export default CoffeeItem;
