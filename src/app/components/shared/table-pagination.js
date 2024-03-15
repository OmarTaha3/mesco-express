'use client'

import clsx from "clsx";
import { useState } from "react";
import ArrowLeftIcon from "../../../../public/icons/arrow-left";
import ArrowRightIcon from "../../../../public/icons/arrow-right";

export default function TablePagination() {
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

  return (
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
  );
}
