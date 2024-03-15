import { create } from "zustand";
const useSelectedShipments = create((set) => ({
  selectedShipments: [],
  toggleShipment: (id) =>
    set((state) => ({
      selectedShipments: state.selectedShipments.includes(id)
        ? state.selectedShipments.filter((shipmentId) => shipmentId !== id)
        : [...state.selectedShipments, id],
    })),
  reset: () => set(() => ({ selectedShipments: [] })),
}));

export default useSelectedShipments;
