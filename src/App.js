import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link, useHistory } from "react-router-dom";

//Data
import coffees from "./coffees";

//Components
import CoffeeList from "./components/CoffeeList";
import CoffeeDetail from "./components/CoffeeDetail";
import Home from "./components/Home";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";

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
  let [currentTheme, setCurrentTheme] = useState("lightTheme");

  const [_coffees, setCoffees] = useState(coffees);

  const deleteCoffee = (coffeeId) => {
    const updatedCoffees = _coffees.filter((coffee) => coffee.id !== coffeeId);
    setCoffees(updatedCoffees);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Link to="/coffees" style={{ margin: 10, float: "right" }}>
        Cookies
      </Link>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "lightTheme" ? "Dark Mode" : "Light Mode"}
      </ThemeButton>
      <Switch>
        <Route path="/coffees/:coffeeId">
          <CoffeeDetail coffees={_coffees} deleteCoffee={deleteCoffee} />
        </Route>
        <Route path="/coffees">
          <CoffeeList coffees={_coffees} deleteCoffee={deleteCoffee} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
