import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Componenets
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Stores
import coffeeStore from "../../stores/coffeeStore";

//Styling
import {
  DescriptionWrapper,
  DetailWrapper,
  ImageWrapper,
  NameWrapper,
  PriceWrapper,
  UpdateWrapper,
} from "./styles";
import { BackButtonStyled } from "../buttons/styles";

const CoffeeDetail = () => {
  const { coffeeSlug } = useParams();

  const coffee = coffeeStore.coffees.find(
    (coffee) => coffee.slug === coffeeSlug
  );

  if (!coffee) return <Redirect to="/coffees" />;

  return (
    <div>
      <DetailWrapper className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <Link to="/coffees">
                <BackButtonStyled />
              </Link>
            </div>
            <ImageWrapper src={coffee.image} alt={coffee.name} />
            <div className="row">
              <div className="col">
                <DeleteButton coffeeId={coffee.id} />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <NameWrapper className="row">
              <h3>{coffee.name}</h3>
              <UpdateWrapper className="col">
                <UpdateButton coffee={coffee} />
              </UpdateWrapper>
            </NameWrapper>
            <DescriptionWrapper className="row">
              <p>{coffee.description}</p>
            </DescriptionWrapper>
            <PriceWrapper className="row">
              <p>{`Price: ${coffee.price} KD `}</p>
            </PriceWrapper>
          </div>
        </div>
      </DetailWrapper>
    </div>
  );
};

export default observer(CoffeeDetail);
