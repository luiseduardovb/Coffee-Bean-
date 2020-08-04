import React, { useState } from "react";
import Modal from "react-modal";
import { observer } from "mobx-react";

//Stores
import vendorStore from "../../stores/vendorStore";

//Styling
import { CreateButtonStyled } from "./styles";

const VendorModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setVendor({ ...vendor, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setVendor({ ...vendor, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Vendor Modal"
    >
      <h3>New Vendor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="name"
            value={vendor.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            required
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled type="submit" className="btn float-right">
          {oldVendor ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default observer(VendorModal);
