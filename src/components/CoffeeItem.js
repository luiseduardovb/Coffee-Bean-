import React from "react";
import { Link } from "react-router-dom";

//Componenets
import DeleteButton from "./buttons/DeleteButton";

//Styling
import { CoffeeWraper } from "../styles";

const CoffeeItem = (props) => {
  const coffee = props.coffee;

  return (
    <CoffeeWraper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/coffees/${coffee.slug}`}>
        <img alt={coffee.name} src={coffee.image} />
      </Link>
      <p>{coffee.name}</p>
      <p className="coffee-price">{coffee.price} KD</p>
      <DeleteButton coffeeId={coffee.id} deleteCoffee={props.deleteCoffee} />
    </CoffeeWraper>
  );
};

export default CoffeeItem;
