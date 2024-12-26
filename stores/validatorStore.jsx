import { create } from "zustand";

const validatorStore = create((set, get) => ({
  accountValidator: (storedRole, mustRole, router) => {
    if (storedRole !== mustRole) {
      router.push("/");
    }
  },
}));

export default validatorStore;
