"use client";
import React, { Fragment, useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Listbox, Transition } from "@headlessui/react";
import ArrowDownIcon from "../../../../public/icons/arrow-down";
import clsx from "clsx";

export default function SelectStatus({ selectedStatus, setSelectedStatus }) {
  const status = [
    { id: 0, name: "unsubmitted", num: 14 },
    { id: 1, name: "pending pickup", num: 22 },
    { id: 2, name: "picked up ", num: 13 },
    { id: 3, name: "in transit", num: 8 },
    { id: 4, name: "delivered", num: 5 },
    { id: 5, name: "canceled", num: 0 },
    { id: 6, name: "city", num: 20 },
    { id: 7, name: "status", num: 15 },
    { id: 8, name: "date", num: 17 },
    { id: 9, name: "favorite", num: 12 },
  ];

  const handleOnChange = (statu) => {
    if (selectedStatus.some((item) => item.id === statu.id)) {
      setSelectedStatus((prev) => prev.filter((item) => item.id !== statu.id));
    } else {
      if (selectedStatus.length === 0) {
        setSelectedStatus([statu]);
      } else {
        setSelectedStatus((prev) => [...prev, statu]);
      }
    }
  };

  return (
    <Listbox value={selectedStatus} multiple>
      {({ open }) => (
        <>
          <Listbox.Button className="py-2 cursor-pointer flex w-full items-center justify-between gap-3 px-2 bg-gray min-h-12 rounded-10 font-semibold ">
            {selectedStatus.length > 0 ? (
              <span className="block text-left ">
                {selectedStatus.map((statu, index) => (
                  <span key={statu.id} className="capitalize block">
                    {statu.name}
                    {index !== selectedStatus.length - 1 && (
                      <>
                        ,<br />
                      </>
                    )}
                  </span>
                ))}
              </span>
            ) : (
              <span className="text-grayAlterTwo font-normal">
                Select status
              </span>
            )}

            <span
              className={clsx("transition", open ? "-rotate-180" : "rotate-0")}
            >
              <ArrowDownIcon />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options as="ul" className="absolute z-10 w-full space-y-1  max-h-[200px] overflow-auto bg-gray mt-2 p-1 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
              
              {status.map((statu) => (
                <Listbox.Option
                  as={React.Fragment}
                  key={statu.id}
                  value={statu}
                >
                  {({ active }) => (
                    <li
                      onClick={() => handleOnChange(statu)}
                      className={clsx(
                        "flex font-medium justify-between items-center cursor-pointer p-2 rounded-md transition",
                        active && "bg-grayAlter",
                        selectedStatus.some((item) => item.id === statu.id) &&
                          "bg-grayAlter"
                      )}
                    >
                      <div className={clsx("capitalize")}>{statu.name}</div>
                      <div
                        className={clsx(
                          "bg-grayAlter w-6 h-6 flex item-center justify-center rounded-sm transition",
                          active ? "bg-grayAlterTwo" : "bg-grayAlter",
                          selectedStatus.some((item) => item.id === statu.id) &&
                            "bg-grayAlterTwo "
                        )}
                      >
                        {statu.num}
                      </div>
                    </li>
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
