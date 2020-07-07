import React from "react";

//Componenets
import DeleteButton from "./buttons/DeleteButton";

//Styling
import { DetailWrapper } from "../styles";

const CoffeeDetail = (props) => {
  const coffee = props.coffee;

  return (
    <div>
      <DetailWrapper>
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
