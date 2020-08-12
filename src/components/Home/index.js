import React from "react";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

//Styling
import { Description, CoffeeImage } from "./styles";
import { Title } from "../../styles";

const Home = () => {
  if (!authStore.user) return <Redirect to="/signin" />; // redirect when i add page with both modals
  if (authStore.user.vendorSlug)
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
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

export default observer(Home);
