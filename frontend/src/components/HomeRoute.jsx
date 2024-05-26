import React from "react";

import PhotoList, { sampleDataForPhotoList } from 'components/PhotoList';
import { sampleDataForTopicList } from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation topics={sampleDataForTopicList} />
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default HomeRoute;