import React, { useState, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isModalOpen, onClose, photo, onToggleFavourite, favourites}) => {
  const [similarPhotos, setSimilarPhotos] = useState([]);

  if (!photo) {
    console.error("selected photo is undefined");
    return null;
  }

  const findSimilarPhotos = (selectedPhoto) => {
    if (!photo.similar_photos || photo.similar_photos.length === 0) {
      console.error('selected photo lacks similarPhotos property or is empty');
      return []; // return an empty array
    }
    // // extract tags of the selected photo
    // const selectedTags = selectedPhoto.tags;
    // // filter allPhotos to find those that share any tag with the selectedPhoto
    // return allPhotos.filter(photo =>
    //   photo.tags.some(tag => selectedTags.includes(tag))
    // );
    const similarPhotosObj = selectedPhoto.similar_photos;
    const similarPhotosArray = Object.values(similarPhotosObj);
    return similarPhotosArray;
  };

  // console.log("selected photo in modal:", photo);

  useEffect(() => {
    const similar = findSimilarPhotos(photo);
    setSimilarPhotos(similar);
  }, [photo]);
 

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
          <img className="photo-details-modal__image"
            src={photo.urls.full}
            alt={photo.user.username}>
          </img>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`profile of ${photo.user.username}`}>
            </img>
            <div className="photo-details-modal__photographer-info">
              <p>{photo.user.name}</p>
              <p className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
          <div className="photo-details-modal__header">Similar Photos</div>
          <div className="photo-list">
            <PhotoList photos={similarPhotos} favourites={favourites} onToggleFavourite={onToggleFavourite}/>
          </div>
        </article>
      </div>
    )
  );
};

export default PhotoDetailsModal;
