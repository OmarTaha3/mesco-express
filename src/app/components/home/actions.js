import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ArrowDownIcon from "../../../../public/icons/arrow-down";
import clsx from "clsx";

export default function Actions() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="flex items-center gap-3 px-6 bg-gray h-12 rounded-10 font-semibold">
                Actions{" "}
                <div
                  className={clsx(
                    "transition",
                    open ? "-rotate-180" : "rotate-0"
                  )}
                >
                  <ArrowDownIcon />
                </div>
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
              <Menu.Items className="absolute z-10 right-0 mt-2 p-2 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black/5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={clsx(
                        "font-medium group text-left flex w-full items-center rounded-md px-2 py-2 transition  whitespace-nowrap",
                        active ? "bg-grayAlter " : "text-primary"
                      )}
                    >
                      Request Pickup
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={clsx(
                        "font-medium group text-left flex w-full items-center rounded-md px-2 py-2 transition  ",
                        active ? "bg-grayAlter " : "text-primary"
                      )}
                    >
                      Print
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={clsx(
                        "font-medium group text-left text-red flex w-full items-center rounded-md px-2 py-2 transition  ",
                        active ? "bg-grayAlter " : ""
                      )}
                    >
                      Cancel
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
