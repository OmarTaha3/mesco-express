"use client";
import React, { useState } from "react";
import Checkbox from "../shared/checkbox";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import SelectCity from "../shared/select-city";
import SelectStatus from "../shared/select-status";

export default function AsideFiltering() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isOnlyFav, setIsOnlyFav] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleToggleIsOnlyFav = (event) => {
    setIsOnlyFav(event.target.checked);
  };

  return (
    <aside className="pr-7 pb-12">
      <h3 className="font-semibold mb-5 mt-2.5">Filter by</h3>
      <ul className="mb-4">
        <h3 className="font-semibold mb-1">Status</h3>
        <div className="w-full relative">
          <SelectStatus selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        </div>
      </ul>
      <div className="flex items-start flex-col gap-1.5 w-full mb-4">
        <label htmlFor="from" className="font-semibold">
          From
        </label>
        <SelectCity city={from} setCity={setFrom} />
      </div>
      <div
        htmlFor="to"
        className="flex items-start flex-col gap-1.5 w-full mb-4"
      >
        <label htmlFor="to" className="font-semibold">
          To
        </label>
        <SelectCity city={to} setCity={setTo} />
      </div>

      <div className="flex items-start flex-col gap-1.5 w-full mb-4">
        <label htmlFor="dateFrom" className="font-semibold">
          Date From
        </label>
        <DatePicker
          onChange={setFromDate}
          value={fromDate}
          className="default-input [&>div]:border-none w-full [&>div]:w-full [&>div]:grow-0 "
          maxDate={toDate}
        />
      </div>
      <div className="flex items-start flex-col gap-1.5 w-full mb-8">
        <label htmlFor="dateTo" className="font-semibold">
          Date To
        </label>
        <DatePicker
          onChange={setToDate}
          value={toDate}
          className="default-input [&>div]:border-none w-full [&>div]:w-full [&>div]:grow-0"
          minDate={fromDate}
        />
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          id="checkFav"
          checked={isOnlyFav}
          onChange={handleToggleIsOnlyFav}
        />
        <label
          htmlFor="checkFav"
          className="font-semibold cursor-pointer select-none"
        >
          Only Favorite
        </label>
      </div>
    </aside>
  );
}
