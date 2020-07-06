import React, { useState } from "react";

//Data
import coffees from "./coffees";

//Components
import CoffeeList from "./components/CoffeeList";
import CoffeeDetail from "./components/CoffeeDetail";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { Title, Description, CoffeeImage, ThemeButton } from "./styles";

const theme = {
  lightTheme: {
    mainColor: "#4aa6b5",
    backgroundColor: "#ecfafb",
    some: "#19477b",
    red: "#E12F21",
  },

  darkTheme: {
    mainColor: "#ecfafb",
    backgroundColor: "#4aa6b5",
    some: "#083358",
    red: "#E12F21",
  },
};

function App() {
  // const coffee = coffee[0];
  let [currentTheme, setCurrentTheme] = useState("lightTheme");
  const [coffee, setCoffee] = useState(null);
  const [_coffees, setCoffees] = useState(coffees);

  const deleteCoffee = (coffeeId) => {
    const updatedCoffees = _coffees.filter((coffee) => coffee.id !== coffeeId);
    setCoffees(updatedCoffees);
    setCoffee(null);
  };

  const selectCoffee = (coffeeId) => {
    const selectedCoffee = coffees.find((coffee) => coffee.id === coffeeId);
    setCoffee(selectedCoffee);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");

  const setView = () =>
    coffee ? (
      <CoffeeDetail coffee={coffee} deleteCoffee={deleteCoffee} />
    ) : (
      <CoffeeList
        coffees={_coffees}
        selectCoffee={selectCoffee}
        deleteCoffee={deleteCoffee}
      />
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "lightTheme" ? "Dark Mode" : "Light Mode"}
      </ThemeButton>
      <Title>Specialty Coffee</Title>
      <Description>Farm to Cup direct trade</Description>
      <CoffeeImage
        alt="coffee beans"
        src="https://cdn.shopify.com/s/files/1/1003/7044/files/roasted_coffee_beans_unroasted_coffee_beans_raw_coffee_beans_green_coffee_beans_coffee_roaster_large.jpg?v=1585924052"
      />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
