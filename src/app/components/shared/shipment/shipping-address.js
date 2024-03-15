import useShipment from "../../../../store/client/shipment-slice";
import SelectAddress from "../select-address";
import SelectContact from "../select-contact";

export default function ShippingAddress({ type }) {
  const {
    shipment,
    changeShipperContact,
    changeReceiverContact,
    changeShipperAddress,
    changeReceiverAddress,
  } = useShipment();
  const shippingAddress = {
    ship: type,
    man: type === "From" ? "Shipper" : type === "To" ? "Reciever" : "",
    selectedContact:
      type === "From"
        ? shipment.shipper.contact
        : type === "To"
        ? shipment.receiver.contact
        : (e) => console.error(`function error with payload ${e}`),
    handleChangeContact:
      type === "From"
        ? changeShipperContact
        : type === "To"
        ? changeReceiverContact
        : (e) => console.error(`function error with payload ${e}`),

    selectedAddress:
      type === "From"
        ? shipment.shipper.address
        : type === "To"
        ? shipment.receiver.address
        : (e) => console.error(`function error with payload ${e}`),

    handleChangeAddress:
      type === "From"
        ? changeShipperAddress
        : type === "To"
        ? changeReceiverAddress
        : (e) => console.error(`function error with payload ${e}`),
  };

  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-3">Ship {shippingAddress.ship}</h3>

          <SelectContact
            label={`${shippingAddress.man} Contact`}
            selectedPerson={shippingAddress.selectedContact}
            setSelectedPerson={shippingAddress.handleChangeContact}
          />
          <SelectAddress
            label={`${shippingAddress.man} Address`}
            selectedAddress={shippingAddress.selectedAddress}
            setSelectedAddress={shippingAddress.handleChangeAddress}
          />
        </div>
        <div className="bg-gray w-[340px] h-[225px] rounded-10 py-12 pl-10 pr-9 text-black text-sm">
          {shippingAddress.selectedContact.name ? (
            <>
              <p className="capitalize  font-bold ">
                {shippingAddress.selectedContact.name}
              </p>
              <p>{shippingAddress.selectedContact.phoneNumber}</p>
              <p>{shippingAddress.selectedContact.email}</p>
              <p>{shippingAddress.selectedAddress.fullAddress}</p>
            </>
          ) : (
            <p className="text-grayAlterTwo">Your data will appear here</p>
          )}
        </div>
      </div>
    </div>
  );
}
