import React, { useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoList = ({ photos, favourites, onToggleFavourite, setDisplayModal, onOpenModal }) => {

  // const openModal = (photoId) => {
  //   setDisplayModal(true); // set to true to open modal
  // };
  // console.log(photos);
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onToggleFavourite={onToggleFavourite}
          favourites={favourites}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;