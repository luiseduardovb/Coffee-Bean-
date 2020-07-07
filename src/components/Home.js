import React from "react";

//Styling
import { Title, Description, CoffeeImage } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Specialty Coffee</Title>
      <Description>Farm to Cup direct trade</Description>
      <CoffeeImage
        alt="coffee beans"
        src="https://cdn.shopify.com/s/files/1/1003/7044/files/roasted_coffee_beans_unroasted_coffee_beans_raw_coffee_beans_green_coffee_beans_coffee_roaster_large.jpg?v=1585924052"
      />
    </>
  );
};

export default Home;
