import { create } from "zustand";

const useActiveTap = create((set) => ({
  activeTap: "shipments",
  setTapShipments: () => set(() => ({ activeTap: "shipments" })),
  setTapAddress: () => set(() => ({ activeTap: "address" })),
}));

export default useActiveTap