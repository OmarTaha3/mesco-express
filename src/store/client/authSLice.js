import { create } from "zustand";

const useAuth = create((set) => ({
  auth: false,
  login: () => set(() => ({ auth: true })),
  logout: () => set(() => ({ auth: false })),
}));

export default useAuth;
