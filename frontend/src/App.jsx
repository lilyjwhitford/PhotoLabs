import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import { sampleDataForPhotoList } from 'components/PhotoList';


const App = () => {
  return (
    <div className="App">
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default App;
