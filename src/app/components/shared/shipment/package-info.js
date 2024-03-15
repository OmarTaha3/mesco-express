import useShipment from "../../../../store/client/shipment-slice";
import SelectShipping from "../select-shipping";
import PiecesDetails from "./pieces-details";

export default function PackageInfo() {
  const { shipment, changePackageDescription } =
    useShipment();

    console.log(shipment)

  return (
    <div>
      <h3 className="font-semibold mb-3">Package Information</h3>
      <SelectShipping />
      <div className="flex flex-col text-black my-3 gap-3">
        <label htmlFor="package-description">Full description of goods</label>
        <textarea
          value={shipment.package.description}
          onChange={(e) => changePackageDescription(e.target.value)}
          id="package-description"
          className="bg-gray rounded-10 p-5 min-h-28"
        ></textarea>
      </div>
      <PiecesDetails />
    </div>
  );
}
