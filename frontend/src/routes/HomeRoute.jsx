import React, { useState, useEffect } from 'react';

// import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, setDisplayModal, onOpenModal }) => {

  // initialize state with empty array to stack favourited photos
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    const newFavourites = favourites.includes(photoId)
      ? favourites.filter(id => id !== photoId)
      : [...favourites, photoId];
    setFavourites(newFavourites);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default HomeRoute;
