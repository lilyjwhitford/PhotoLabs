import React, { useState, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isModalOpen, onClose, photo , onToggleFavourite, favourites, selectedPhoto }) => {
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const findSimilarPhotos = (selectedPhoto, allPhotos) => {
    if (!selectedPhoto || typeof selectedPhoto !== 'object' || !selectedPhoto.similarPhotos) {
      console.error('Selected photo is undefined or lacks similarPhotos property');
      return []; // return an empty array
    }
    // // extract tags of the selected photo
    // const selectedTags = selectedPhoto.tags;
    // // filter allPhotos to find those that share any tag with the selectedPhoto
    // return allPhotos.filter(photo =>
    //   photo.tags.some(tag => selectedTags.includes(tag))
    // );
    const similarPhotosObj = selectedPhoto.similarPhotos;
    const similarPhotosArray = Object.values(similarPhotosObj);
    return similarPhotosArray;
  };

  console.log("selected photo in modal:", selectedPhoto);

  useEffect(() => {
    const similar = findSimilarPhotos(selectedPhoto);
    setSimilarPhotos(similar);
  }, [selectedPhoto]);
 

  // conditionally render the modal content based on its open state
  return (
    isModalOpen && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <article className="photo-details-modal__images">
          <PhotoFavButton
            photoId={photo.id}
            onClick={() => onToggleFavourite(photo.id)}
            favourites={favourites}
          />
          <img className="photo-details-modal__image" src={photo.imageSource} alt={photo.username}></img>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={photo.profile} alt={`Profile of ${photo.username}`}></img>
            <div className="photo-details-modal__photographer-info">
              <p>{photo.username}</p>
              <p className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
          <div className="photo-details-modal__header">Similar Photos</div>
          <div className="photo-list">
            <PhotoList photos={similarPhotos}/>
          </div>
        </article>
      </div>
    )
  );
};

export default PhotoDetailsModal;
