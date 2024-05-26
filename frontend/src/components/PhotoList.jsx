import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

const PhotoList = ({ photos, favourites, onToggleFavourite }) => {
  // console.log(photos);
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id} className="photo-list__item">
          <PhotoFavButton
            photoId={photo.id}
            onClick={() => onToggleFavourite(photo.id)}
          />
          <img className="photo-list__image" src={photo.imageSource} alt={photo.username} />
          <div className="photo-list__user-details">
            <img className="photo-list__user-profile" src={photo.profile} alt={`Profile of ${photo.username}`} />
            <div className="photo-list__user-info">
              <p>{photo.username}</p>
              <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;