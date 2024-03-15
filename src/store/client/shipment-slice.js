import { create } from "zustand";

const initialShipment = {
  type: "domestic",
  shipper: {
    contact: {},
    address: {},
  },
  receiver: {
    contact: {},
    address: {},
  },
  package: {
    shipping: "",
    description: "",
    details: [{ weight: "", length: "", width: "", height: "" }],
  },
  cashOnDelivery: {
    available: false,
    codAmount: "",
    currency: "egyptian pound",
  },
  shippingService: {
    date: "",
    time: "",
    specialInstructions: "",
  },
};

export const useShipment = create((set) => ({
  shipment: initialShipment,
  changeType: (type) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        type,
      },
    })),

  changeShipperContact: (contact) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        shipper: {
          ...state.shipment.shipper,
          contact,
        },
      },
    })),

  changeShipperAddress: (address) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        shipper: {
          ...state.shipment.shipper,
          address,
        },
      },
    })),

  changeReceiverContact: (contact) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        receiver: {
          ...state.shipment.receiver,
          contact,
        },
      },
    })),

  changeReceiverAddress: (address) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        receiver: {
          ...state.shipment.receiver,
          address,
        },
      },
    })),

  switchShipperWithReciever: () =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        receiver: {
          contact: state.shipment.shipper.contact,
          address: state.shipment.shipper.address,
        },
        shipper: {
          contact: state.shipment.receiver.contact,
          address: state.shipment.receiver.address,
        },
      },
    })),
}));

export default useShipment;
