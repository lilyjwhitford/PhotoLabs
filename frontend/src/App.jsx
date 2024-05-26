import React from 'react';

import './App.scss';
import PhotoList, { sampleDataForPhotoList } from 'components/PhotoList';
import TopicList, { sampleDataForTopicList } from 'components/TopicList';


const App = () => {
  return (
    <div className="App">
      <PhotoList photos={sampleDataForPhotoList} />
      <TopicList topics={sampleDataForTopicList} />
    </div>
  );
};

export default App;
