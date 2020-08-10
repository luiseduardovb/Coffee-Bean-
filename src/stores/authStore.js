import { decorate, observable } from "mobx";

import instance from "./instance";

class AuthStore {
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;
