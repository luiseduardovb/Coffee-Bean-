import React from "react";

// Styling
import { ListWrapper } from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";

//Data
import coffees from "../coffees";

const CoffeeList = () => {
  const coffeeList = coffees.map((coffee) => (
    <CoffeeItem coffee={coffee} key={coffees.id} />
  ));

  return <ListWrapper>{coffeeList}</ListWrapper>;
};

export default CoffeeList;
