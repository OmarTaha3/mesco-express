"use client";
import React from "react";
import Logo from "../../../public/icons/logo";
import ShipmentsIcon from "../../../public/icons/shipments";
import AddressIcon from "../../../public/icons/address";
import useActiveTap from "../../store/client/tap-slice";
import clsx from "clsx";
import Button from "./shared/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { activeTap, setTapShipments, setTapAddress } = useActiveTap();
  return (
    <section className="container py-8 flex items-center justify-between sticky top-0 bg-white z-20">
      <div className="flex items-center gap-20">
        <button onClick={() => router.push("/")}>
          <Logo />
        </button>
        <div className="flex items-center gap-14">
          <div
            onClick={setTapShipments}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <ShipmentsIcon /> My Shipments
            </div>
            <div
              className={clsx(
                "w-full h-0.5 bg-secondary transition",
                activeTap === "shipments" ? "opacity-100" : "opacity-0"
              )}
            ></div>
          </div>
          <div
            onClick={setTapAddress}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <AddressIcon /> Address Book
            </div>
            <div
              className={clsx(
                "w-full h-0.5 bg-secondary transition",
                activeTap === "address" ? "opacity-100" : "opacity-0"
              )}
            ></div>
          </div>
        </div>
      </div>
      <Button>My profile</Button>
    </section>
  );
}
