"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import ArrowDownIcon from "../../../../public/icons/arrow-down";

const currencies = [
  {
    id: 1,
    currency: "egyptian pound",
  },
  {
    id: 2,
    currency: "euro",
  },
  {
    id: 3,
    currency: "dollar",
  },
];

export default function SelectCurrency({
  label,
  selectedCurrency,
  setSelectedCurrency,
}) {
  const [filter, setFilter] = useState();

  const filterAddress = () => {
    if (filter) {
      return currencies.filter((instanceCurrency) =>
        instanceCurrency.currency
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
    } else {
      return currencies;
    }
  };

  return (
    <Listbox
      value={selectedCurrency}
      onChange={setSelectedCurrency}
      as="div"
      className="relative"
    >
      {({ open }) => (
        <>
          <div className="flex flex-col gap-1 items-start">
            <Listbox.Label className="text-black">{label}</Listbox.Label>
            <Listbox.Button className="capitalize flex w-full items-center justify-between gap-3 px-2 bg-gray h-12 rounded-10 font-semibold">
              {selectedCurrency.currency ? (
                selectedCurrency.currency
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
              {filterAddress().map((instanceCurrency) => (
                <Listbox.Option
                  key={instanceCurrency.id}
                  value={instanceCurrency}
                  as="li"
                >
                  {({ active }) => (
                    <div
                      className={clsx(
                        "cursor-pointer p-2 rounded-md transition capitalize",
                        active && "bg-grayAlter",
                        selectedCurrency.id === instanceCurrency.id &&
                          "bg-grayAlter"
                      )}
                    >
                      {instanceCurrency.currency}
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
