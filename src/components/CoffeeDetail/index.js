import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Componenets
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Stores
import coffeeStore from "../../stores/coffeeStore";

//Styling
import { DetailWrapper } from "./styles";

const CoffeeDetail = () => {
  const { coffeeSlug } = useParams();

  const coffee = coffeeStore.coffees.find(
    (coffee) => coffee.slug === coffeeSlug
  );

  if (!coffee) return <Redirect to="/coffees" />;

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
        <UpdateButton coffee={coffee} />
        <DeleteButton coffeeId={coffee.id} />
      </DetailWrapper>
    </div>
  );
};

export default observer(CoffeeDetail);
