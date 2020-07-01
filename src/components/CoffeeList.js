import React, { useState } from "react";

// Styling
import { ListWrapper } from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";

//Data
import coffees from "../coffees";

const CoffeeList = () => {
  const [_coffees, setCoffees] = useState(coffees);

  const deleteCoffee = (coffeeId) => {
    const updatedCoffees = _coffees.filter((coffee) => coffee.id !== +coffeeId);
    setCoffees(updatedCoffees);
  };

  const coffeeList = _coffees.map((coffee) => (
    <CoffeeItem coffee={coffee} key={coffee.id} deleteCoffee={deleteCoffee} />
  ));

  return <ListWrapper>{coffeeList}</ListWrapper>;
};

export default CoffeeList;
