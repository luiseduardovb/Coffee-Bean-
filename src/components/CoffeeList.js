import React from "react";

// Styling
import { ListWrapper } from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";

const CoffeeList = (props) => {
  const coffeeList = props.coffees.map((coffee) => (
    <CoffeeItem
      coffee={coffee}
      key={coffee.id}
      deleteCoffee={props.deleteCoffee}
      selectCoffee={props.selectCoffee}
    />
  ));

  return <ListWrapper>{coffeeList}</ListWrapper>;
};

export default CoffeeList;
