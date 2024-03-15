import clsx from "clsx";
import React from "react";

export default function Separetor({ vertical }) {
  return (
    <div
      className={clsx("bg-primary ", vertical ? " w-px" : "w-full h-px")}
    ></div>
  );
}
