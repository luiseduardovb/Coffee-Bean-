import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import coffees from "../coffees";

class CoffeeStore {
  coffees = coffees;

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

  deleteCoffee = (coffeeId) => {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== coffeeId);
  };
}

decorate(CoffeeStore, { coffees: observable });

const coffeeStore = new CoffeeStore();

export default coffeeStore;
