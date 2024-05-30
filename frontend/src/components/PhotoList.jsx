import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favourites, onToggleFavourite, onOpenModal }) => {

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