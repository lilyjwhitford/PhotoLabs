import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, onToggleFavourite, favourites, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal(photo); // pass in photo details
  };
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        onClick={() => onToggleFavourite(photo.id)}
        favourites={favourites}
      />
      <img className="photo-list__image"
        src={photo.urls.regular}
        alt={photo.user.username}
        onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"
          src={photo.user.profile}
          alt={`profile of ${photo.user.username}`}
        />
        <div className="photo-list__user-info">
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
