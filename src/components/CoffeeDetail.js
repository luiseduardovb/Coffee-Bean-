import React from "react";

//Styling
import { DeleteButtonStyled, DetailWrapper } from "../styles";

const CoffeeDetail = (props) => {
  const coffee = props.coffee;

  const handleDelete = () => {
    props.deleteCoffee(coffee.id);
  };

  return (
    <DetailWrapper>
      <h1>{coffee.name}</h1>
      <img src={coffee.image} alt={coffee.name} />
      <p>{coffee.description}</p>
      <p>{coffee.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default CoffeeDetail;
