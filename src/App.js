import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle, LoadingStyled } from "./styles";
import vendorStore from "./stores/vendorStore";
import coffeeStore from "./stores/coffeeStore";

const theme = {
  light: {
    mainColor: "#ffffff",
    backgroundColor: "#F64C72",
    some: "#19477b",
    red: "#E12F21",
    white: "#ffffff",
  },

  dark: {
    mainColor: "#ffffff",
    backgroundColor: "#1e2ca9",
    some: "#083358",
    red: "#E12F21",
    white: "#ffffff",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {vendorStore.loading || coffeeStore.loading ? (
        <LoadingStyled />
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
