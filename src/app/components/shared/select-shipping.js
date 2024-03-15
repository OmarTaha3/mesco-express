"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import ArrowDownIcon from "../../../../public/icons/arrow-down";
import useShipment from "../../../store/client/shipment-slice";

const shippingType = [
  {
    id: 1,
    type: "garments",
  },
  {
    id: 2,
    type: "wood",
  },
  {
    id: 3,
    type: "glass",
  },
  {
    id: 4,
    type: "metal",
  },
  {
    id: 5,
    type: "paper",
  },
];

export default function SelectShipping() {
  const { shipment, changePackageShipping } = useShipment();
  const shipping = shipment.package.shipping;
  const [filter, setFilter] = useState();

  const filterShipping = () => {
    if (filter) {
      return shippingType.filter((shippingType) =>
        shippingType.type
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
    } else {
      return shippingType;
    }
  };
  return (
    <Listbox
      value={shipping}
      onChange={changePackageShipping}
      as="div"
      className="relative w-[365px]"
    >
      {({ open }) => (
        <>
          <div className="flex flex-col gap-2 items-start">
            <Listbox.Label className="text-black">
              What are you shipping
            </Listbox.Label>
            <Listbox.Button className="capitalize flex w-full items-center justify-between gap-3 px-2 bg-gray h-12 rounded-10 font-semibold">
              {shipping.type ? (
                shipping.type
              ) : (
                <span className="text-grayAlterTwo font-normal">Select</span>
              )}
              <span
                className={clsx(
                  "transition",
                  open ? "-rotate-180" : "rotate-0"
                )}
              >
                <ArrowDownIcon />
              </span>
            </Listbox.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute z-10 w-full space-y-1  max-h-[200px] overflow-auto bg-gray mt-2 p-1 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <input
                type="text"
                placeholder="Search..."
                className="default-input w-full !bg-white !h-10"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              {filterShipping().map((shippingType) => (
                <Listbox.Option
                  key={shippingType.id}
                  value={shippingType}
                  as="li"
                >
                  {({ active }) => (
                    <div
                      className={clsx(
                        "cursor-pointer p-2 rounded-md transition capitalize",
                        active && "bg-grayAlter",
                        shippingType.id === shipping.id && "bg-grayAlter"
                      )}
                    >
                      {shippingType.type}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
