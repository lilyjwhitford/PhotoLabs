import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };
  
  const toggleFavourite = (photoId) => {
    const newFavourites = favourites.includes(photoId)
      ? favourites.filter(id => id !== photoId)
      : [...favourites, photoId];
    setFavourites(newFavourites);
  };
    
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onOpenModal={handleOpenModal}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          isModalOpen={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={selectedPhoto}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
