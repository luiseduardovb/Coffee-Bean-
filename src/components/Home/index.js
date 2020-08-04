import React from "react";

//Styling
import { Description, CoffeeImage } from "./styles";
import { Title } from "../../styles";

const Home = () => {
  return (
    <>
      <Title>Specialty Coffee</Title>
      <Description>Farm to Cup direct trade</Description>
      <CoffeeImage
        alt="coffee beans"
        src="https://www.ncausa.org/portals/56/Images/AboutCoffee/NCA_Web_Large_coffee-beans-history.png?ver=2018-02-28-115401-897"
      />
    </>
  );
};

export default Home;
