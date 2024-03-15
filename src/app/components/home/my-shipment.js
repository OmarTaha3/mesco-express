import React from "react";
import AsideFiltering from "./aside-filtering";
import TableShipment from "./table-shipment";

export default function MyShipment() {
  return (
    <section className="grid grid-cols-[270px_1fr] h-full">
      <AsideFiltering />
      <TableShipment />
    </section>
  );
}
