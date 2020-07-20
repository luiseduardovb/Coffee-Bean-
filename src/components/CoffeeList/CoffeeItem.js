import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Componenets
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Styling
import { CoffeeWraper } from "./styles";

const CoffeeItem = ({ coffee }) => {
  return (
    <CoffeeWraper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/coffees/${coffee.slug}`}>
        <img alt={coffee.name} src={coffee.image} />
      </Link>
      <p>{coffee.name}</p>
      <p className="coffee-price">{coffee.price} KD</p>
      <UpdateButton coffee={coffee} />
      <DeleteButton coffeeId={coffee.id} />
    </CoffeeWraper>
  );
};

export default observer(CoffeeItem);
