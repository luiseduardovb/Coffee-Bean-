import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";
import SearchBar from "../SearchBar";

//Stores
import vendorStore from "../../stores/vendorStore";
// Styles

import { Main, PageContent, PageTitle, VendorsInfoRow } from "./styles";
import VendorItem from "./VendorItem";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);
  return (
    <Main>
      <PageContent>
        <SearchBar setQuery={setQuery} />
        <PageTitle>Vendors</PageTitle>
        <VendorsInfoRow className="row">{vendorList}</VendorsInfoRow>
        <AddButton />
      </PageContent>
    </Main>
  );
};

export default observer(VendorList);
