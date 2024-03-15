"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import ArrowDownIcon from "../../../../public/icons/arrow-down";

const addresses = [
  {
    id: 1,
    displayedAddress: " Chicago, IL 60612, United States",
    fullAddress: "2550 W Madison St, Chicago, IL 60612, United States",
  },
  {
    id: 2,
    displayedAddress: " Chicago, IL 60612, United States",
    fullAddress: "2550 W Madison St, Chicago, IL 60612, United States",
  },
  {
    id: 3,
    displayedAddress: " Chicago, IL 60612, United States",
    fullAddress: "2550 W Madison St, Chicago, IL 60612, United States",
  },
  {
    id: 4,
    displayedAddress: " Chicago, IL 60612, United States",
    fullAddress: "2550 W Madison St, Chicago, IL 60612, United States",
  },
  {
    id: 5,
    displayedAddress: " Chicago, IL 60612, United States",
    fullAddress: "2550 W Madison St, Chicago, IL 60612, United States",
  },
];

export default function SelectAddress({
  label,
  selectedAddress,
  setSelectedAddress,
}) {
  const [filter, setFilter] = useState();

  const filterAddress = () => {
    if (filter) {
      return addresses.filter((address) =>
        address.displayedAddress
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
    } else {
      return addresses;
    }
  };

  return (
    <Listbox
      value={selectedAddress}
      onChange={setSelectedAddress}
      as="div"
      className="relative w-[365px]"
    >
      {({ open }) => (
        <>
          <div className="flex flex-col gap-2 items-start">
            <Listbox.Label className="text-black">{label}</Listbox.Label>
            <Listbox.Button className="capitalize flex w-full items-center justify-between gap-3 px-2 bg-gray h-12 rounded-10 font-semibold">
              {selectedAddress.displayedAddress ? (
                selectedAddress.displayedAddress
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
              {filterAddress().map((address) => (
                <Listbox.Option key={address.id} value={address} as="li">
                  {({ active }) => (
                    <div
                      className={clsx(
                        "cursor-pointer p-2 rounded-md transition capitalize",
                        active && "bg-grayAlter",
                        selectedAddress.id === address.id && "bg-grayAlter"
                      )}
                    >
                      {address.displayedAddress}
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
