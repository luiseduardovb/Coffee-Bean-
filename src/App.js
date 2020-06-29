import React from "react";

// Data
import items from "./items";

//Styling
import styles from "./styles";

function App() {
  const itemsList = items.map((item) => (
    <div style={styles.item} key={items.id}>
      <img style={styles.coffeeImage} alt={items.name} src={item.image} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 style={styles.text}>Specialty Coffee</h1>
        <h4 style={styles.text}> Farm to cup direct trade coffee toasters</h4>
        <img
          alt="coffee beans"
          src="https://cdn.shopify.com/s/files/1/1003/7044/files/roasted_coffee_beans_unroasted_coffee_beans_raw_coffee_beans_green_coffee_beans_coffee_roaster_large.jpg?v=1585924052"
          style={styles.coffeeImage}
        />
      </div>

      <div>{itemsList}</div>
    </div>
  );
}

export default App;
