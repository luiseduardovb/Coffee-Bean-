import React from "react";

//Components
import CoffeeList from "./components/CoffeeList";

//Styling
import styles from "./styles";

function App() {
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

      <CoffeeList />
    </div>
  );
}

export default App;
