"use client";
import React, { useState } from "react";
import SelectShipmentType from "./select-shipment-type";
import Separetor from "../separator";
import ShippingAddress from "./shipping-address";
import useShipment from "../../../../store/client/shipment-slice";

export default function ShipmentForm() {
  const { shipment, switchShipperWithReciever } = useShipment();

  console.log(shipment);
  return (
    <form className="w-full flex items-start justify-between ">
      <div className="space-y-8 w-[770px]">
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
      </div>
      <div className="sticky top-[112px] bg-white">actions</div>
    </form>
  );
}
