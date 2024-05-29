import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, actions } = useApplicationData();
    
  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
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
