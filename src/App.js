import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Components
import CoffeeList from "./components/CoffeeList";
import CoffeeDetail from "./components/CoffeeDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
  lightTheme: {
    mainColor: "#27282f",
    backgroundColor: "#a8b4c6",
    some: "#19477b",
    red: "#E12F21",
  },

  darkTheme: {
    mainColor: "#d0d1d5",
    backgroundColor: "#27282f",
    some: "#083358",
    red: "#E12F21",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path="/coffees/:coffeeSlug">
          <CoffeeDetail />
        </Route>
        <Route path="/coffees">
          <CoffeeList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
