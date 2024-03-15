"use client";
import SelectShipmentType from "./select-shipment-type";
import Separetor from "../separator";
import ShippingAddress from "./shipping-address";
import useShipment from "../../../../store/client/shipment-slice";
import PackageInfo from "./package-info";
import CashOnDelivery from "./cash-on-delivery";
import ShippingService from "./shipment-service";
import Checkbox from "../checkbox";
import Button from "../button";
import { useRouter } from "next/navigation";
import ConfirmationModal from "./confirmation-modal";
import { useState } from "react";

export default function ShipmentForm() {
  const router = useRouter();
  const { shipment, switchShipperWithReciever, toggleOpenShipment, reset } =
    useShipment();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(shipment);
  };

  const handleCancelForm = () => {
    reset();
    router.push("/");
  };

  return (
    <form
      onSubmit={onSubmit}
      id='shipment-form'
      className="w-full grid grid-cols-[800px_1fr] items-start gap-14"
    >
      <div className="space-y-8  mb-10 ">
        <h1 className="title sticky top-[112px] z-50 bg-white">New Shipment</h1>
        <SelectShipmentType />
        <Separetor />
        <ShippingAddress type="From" />
        <div className="relative">
          <Separetor />
          <button
            type="button"
            onClick={switchShipperWithReciever}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[140px] flex items-center justify-center h-8 bg-blueLighter rounded-10"
          >
            Switch
          </button>
        </div>
        <ShippingAddress type="To" />
        <Separetor />
        <PackageInfo />
        <Separetor />
        <CashOnDelivery />
        <Separetor />
        <ShippingService />
        <Separetor />
        <div className="flex items-center gap-3">
          <Checkbox
            id="open-shipment"
            checked={shipment.openShipment}
            onChange={toggleOpenShipment}
          />
          <label htmlFor="open-shipment" className="cursor-pointer text-black">
            Allow to open shipment
          </label>
        </div>
      </div>
      <div className="sticky top-[112px] bg-white w-full">
        <h3 className="font-semibold mb-4">Actions</h3>
        <Button
          onClick={handleCancelForm}
          type="button"
          className="mb-4 w-full justify-center text-black"
        >
          Cancel
        </Button>
        <ConfirmationModal />
      </div>
    </form>
  );
}
