import React from "react";
import { Route, Switch } from "react-router";

//Components
import CoffeeDetail from "../CoffeeDetail";
import CoffeeList from "../CoffeeList";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";

//Stores
import coffeeStore from "../../stores/coffeeStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/coffees/:coffeeSlug">
        <CoffeeDetail />
      </Route>
      <Route path="/coffees">
        <CoffeeList coffees={coffeeStore.coffees} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
