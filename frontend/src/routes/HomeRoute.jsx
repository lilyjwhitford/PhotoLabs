import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, onOpenModal, favourites, onToggleFavourite, onTopicClick }) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        onTopicClick={onTopicClick}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default HomeRoute;
