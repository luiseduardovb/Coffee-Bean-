import React from "react";

// Styling
import styles from "../styles";

// Components
import CoffeeItem from "./CoffeeItem";

//Data
import coffees from "../coffees";

const CoffeeList = () => {
  const coffeeList = coffees.map((coffee) => (
    <CoffeeItem coffee={coffee} key={coffees.id} />
  ));

  return <div style={styles.styles}>{coffeeList}</div>;
};

export default CoffeeList;
