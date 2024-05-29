import React, { useState, useEffect } from 'react';

// import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, onOpenModal, favourites, onToggleFavourite, onTopicClick }) => {
  // const handleTopicClick = (topicId) => {
  //   onGetPhotosByTopics(topicId);
  // };

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
