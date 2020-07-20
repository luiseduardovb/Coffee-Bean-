import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CoffeeStore {
  coffees = [];

  fetchCoffees = async () => {
    try {
      const res = await axios.get("http://localhost:8000/coffees");
      this.coffees = res.data;
    } catch (error) {
      console.error("CoffeeStore -> fetchCoffees-> error", error);
    }
  };

  updateCoffee = (updatedCoffee) => {
    const coffee = this.coffees.find(
      (coffee) => coffee.id === updatedCoffee.id
    );
    for (const key in coffee) coffee[key] = updatedCoffee[key];
  };

  createCoffee = (newCoffee) => {
    newCoffee.id = this.coffees[this.coffees.length - 1].id + 1;
    newCoffee.slug = slugify(newCoffee.name);
    this.coffees.push(newCoffee);
  };

  deleteCoffee = async (coffeeId) => {
    try {
      await axios.delete(`http://localhost:8000/coffees/${coffeeId}`);
      this.coffees = this.coffees.filter((coffee) => coffee.id !== coffeeId);
    } catch (error) {
      console.log("CoffeeStore -> deleteCoffee -> error", error);
    }
  };
}

decorate(CoffeeStore, { coffees: observable });

const coffeeStore = new CoffeeStore();
coffeeStore.fetchCoffees();

export default coffeeStore;
