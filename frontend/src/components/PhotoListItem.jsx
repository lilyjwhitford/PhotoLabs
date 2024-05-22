import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ imageSource, username, profile, location}) => {
  return (
    <div>
      <img src={imageSource} alt={username} />
      <img src={profile} alt={`Profile of $(username)`}/>
      <p>{username}</p>
      <p>{location.city} {location.country}</p>
    </div>
  );
};

export default PhotoListItem;
