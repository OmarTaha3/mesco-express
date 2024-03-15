import React from "react";
import Contact from "./contact";
import Addressess from "./addresses";
import Separetor from "../shared/separator";

export default function ContactForm() {
  return (
    <form className="px-28 flex w-full justify-between">
      <Contact />
      <Separetor vertical={true} />
      <Addressess />
    </form>
  );
}
