import React from 'react';
import TopicListItem from './TopicListItem';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favourites }) => {
  // check if favourite photo exists
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
        {topics.map(topic => (
          <li key={topic.id}>
            <TopicListItem topic={topic} />
          </li>
        ))}
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default TopNavigation;