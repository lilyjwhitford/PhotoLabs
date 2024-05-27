import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal}/>
      <PhotoDetailsModal isModalOpen={displayModal} onClose={() => setDisplayModal(false)}/>
    </div>
  );
};

export default App;
