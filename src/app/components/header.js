"use client";
import React from "react";
import Logo from "../../../public/icons/logo";
import ShipmentsIcon from "../../../public/icons/shipments";
import AddressIcon from "../../../public/icons/address";
import clsx from "clsx";
import Link from "next/link";
import { routes } from "../../routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="container py-8 flex items-center justify-between sticky top-0 bg-white z-20">
      <div className="flex items-center gap-20">
        <Link href={routes.MY_SHIPMENTS}>
          <Logo />
        </Link>
        <div className="flex items-center gap-14">
          <Link
            href={routes.MY_SHIPMENTS}
            className={clsx(
              "flex items-center gap-3 pb-3 border-b-2 transition ",
              path.split("/")[1] !== "address-book" &&
                path.split("/")[1] !== "my-profile"
                ? "border-secondary"
                : "border-transparent"
            )}
          >
            <ShipmentsIcon /> My Shipments
          </Link>
          <Link
            href={routes.ADDRESS_BOOK}
            className={clsx(
              "flex items-center gap-3 pb-3 border-b-2 transition ",
              path.split("/")[1] === "address-book"
                ? "border-secondary"
                : "border-transparent"
            )}
          >
            <AddressIcon /> Address Book
          </Link>
        </div>
      </div>
      <Link
        href={routes.MY_PROFILE}
        className={clsx(
          "flex items-center gap-3 px-30  h-12 rounded-10 font-semibold transition",
          path.split("/")[1] === "my-profile"
            ? "bg-primary text-gray"
            : "bg-gray"
        )}
      >
        My profile
      </Link>
    </header>
  );
}
