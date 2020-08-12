import React from "react";
import { useParams, Redirect } from "react-router";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";
import CoffeeList from "../CoffeeList";
import UpdateButton from "../buttons/UpdateButton";

//Stores
import vendorStore from "../../stores/vendorStore";

//Styling
import { DetailWrapper } from "./styles";
import DeleteButton from "../buttons/DeleteButton";
import coffeeStore from "../../stores/coffeeStore";
import authStore from "../../stores/authStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();

  if (!authStore.user) return <Redirect to="/signin" />;

  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );

  if (!vendor) return <Redirect to="/vendors" />;
  const coffees = vendor.coffees
    ? vendor.coffees
        .map((coffee) => coffeeStore.getCoffeeById(coffee.id))
        .filter((coffee) => coffee)
    : [];

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{vendor.name}</h4>
          <img src={vendor.image} alt={vendor.name} />
          <UpdateButton vendor={vendor} />
          <DeleteButton vendorId={vendor.id} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <CoffeeList coffees={coffees} />
        <AddButton vendor={vendor} />
      </div>
    </div>
  );
};

export default observer(VendorDetail);

/* <CoffeeList coffees={vendor.coffees ?? []} /> */
