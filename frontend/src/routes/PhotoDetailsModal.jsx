import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isModalOpen, onClose, photoId }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // //function to open the modal
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // //function to close the modal
  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // conditionally render the modal content based on its open state
  return (
    isModalOpen && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    )
  );
};

export default PhotoDetailsModal;
