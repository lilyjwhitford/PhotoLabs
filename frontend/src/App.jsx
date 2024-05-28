import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  // const [displayModal, setDisplayModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [favourites, setFavourites] = useState([]);

  // const handleOpenModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setDisplayModal(true);
  // };
  
  // const toggleFavourite = (photoId) => {
  //   const newFavourites = favourites.includes(photoId)
  //     ? favourites.filter(id => id !== photoId)
  //     : [...favourites, photoId];
  //   setFavourites(newFavourites);
  // };

  const { state, actions } = useApplicationData();
    
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onOpenModal={actions.setPhotoSelected}
        favourites={state.favourites}
        onToggleFavourite={actions.updateToFavPhotoIds}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          isModalOpen={state.displayModal}
          onClose={actions.onClosePhotoDetailsModal}
          photo={state.selectedPhoto}
          favourites={state.favourites}
          onToggleFavourite={actions.updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
