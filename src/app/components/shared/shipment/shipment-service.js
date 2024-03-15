import DatePicker from "react-date-picker";
import useShipment from "../../../../store/client/shipment-slice";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { RadioGroup } from "@headlessui/react";
import Button from "../button";
import clsx from "clsx";

export default function ShippingService() {
  const {
    shipment,
    changePickupDate,
    changePickupTime,
    changeSpecialInstructions,
  } = useShipment();
  return (
    <div>
      <h3 className="font-semibold mb-5">Shipping Service</h3>
      <div className="flex flex-col items-start w-fit">
        <div className="flex gap-10 text-black">
          <div className="flex flex-col gap-1 itmes-start">
            <p>Pickup date</p>
            <DatePicker
              value={shipment.shippingService.date}
              onChange={changePickupDate}
              className="default-input [&>div]:border-none w-full [&>div]:w-full [&>div]:grow-0"
            />
          </div>
          <RadioGroup
            value={shipment.shippingService.time}
            onChange={changePickupTime}
          >
            <RadioGroup.Label as="h3" className="mb-1">
              Pickup Time
            </RadioGroup.Label>
            <div className="flex items-center gap-4">
              <RadioGroup.Option value="09:00 AM - 12:00 PM">
                {({ checked }) => (
                  <Button
                    type="button"
                    className={clsx(
                      "!font-normal text-black capitalize transition",
                      checked ? "bg-primary text-white " : ""
                    )}
                  >
                    09:00 AM - 12:00 PM
                  </Button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="12:00 PM - 04:00 PM">
                {({ checked }) => (
                  <Button
                    type="button"
                    className={clsx(
                      "!font-normal text-black capitalize transition",
                      checked ? "bg-primary text-white " : ""
                    )}
                  >
                    12:00 PM - 04:00 PM
                  </Button>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-5 flex flex-col gap-1 w-full">
          <label htmlFor="special" className="text-black">
            Special Instructions
          </label>
          <input
            type="text"
            id="special"
            className="default-input w-full"
            placeholder="Add the details here"
            value={shipment.shippingService.specialInstructions}
            onChange={(e) => changeSpecialInstructions(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
