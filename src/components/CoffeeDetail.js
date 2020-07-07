import React from "react";
import { Link, useParams } from "react-router-dom";

//Componenets
import DeleteButton from "./buttons/DeleteButton";

//Styling
import { DetailWrapper } from "../styles";

const CoffeeDetail = (props) => {
  const { coffeeId } = useParams();

  const coffee = props.coffees.find((coffee) => coffee.id === +coffeeId);

  return (
    <div>
      <DetailWrapper>
        <Link to="/coffees">
          <p>Back to Coffees</p>
        </Link>
        <h1>{coffee.name}</h1>
        <img src={coffee.image} alt={coffee.name} />
        <p>{coffee.description}</p>
        <p>{coffee.price}</p>
        <DeleteButton coffeeId={coffee.id} deleteCoffee={props.deleteCoffee} />
      </DetailWrapper>
    </div>
  );
};

export default CoffeeDetail;
