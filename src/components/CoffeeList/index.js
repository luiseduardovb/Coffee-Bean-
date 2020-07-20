import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import AddButton from "../buttons/AddButton";
import CoffeeItem from "./CoffeeItem";
import SearchBar from "../SearchBar";

//Stores
import coffeeStore from "../../stores/coffeeStore";

// Styling
import { ListWrapper } from "./styles";

const CoffeeList = () => {
  const [query, setQuery] = useState("");

  const coffeeList = coffeeStore.coffees
    .filter((coffee) => coffee.name.toLowerCase().includes(query.toLowerCase()))
    .map((coffee) => <CoffeeItem coffee={coffee} key={coffee.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{coffeeList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(CoffeeList);
