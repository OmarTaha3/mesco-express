import { useState } from "react";
import TablePagination from "../shared/table-pagination";
import DeleteModal from "./delete-modal";

export default function AddressTable() {
  const [addressData, setAddressData] = useState([
    {
      id: 0,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 1,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 2,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 3,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 4,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 5,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 6,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 7,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 8,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 9,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
    {
      id: 10,
      fullName: "mohamed anwar",
      companyName: "garm food",
      email: "media@corporate-mg.com",
      mobileNumber: "01200650034",
      address: "Heliopolis sq. - Cairo, Egypt",
    },
  ]);
  const deleteAddress = (id) => {
    setAddressData((prev) => prev.filter((address) => address.id !== id));
  };
  return (
    <>
      <div className="mb-5 max-h-[700px] overflow-auto">
        <table className="w-full relative">
          <thead>
            <tr className="h-12 bg-blueLighter font-semibold sticky top-0 ">
              <td className="pl-10">Full Name</td>
              <td>Company Name</td>
              <td>Email</td>
              <td>Mobile Number</td>
              <td>Address</td>
              <td className="pr-10"></td>
            </tr>
          </thead>
          <tbody className="text-black ">
            {addressData.map((address) => (
              <tr
                key={address.id}
                className="h-12 hover:bg-gray transition group "
              >
                <td className="pl-10 capitalize">{address.fullName}</td>
                <td className="capitalize">{address.companyName}</td>
                <td> {address.email}</td>
                <td> {address.mobileNumber}</td>
                <td>{address.address}</td>
                <td className="pr-10">
                  <DeleteModal deleteAddress={deleteAddress} id={address.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </>
  );
}
