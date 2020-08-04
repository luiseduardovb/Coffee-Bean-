import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Styling
import { CustomCol, VendorItemImage, VendorBox, StyledP } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <CustomCol>
      <VendorBox className="col">
        <Link to={`/vendors/${vendor.slug}`}>
          <VendorItemImage src={vendor.image} alt={vendor.name} />
        </Link>
        <StyledP>{vendor.name}</StyledP>
      </VendorBox>
    </CustomCol>
  );
};

export default observer(VendorItem);
