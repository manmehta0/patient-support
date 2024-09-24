import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { XCircleIcon } from 'lucide-react';

// Define the prop types for the modal component
interface PopUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

Modal.setAppElement('#root'); // Set the app element for accessibility

const PopUpModal: React.FC<PopUpModalProps> = ({ isOpen, onRequestClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='absolute h-[800px] overflow-scroll top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl'
      overlayClassName='fixed inset-0 bg-gray-400 bg-opacity-80'
    >
      <button
        onClick={onRequestClose}
        className='fixed top-12 right-12 text-gray-600 hover:text-[#4d0060]'
      >
        <XCircleIcon width={24} height={24} />
      </button>
      {children}
    </Modal>
  );
};

export default PopUpModal;
