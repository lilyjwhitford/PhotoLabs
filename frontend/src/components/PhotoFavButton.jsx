import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, onClick, favourites}) =>  {

  // const [isLiked, setIsLiked] = useState(false);
  // console.log(favourites);
  const isLiked = favourites.includes(photoId);
  
  const handleClick = () => {
    // setIsLiked(!isLiked);
    onClick(photoId); // directly call the onClick handler with photoId
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;