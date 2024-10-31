import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-lg shadow-lg h-full max-h-[70vh] max-w-xl w-full p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <FaXTwitter className="text-white text-[30px] absolute top-4 right-[45%]" />
        <button
          className="absolute p-1 top-4 left-4 text-[24px] hover:bg-gray-800 rounded-full text-white"
          onClick={onClose}
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
