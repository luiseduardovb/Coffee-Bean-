import React from "react";

//Styling
import styles from "../styles";

const CoffeeItem = (props) => {
  return (
    <div>
      <img
        src={props.coffee.image}
        alt={props.coffee.name}
        style={styles.coffeeImage}
      />
      <p style={styles.text}>{props.coffee.name}</p>
      <p style={styles.text}>{props.coffee.price} KD</p>
    </div>
  );
};

export default CoffeeItem;
