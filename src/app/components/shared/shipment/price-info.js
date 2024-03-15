"use client";
import { Popover, Transition } from "@headlessui/react";
import InfoIcon from "../../../../../public/icons/info";
import { Fragment, useRef } from "react";
import Image from "next/image";
import priceGuide from "../../../../../public/images/shipment/price-guide.png";

export default function PriceInfo() {
  const buttonRef = useRef(null);
  return (
    <Popover className="relative ">
      {({ close }) => (
        <>
          <Popover.Button
            onMouseEnter={() => buttonRef.current?.click()}
            onMouseLeave={close}
            ref={buttonRef}
            className="focus-visible:outline-none"
          >
            <InfoIcon />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel
              onMouseEnter={() => buttonRef.current?.click()}
              onMouseLeave={close}
              className="absolute z-10 p-2 bg-blueLighter w-[435px] h-[268px] rounded-10 flex items-center gap-7"
            >
              <Image
                src={priceGuide}
                alt="price guide"
                width={200}
                height={250}
                
              />
              <p className="text-pretty text-lg">
                Shipments are priced either by weight or dimensional weight [ a
                calculation based on package size ]
              </p>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
