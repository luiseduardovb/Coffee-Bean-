import React from "react";

const styles = {
  text: { textAlign: "center" },
  coffeeImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    marginBottom: "5%",
    width: "50%",
  },
};

function App() {
  return (
    <div>
      <div>
        <head>
          <title>Farm to Cup Coffee Toasters</title>
        </head>
      </div>
      <div>
        <h1 style={styles.text}>Specialty Coffee</h1>
        <h4 style={styles.text}> Farm to cup direct trade coffee toasters</h4>
        <img
          alt="coffee beans"
          src="https://cdn.shopify.com/s/files/1/1003/7044/files/roasted_coffee_beans_unroasted_coffee_beans_raw_coffee_beans_green_coffee_beans_coffee_roaster_large.jpg?v=1585924052"
          style={styles.coffeeImage}
        />
      </div>
      <div>
        <img
          alt="Honduran Coffee"
          src="https://www.mtwhitneycoffee.com/mm5/graphics/00000001/coffee-beans-in-jute-sack-31954160.jpg"
          style={styles.coffeeImage}
        />
        <p style={styles.text}>La Paz, Honduras. Organic Medium Roast</p>
        <p style={styles.text}>13 KD</p>
      </div>
      <div>
        <img
          alt="Guatemalan Coffee"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Coffee_beans2.jpg/220px-Coffee_beans2.jpg"
          style={styles.coffeeImage}
        />
        <p style={styles.text}>Antigua, Guatemala. Dark Roast</p>
        <p style={styles.text}>10 KD</p>
      </div>
      <div>
        <img
          alt="El Salvador Coffee"
          src="https://m.media-amazon.com/images/I/51FX+YpsHiL.jpg"
          style={styles.coffeeImage}
        />
        <p style={styles.text}>La Joya, El Salvador. Light Roast</p>
        <p style={styles.text}>11 KD</p>
      </div>
    </div>
  );
}

export default App;
