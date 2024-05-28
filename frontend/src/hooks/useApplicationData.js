import { useState } from "react";

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const updateToFavPhotoIds = (photoId) => {
    const newFavourites = favourites.includes(photoId)
      ? favourites.filter(id => id !== photoId)
      : [...favourites, photoId];
    setFavourites(newFavourites);
  };

  const onClosePhotoDetailsModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  };

  return {
    state: {
      displayModal,
      selectedPhoto,
      favourites
    },
    actions: {
      setPhotoSelected,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal
    }
  };
};

export default useApplicationData;