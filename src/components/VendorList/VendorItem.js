import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Styling
import { CustomCol, VendorItemImage, VendorBox, StyledP } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <CustomCol className="col">
      <VendorBox className="container">
        <Link to={`/vendors/${vendor.slug}`}>
          <VendorItemImage src={vendor.image} alt={vendor.name} />
        </Link>
        <StyledP>{vendor.name}</StyledP>
      </VendorBox>
    </CustomCol>
  );
};

export default observer(VendorItem);
