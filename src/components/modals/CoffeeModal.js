import React, { useState } from "react";
import Modal from "react-modal";
import { observer } from "mobx-react";

//Stores
import coffeeStore from "../../stores/coffeeStore";

//Styling
import { CreateButtonStyled } from "./styles";

const CoffeeModal = ({ isOpen, closeModal, oldCoffee, vendor }) => {
  const [coffee, setCoffee] = useState(
    oldCoffee ?? {
      vendorId: vendor.id,
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCoffee({ ...coffee, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCoffee({ ...coffee, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    coffeeStore[oldCoffee ? "updateCoffee" : "createCoffee"](coffee, vendor);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h3>New Coffee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              value={coffee.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              type="number"
              min="1"
              className="form-control"
              name="price"
              value={coffee.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            type="text"
            className="form-control"
            name="description"
            value={coffee.description}
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
          {oldCoffee ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default observer(CoffeeModal);
