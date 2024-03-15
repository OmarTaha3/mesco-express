"use client";

import { useState } from "react";
import ArrowLeftIcon from "../../../../public/icons/arrow-left";
import ArrowRightIcon from "../../../../public/icons/arrow-right";
import clsx from "clsx";
import Checkbox from "../shared/checkbox";
import useSelectedShipments from "../../../store/client/select-shipment-slice";
import StarIcon from "../../../../public/icons/star";
import ArrowDownIcon from "../../../../public/icons/arrow-down";

export default function TableShipment() {
  const [shipmentData, setShipmentData] = useState([
    {
      id: 0,
      isFav: false,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 1,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 2,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 3,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 4,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 5,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 6,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 7,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
    {
      id: 8,
      isFav: true,
      refrence: "3659425652",
      date: "february 26 2024",
      type: "domenstic",
      shipFromHub: "euroshipping",
      shipFrom: "Mustafa gamaei ALEXANDRIA, Egypt",
      shipToHub: "cma cgm",
      shipTo: "Mohamed Mahmoud CAIRO, Egypt",
      status: "pending",
    },
  ]);
  const { selectedShipments, toggleShipment, reset } = useSelectedShipments();
  const [page, setPage] = useState(10);
  const dataLength = 200;

  const nextPage = () => {
    if (page + 10 < dataLength) {
      setPage(page + 10);
    } else {
      setPage(dataLength);
    }
  };

  const prevPage = () => {
    if (page - 10 < 10) {
      setPage(10);
    } else {
      setPage(page - 10);
    }
  };

  const handleChecked = (id) => {
    return selectedShipments.includes(id);
  };

  const handleToggleChecked = (id) => {
    toggleShipment(id);
  };

  const handleCheckAll = (isChecked) => {
    shipmentData.forEach((shipment) => {
      if (isChecked && !selectedShipments.includes(shipment.id)) {
        toggleShipment(shipment.id);
      } else if (!isChecked) {
        reset();
      }
    });
  };

  const handleToggleFavShipment = (id) => {
    setShipmentData((prev) =>
      prev.map((shipment) => {
        if (shipment.id === id) {
          return { ...shipment, isFav: !shipment.isFav };
        } else {
          return shipment;
        }
      })
    );
  };

  const isAllFav = () => {
    return shipmentData.every((item) => item.isFav);
  };

  const handleMakeAllFav = () => {
    if (!isAllFav()) {
      setShipmentData((prev) =>
        prev.map((shipment) => ({ ...shipment, isFav: true }))
      );
    } else {
      setShipmentData((prev) =>
        prev.map((shipment) => ({ ...shipment, isFav: false }))
      );
    }
  };

  const isAllSelected = () => {
    return shipmentData.every((item) => selectedShipments.includes(item.id));
  };

  return (
    <section className="border-l">
      <div className="mb-5 max-h-[700px]  overflow-auto">
        <table className="w-full relative">
          <thead>
            <tr className="h-12 bg-blueLighter font-semibold sticky top-0">
              <td className="text-center w-16">
                <Checkbox
                  id="d"
                  className="mx-auto bg-grayAlter text-grayAlter"
                  onChange={(e) => handleCheckAll(e.target.checked)}
                  checked={isAllSelected()}
                />
              </td>
              <td className="w-16">
                <div
                  onClick={handleMakeAllFav}
                  className={clsx(
                    "cursor-pointer w-fit transition",
                    isAllFav() ? "text-primary" : "text-grayAlter"
                  )}
                >
                  <StarIcon />
                </div>
              </td>
              <td>Reference</td>
              <td>Date + Type</td>
              <td className="max-w-[211px]">
                <div className="flex items-center gap-1 cursor-pointer">
                  Ship From <ArrowDownIcon />
                </div>
              </td>
              <td className="max-w-[211px]">Ship To</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody className="text-black ">
            {shipmentData.map((shipment, index) => (
              <tr key={index} className="h-24 hover:bg-gray transition group">
                <td>
                  <Checkbox
                    id={shipment.id}
                    checked={handleChecked(shipment.id)}
                    onChange={() => handleToggleChecked(shipment.id)}
                    className="mx-auto bg-grayAlter text-grayAlter"
                  />
                </td>
                <td>
                  <div
                    onClick={() => handleToggleFavShipment(shipment.id)}
                    className={clsx(
                      "cursor-pointer w-fit transition ",
                      shipment.isFav ? "text-primary" : "text-grayAlter"
                    )}
                  >
                    <StarIcon />
                  </div>
                </td>
                <td className="font-semibold">{shipment.refrence}</td>
                <td>
                  <div className="flex flex-col capitalize">
                    <div className="font-semibold ">{shipment.date}</div>
                    <div>{shipment.type}</div>
                  </div>
                </td>
                <td className="w-[211px]">
                  <div className="flex flex-col capitalize w-full ">
                    <div className="font-semibold uppercase ">
                      {shipment.shipFromHub}
                    </div>
                    <div className="text-pretty">{shipment.shipFrom}</div>
                  </div>
                </td>
                <td className="w-[211px]">
                  <div className="flex flex-col capitalize w-full">
                    <div className="font-semibold uppercase">
                      {shipment.shipToHub}
                    </div>
                    <div>{shipment.shipTo}</div>
                  </div>
                </td>
                <td className="font-semibold capitalize">{shipment.status}</td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </table>
      </div>
      <div className="flex items-center justify-end w-full select-none mb-4">
        {/* don't forget to change (page - 9) to shipmentData.length */}
        {page - 9} - {page} of {dataLength}
        <div className="flex items-center gap-3 ml-3">
          <div
            onClick={prevPage}
            className={clsx(
              " cursor-pointer",
              page === 10 ? "text-grayPlusPlus" : "text-primary"
            )}
          >
            <ArrowLeftIcon />
          </div>
          <div
            onClick={nextPage}
            className={clsx(
              " cursor-pointer",
              page !== dataLength ? " text-primary" : "text-grayPlusPlus"
            )}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
