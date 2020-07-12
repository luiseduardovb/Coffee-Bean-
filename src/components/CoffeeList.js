import React, { useState } from "react";

// Components
import AddButton from "./buttons/AddButton";
import CoffeeItem from "./CoffeeItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

const CoffeeList = ({ coffees, createCoffee, deleteCoffee }) => {
  const [query, setQuery] = useState("");

  const coffeeList = coffees

    .filter((coffee) => coffee.name.toLowerCase().includes(query.toLowerCase()))
    .map((coffee) => (
      <CoffeeItem coffee={coffee} key={coffee.id} deleteCoffee={deleteCoffee} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{coffeeList}</ListWrapper>
      <AddButton createCoffee={createCoffee} />
    </div>
  );
};

export default CoffeeList;
