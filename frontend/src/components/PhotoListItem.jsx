import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo }) => {

  console.log(photo);
  
  const handleLikeChange = (isLiked) => {
    console.log(`photo liked status: ${isLiked}`);
  };
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={handleLikeChange} />
      <img className="photo-list__image" src={photo.imageSource} alt={photo.username} />
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
