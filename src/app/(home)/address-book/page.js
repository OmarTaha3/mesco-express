"use client";
import AddressTable from "../../components/address-book/address-table";
import AddShipment from "../../components/shared/add-shipment";
import Search from "../../components/shared/search";

export default function AddressBook() {
  return (
    <section className="container">
      <Search type="address" />
      <AddShipment type="address" />
      <AddressTable />
    </section>
  );
}
