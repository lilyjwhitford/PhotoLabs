import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onOpenModal={handleOpenModal}/>
      {selectedPhoto && (
        <PhotoDetailsModal
          isModalOpen={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
