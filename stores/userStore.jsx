import { create } from "zustand";

const userStore = create((state) => ({
  LoginState: false,
}));

export default userStore;
