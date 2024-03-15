import { AnimatePresence, motion } from "framer-motion";
import CrossCircleIcon from "../../../../../public/icons/cross-circle";
import PlusIcon from "../../../../../public/icons/plus";
import useShipment from "../../../../store/client/shipment-slice";
import PriceInfo from "./price-info";
export default function PiecesDetails() {
  const {
    shipment,
    changePackageDetailsQuantity,
    changePackageDetailsWeight,
    changePackageDetailsLength,
    changePackageDetailsWidth,
    changePackageDetailsHeight,
    addAnotherPiece,
    deleteAPiece,
  } = useShipment();

  const getTotalWeights = () => {
    let totalWeights = 0;
    shipment.package.details.forEach((item) => {
      totalWeights += Number(item.weight);
    });
    return totalWeights;
  };
  return (
    <div className="space-y-7 my-7 text-black">
      <AnimatePresence initial={false}>
        {shipment.package.details.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            key={index}
            className="grid grid-flow-col grid-cols-[max-content_1fr] gap-3 "
          >
            <div className="border border-black p-4 rounded-10">
              <div className="grid grid-cols-5 gap-6">
                <div className="flex flex-col gap-1 mb-5">
                  <label htmlFor={`${index}-quantity`}>Quantity (Kg)</label>
                  <input
                    id={`${index}-quantity`}
                    type="number"
                    min={1}
                    minLength={1}
                    className="default-input w-24 mr-3"
                    placeholder="1"
                    value={item.quantity}
                    onChange={(e) =>
                      changePackageDetailsQuantity(index, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 mb-5">
                  <label htmlFor={`${index}-weight`}>Weight (Kg)</label>
                  <input
                    id={`${index}-weight`}
                    type="number"
                    min={0}
                    minLength={1}
                    className="default-input w-24 mr-3"
                    placeholder="0"
                    value={item.weight}
                    onChange={(e) =>
                      changePackageDetailsWeight(index, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 mb-5">
                  <label htmlFor={`${index}-width`}>Width (cm)</label>
                  <input
                    id={`${index}-width`}
                    type="number"
                    min={0}
                    minLength={1}
                    className="default-input w-24"
                    placeholder="0"
                    value={item.length}
                    onChange={(e) =>
                      changePackageDetailsWidth(index, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 mb-5">
                  <label htmlFor={`${index}-length`}>Length (cm)</label>
                  <input
                    id={`${index}-length`}
                    type="number"
                    min={0}
                    minLength={1}
                    className="default-input w-24 mr-3"
                    placeholder="0"
                    value={item.width}
                    onChange={(e) =>
                      changePackageDetailsLength(index, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 mb-5">
                  <label htmlFor={`${index}-height`}>Height (cm)</label>
                  <input
                    id={`${index}-height`}
                    type="number"
                    min={0}
                    minLength={1}
                    className="default-input w-24 mr-3"
                    placeholder="0"
                    value={item.height}
                    onChange={(e) =>
                      changePackageDetailsHeight(index, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            {index === 0 ? (
              <button
                type="button"
                onClick={addAnotherPiece}
                className="bg-gray rounded-10  flex flex-col items-center justify-center font-semibold"
              >
                <PlusIcon className="mb-2.5" />
                <span>Add</span>
                <span>Another</span>
                <span>Piece</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => deleteAPiece(index)}
                className="bg-redLight rounded-10  flex flex-col items-center justify-center font-semibold"
              >
                <CrossCircleIcon svgClassName="mb-2.5" />
                <span>Remove</span>
                <span>This</span>
                <span>Piece</span>
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-3">
          Total Chargeable weight <PriceInfo />
        </div>
        <div>
          <span className="font-bold">{getTotalWeights()}</span> Kg
        </div>
      </div>
    </div>
  );
}
