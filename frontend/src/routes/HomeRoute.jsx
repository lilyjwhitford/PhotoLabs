import React, { useState } from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {

  // initialize state with empty array to stack favourited photos
  const [favourites, setFavourites] = useState([]);

  // function to toggle favourite status
  const toggleFavourite = (photoId) => {
    // remove from favourites if photo id is present
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      // add to favourites if not
      setFavourites([...favourites, photoId]);
    }
    console.log('Updated favourites:', favourites);

  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
