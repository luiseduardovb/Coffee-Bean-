import React, { useState } from "react";

//Components
import CoffeeList from "./components/CoffeeList";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { Title, Description, CoffeeImage, ThemeButton } from "./styles";

const theme = {
  lightTheme: {
    mainColor: "#8b104e",
    backgroundColor: "#f69314",
    blue: "#ab0e86",
  },

  darkTheme: {
    mainColor: "#f69314",
    backgroundColor: "#8b104e",
    blue: "#ab0e86",
  },

  alternateTheme: {
    mainColor: "#94fc13",
    backgroundColor: "#f7ff56",
    blue: "#ab0e86",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("lightTheme");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");

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
      <CoffeeList />
    </ThemeProvider>
  );
}

export default App;
