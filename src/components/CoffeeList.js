import React, { useState } from "react";

// Styling
import { ListWrapper } from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";
import SearchBar from "./SearchBar";

const CoffeeList = (props) => {
  const [query, setQuery] = useState("");

  const coffeeList = props.coffees
    .filter((coffee) => coffee.name.includes(query))
    .map((coffee) => (
      <CoffeeItem
        coffee={coffee}
        key={coffee.id}
        deleteCoffee={props.deleteCoffee}
        selectCoffee={props.selectCoffee}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{coffeeList}</ListWrapper>
    </>
  );
};

export default CoffeeList;
