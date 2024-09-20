// src/StudyDetailsModal.js
import React from 'react';
import Modal from 'react-modal';
import StudyDetails from './StudyDetails';
import { XCircleIcon } from 'lucide-react';

Modal.setAppElement('#root'); // Set the app element for accessibility

const StudyDetailsModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='absolute h-[800px] overflow-scroll  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl' overlayClassName='fixed inset-0 bg-black bg-opacity-50'>
      <button onClick={onRequestClose} className='fixed top-5 right-4 text-gray-600 hover:text-gray-900'>
        <XCircleIcon width={24} height={24} />
      </button>
      <StudyDetails data={data} />
    </Modal>
  );
};

export default StudyDetailsModal;
