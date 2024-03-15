import { useState } from "react";
import Button from "../button";
import Modal from "../modal";

export default function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        className="w-full justify-center text-white bg-primary"
      >
        Confirm
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-xm text-black font-medium">
          Estimated Shipping Cost Is
        </h3>
        <p className="font-semibold">50 EGP</p>

        <div className="mt-4 flex items-center gap-3">
          <Button
            onClick={closeModal}
            type="button"
            className="w-full justify-center text-black"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="shipment-form"
            onClick={closeModal}
            className="w-full justify-center text-white bg-primary"
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}
