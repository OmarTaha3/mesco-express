import PlusIcon from "../../../../../public/icons/plus";
import useShipment from "../../../../store/client/shipment-slice";
import Button from "../button";
import SelectCurrency from "../select-currency";

export default function CashOnDelivery() {
  const { shipment, toggleAddCashOnDelivery, changeCODAmount, changeCurrency } =
    useShipment();
  return (
    <>
      {!shipment.cashOnDelivery.available ? (
        <Button onClick={toggleAddCashOnDelivery} type="button">
          <PlusIcon />
          Add Cash On Delivery
        </Button>
      ) : (
        <div className="grid grid-cols-[repeat(3,185px)] text-black gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="cod">COD amount</label>
            <input
              id="cod"
              type="text"
              className="default-input"
              placeholder="Enter Amount here"
              value={shipment.cashOnDelivery.codAmount}
              onChange={(e) => changeCODAmount(e.target.value)}
            />
          </div>
          <SelectCurrency
            label="Currency"
            selectedCurrency={shipment.cashOnDelivery.currency}
            setSelectedCurrency={changeCurrency}
          />
          <Button
            onClick={toggleAddCashOnDelivery}
            className="self-end justify-center bg-redLight text-primary"
          >
            Remove
          </Button>
        </div>
      )}
    </>
  );
}
