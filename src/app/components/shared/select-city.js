import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import ArrowDownIcon from "../../../../public/icons/arrow-down";
import clsx from "clsx";
import CrossIcon from "../../../../public/icons/cross";

export default function SelectCity({ city, setCity }) {
  const [filter, setFilter] = useState();
  const cities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Aswan",
    "Mansora",
    "Portsaid",
  ];

  const filteredCities = () => {
    if (filter) {
      return cities.filter((city) =>
        city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    } else {
      return cities;
    }
  };

  return (
    <div className="w-full">
      <Menu as="div" className="relative inline-block text-left w-full">
        {({ open }) => (
          <>
            <div className="w-full">
              <Menu.Button className="flex w-full items-center justify-between gap-3 px-2 bg-gray h-12 rounded-10 font-semibold">
                <span
                  className={clsx(!city && "text-grayAlterTwo font-normal")}
                >
                  {city ? city : "Select city"}
                </span>
                <soan
                  className={clsx(
                    "transition",
                    open ? "-rotate-180" : "rotate-0"
                  )}
                >
                  <ArrowDownIcon />
                </soan>
              </Menu.Button>
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
              <Menu.Items className="absolute space-y-1 w-full z-10 right-0 mt-2 p-2 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black/5 focus:outline-none max-h-[200px] overflow-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="default-input w-full !bg-white !h-10"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
                {filteredCities().map((instanceCity, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        onClick={() => setCity(instanceCity)}
                        className={clsx(
                          "font-medium group text-left flex w-full items-center rounded-md px-2 py-2 transition  ",
                          active ? "bg-grayAlter " : "text-primary",
                          instanceCity === city &&
                            "bg-grayAlter hover:bg-grayAlterTwo "
                        )}
                      >
                        {instanceCity}
                      </button>
                    )}
                  </Menu.Item>
                ))}

                {filteredCities().length === 0 && (
                  <div className="h-10 flex items-center justify-center gap-1 text-black">
                    <CrossIcon />
                    No such city
                  </div>
                )}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
