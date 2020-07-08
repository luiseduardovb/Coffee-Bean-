import React, { useState } from "react";

// Styling
import { ListWrapper } from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";
import SearchBar from "./SearchBar";

const CoffeeList = (props) => {
  const [query, setQuery] = useState("");

  const coffeeList = props.coffees

    .filter((coffee) => coffee.name.toLowerCase().includes(query.toLowerCase()))
    .map((coffee) => (
      <CoffeeItem
        coffee={coffee}
        key={coffee.id}
        deleteCoffee={props.deleteCoffee}
        selectCoffee={props.selectCoffee}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{coffeeList}</ListWrapper>
    </div>
  );
};

export default CoffeeList;
