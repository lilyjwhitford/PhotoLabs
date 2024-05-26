import React from 'react';

import './App.scss';
import PhotoList, { sampleDataForPhotoList } from 'components/PhotoList';
import TopicList, { sampleDataForTopicList } from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';


const App = () => {
  return (
    <div className="App">
      <TopNavigation topics={sampleDataForTopicList} />
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default App;
