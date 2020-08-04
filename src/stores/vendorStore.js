import { decorate, observable } from "mobx";
import axios from "axios";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const res = await axios.get("http://localhost:8000/vendors");
      this.vendors = res.data;
      this.loading = false;
    } catch (error) {
      console.error("VendorStore -> fetchVendors-> error", error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      //update in backend
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);
      await axios.put(
        `http://localhost:8000/vendors/${updatedVendor.id}`,
        formData
      );
      //update in frontend
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in updatedVendor) vendor[key] = updatedVendor[key];
      vendor.image = URL.createObjectURL(updatedVendor.image);
    } catch (error) {
      console.log("VendorStore -> updatedVendor-> error", error);
    }
  };

  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await axios.post("http://localhost:8000/vendors", formData);
      this.vendors.push({ ...res.data, coffees: [] }); // try to inderstand it
    } catch (error) {
      console.log("VendorStore -> createVendor -> error", error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      //delete in the backend
      await axios.delete(`http://localhost:8000/vendors/${vendorId}`);
      //delete in the frontend
      this.vendors = this.vendors.filter((vendor) => vendor.id !== vendorId);
    } catch (error) {
      console.log("VendorStore -> deleteVendor -> error", error);
    }
  };
}

decorate(VendorStore, {
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
