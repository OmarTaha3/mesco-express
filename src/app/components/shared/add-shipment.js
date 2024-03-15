import React from "react";
import Button from "./button";
import PlusIcon from "../../../../public/icons/plus";
import ImportIcon from "../../../../public/icons/import";
import Actions from "../home/actions";
import useSelectedShipments from "../../../store/client/select-shipment-slice";
import { AnimatePresence, motion } from "framer-motion";
import CrossIcon from "../../../../public/icons/cross";
import { useRouter } from "next/navigation";

export default function AddShipment() {
  const router = useRouter();
  const { selectedShipments, reset } = useSelectedShipments();
  return (
    <section className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Button onClick={() => router.push("home/new-shipment")}>
          <PlusIcon /> New Shipment
        </Button>
        <Button>
          <ImportIcon /> Import from file
        </Button>
      </div>
      <AnimatePresence>
        {selectedShipments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.2,
              stiffness: 200,
              damping: 20,
            }}
            className="flex items-center  gap-3"
          >
            <div className="flex items-center gap-3">
              <div onClick={reset} className="cursor-pointer text-black">
                <CrossIcon />
              </div>{" "}
              <div className="text-black">
                {selectedShipments.length} Selected
              </div>
            </div>{" "}
            <Actions />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
