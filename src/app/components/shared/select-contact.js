"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import ArrowDownIcon from "../../../../public/icons/arrow-down";

const people = [
  {
    id: 1,
    name: "durward reynolds",
    phoneNumber: "+2012222222222",
    email: "one@one.com",
  },
  {
    id: 2,
    name: "kenton towne",
    phoneNumber: "+201333333333",
    email: "two@two.com",
  },
  {
    id: 3,
    name: "therese wunsch",
    phoneNumber: "+201444444444",
    email: "three@three.com",
  },
  {
    id: 4,
    name: "benedict kessler",
    phoneNumber: "+201555555555",
    email: "four@four.com",
  },
  {
    id: 5,
    name: "katelyn rohan",
    phoneNumber: "+201666666666",
    email: "five@five.com",
  },
];

export default function SelectContact({
  label,
  selectedPerson,
  setSelectedPerson,
}) {
  const [filter, setFilter] = useState();

  const filterPeople = () => {
    if (filter) {
      return people.filter((person) =>
        person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    } else {
      return people;
    }
  };

  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      as="div"
      className="relative w-[365px]"
    >
      {({ open }) => (
        <>
          <div className="flex flex-col gap-2 items-start">
            <Listbox.Label className="text-black">{label}</Listbox.Label>
            <Listbox.Button className="capitalize flex w-full items-center justify-between gap-3 px-2 bg-gray h-12 rounded-10 font-semibold">
              {selectedPerson.name ? (
                selectedPerson.name
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
              {filterPeople().map((person) => (
                <Listbox.Option key={person.id} value={person} as="li">
                  {({ active }) => (
                    <div
                      className={clsx(
                        "cursor-pointer p-2 rounded-md transition capitalize",
                        active && "bg-grayAlter",
                        selectedPerson.id === person.id && "bg-grayAlter"
                      )}
                    >
                      {person.name}
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
