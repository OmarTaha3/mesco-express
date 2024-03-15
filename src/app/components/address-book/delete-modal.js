import { useState } from "react";
import CrossCircleIcon from "../../../../public/icons/cross-circle";
import Modal from "../shared/modal";
import Button from "../shared/button";
export default function DeleteModal({ deleteAddress, id }) {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        onClick={openModal}
        className="h-full w-full flex items-center justify-center"
      >
        <CrossCircleIcon gClassName="fill-red" />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-red font-semibold mb-8">
          Are sure you want to delete this contact And all its address?
        </h3>
        <div className="flex gap-4 w-full">
          <Button onClick={closeModal} className="w-full justify-center">
            Cancel
          </Button>
          <Button
            onClick={() => deleteAddress(id)}
            className="w-full justify-center bg-primary text-gray"
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
