import { decorate, observable } from "mobx";
import instance from "./instance";

class CoffeeStore {
  coffees = [];
  loading = true;

  fetchCoffees = async () => {
    try {
      const res = await instance.get("/coffees");
      this.coffees = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CoffeeStore -> fetchCoffees-> error", error);
    }
  };

  getCoffeeById = (coffeeId) => {
    return this.coffees.find((coffee) => coffee.id === coffeeId);
  };

  updateCoffee = async (updatedCoffee) => {
    try {
      //update in backend
      const formData = new FormData();
      for (const key in updatedCoffee) formData.append(key, updatedCoffee[key]);
      await instance.put(`/coffees/${updatedCoffee.id}`, formData);
      //update in frontend
      const coffee = this.coffees.find(
        (coffee) => coffee.id === updatedCoffee.id
      );
      for (const key in formData) coffee[key] = updatedCoffee[key];
      coffee.image = URL.createObjectURL(updatedCoffee.image);
    } catch (error) {
      console.log("CoffeeStore -> updatedCoffee-> error", error);
    }
  };

  createCoffee = async (newCoffee, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newCoffee) formData.append(key, newCoffee[key]);
      const res = await instance.post(
        `/vendors/${vendor.id}/coffees`,
        formData
      );
      const coffee = res.data;
      this.coffees.push(coffee);
      vendor.coffees.push(coffee);
    } catch (error) {
      console.log("CoffeeStore -> createCoffee -> error", error);
    }
  };

  deleteCoffee = async (coffeeId) => {
    try {
      //delete in the backend
      await instance.delete(`/coffees/${coffeeId}`);
      //delete in the frontend
      this.coffees = this.coffees.filter((coffee) => coffee.id !== coffeeId);
    } catch (error) {
      console.log("CoffeeStore -> deleteCoffee -> error", error);
    }
  };
}

decorate(CoffeeStore, {
  coffees: observable,
  loading: observable,
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchCoffees();

export default coffeeStore;
