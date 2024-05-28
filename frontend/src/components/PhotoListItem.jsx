import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, onToggleFavourite, favourites, setDisplayModal, onOpenModal }) => {
  // console.log(photo);
  // const handleLikeChange = (isLiked) => {
  //   console.log(`photo liked status: ${isLiked}`);
  // };

  const handleClick = () => {
    // console.log("opening modal for photo:", photo.id);
    // console.log("photo details:", photo);
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
        src={photo.imageSource}
        alt={photo.username}
        onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt={`Profile of ${photo.username}`}/>
        <div className="photo-list__user-info">
          <p>{photo.username}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
