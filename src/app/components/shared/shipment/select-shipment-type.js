"use client";
import { RadioGroup } from "@headlessui/react";
import Button from "../button";
import clsx from "clsx";
import { useShipment } from "../../../../store/client/shipment-slice";

export default function SelectShipmentType() {
  const { shipment, changeType } = useShipment();
  const shipmentTypes = ["domestic", "international", "exchange", "return"];

  return (
    <RadioGroup value={shipment.type} onChange={changeType}>
      <RadioGroup.Label as="h3" className="font-semibold mb-5">
        Shipment Type
      </RadioGroup.Label>
      <div className="flex items-center gap-4">
        {shipmentTypes.map((shipmentType, index) => (
          <RadioGroup.Option key={index} value={shipmentType}>
            {({ checked }) => (
              <Button
                type="button"
                onClick={() => {}}
                className={clsx(
                  "!font-normal text-black capitalize transition",
                  checked ? "bg-primary text-white " : ""
                )}
              >
                {shipmentType}
              </Button>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
