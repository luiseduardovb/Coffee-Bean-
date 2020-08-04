import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import CoffeeItem from "./CoffeeItem";
import SearchBar from "../SearchBar";

// Styling
import { ListWrapper } from "./styles";

const CoffeeList = ({ coffees = [] }) => {
  const [query, setQuery] = useState("");

  const coffeeList = coffees
    .filter((coffee) => coffee.name.toLowerCase().includes(query.toLowerCase()))
    .map((coffee) => <CoffeeItem coffee={coffee} key={coffee.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{coffeeList}</ListWrapper>
    </div>
  );
};

export default observer(CoffeeList);
