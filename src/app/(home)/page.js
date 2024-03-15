"use client";
import Search from "../components/shared/search";
import AddShipment from "../components/shared/add-shipment";
import MyShipment from "../components/home/my-shipment";

export default function Home() {
  return (
    <section className="container">
      <Search type="shipments" />
      <AddShipment type="shipments" />
      <MyShipment />
    </section>
  );
}
