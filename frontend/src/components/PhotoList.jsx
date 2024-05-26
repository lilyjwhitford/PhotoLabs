import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  console.log(photos);

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id} className="photo-item">
          <PhotoListItem photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;