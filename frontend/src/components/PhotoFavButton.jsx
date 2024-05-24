import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ onClick }) =>  {

  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked);
    onClick(isLiked);
  };
  
  return (
    <div className={`photo-list__fav-icon ${isLiked ? 'liked' : ""}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;