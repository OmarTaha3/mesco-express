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
    shipping: {},
    description: "",
    details: [
      {
        quantity: 1,
        weight: "",
        length: "",
        width: "",
        height: "",
      },
    ],
  },
  cashOnDelivery: {
    available: false,
    codAmount: "",
    currency: { id: 0, currency: "egyptian pound" },
  },
  shippingService: {
    date: "",
    time: "",
    specialInstructions: "",
  },
  openShipment: true,
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

  changePackageShipping: (shipping) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          shipping,
        },
      },
    })),

  changePackageDescription: (description) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          description,
        },
      },
    })),

  changePackageDetailsQuantity: (idx, quantity) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                quantity: quantity < 0 ? quantity * -1 : quantity,
              };
            } else {
              return item;
            }
          }),
        },
      },
    })),

  changePackageDetailsWeight: (idx, weight) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                weight: weight < 0 ? weight * -1 : weight,
              };
            } else {
              return item;
            }
          }),
        },
      },
    })),

  changePackageDetailsLength: (idx, length) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                length: length < 0 ? length * -1 : length,
              };
            } else {
              return item;
            }
          }),
        },
      },
    })),

  changePackageDetailsWidth: (idx, width) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                width: width < 0 ? width * -1 : width,
              };
            } else {
              return item;
            }
          }),
        },
      },
    })),

  changePackageDetailsHeight: (idx, height) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                height: height < 0 ? height * -1 : height,
              };
            } else {
              return item;
            }
          }),
        },
      },
    })),

  addAnotherPiece: () =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: [
            ...state.shipment.package.details,
            {
              quantity: 1,
              weight: "",
              length: "",
              width: "",
              height: "",
            },
          ],
        },
      },
    })),

  deleteAPiece: (idx) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        package: {
          ...state.shipment.package,
          details: state.shipment.package.details.filter(
            (_, index) => index !== idx
          ),
        },
      },
    })),

  toggleAddCashOnDelivery: () =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        cashOnDelivery: {
          ...state.shipment.cashOnDelivery,
          available: !state.shipment.cashOnDelivery.available,
        },
      },
    })),

  changeCODAmount: (codAmount) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        cashOnDelivery: {
          ...state.shipment.cashOnDelivery,
          codAmount,
        },
      },
    })),

  changeCurrency: (currency) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        cashOnDelivery: {
          ...state.shipment.cashOnDelivery,
          currency,
        },
      },
    })),

  changePickupDate: (date) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        shippingService: {
          ...state.shipment.shippingService,
          date,
        },
      },
    })),

  changePickupTime: (time) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        shippingService: {
          ...state.shipment.shippingService,
          time,
        },
      },
    })),

  changeSpecialInstructions: (specialInstructions) =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        shippingService: {
          ...state.shipment.shippingService,
          specialInstructions,
        },
      },
    })),

  toggleOpenShipment: () =>
    set((state) => ({
      shipment: {
        ...state.shipment,
        openShipment: !state.shipment.openShipment,
      },
    })),

  reset: () =>
    set(() => ({
      shipment: initialShipment,
    })),
}));

export default useShipment;
