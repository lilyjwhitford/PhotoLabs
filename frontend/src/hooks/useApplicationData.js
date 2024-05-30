import { useReducer, useEffect } from "react";

const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favourites: [],
  photos: [],
  topics: []
};

// actions for reducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

// disable eslint for errors due to switch case indent syntax
/* eslint-disable */

// reducer function to handle state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        displayModal: true
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: true,
        selectedPhoto: action.payload
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: false,
        selectedPhoto: null
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      throw new Error(`unsupported action type: ${action.type}`);
  }
};
/* eslint-enable */


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // effect to make GET request fetch all topic/photo data from API then dispatch it to reducer
  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error('error fetching photos:', error));

    fetch("/api/topics")
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => console.error('error fetching topics:', error));
  }, []);

  // function to handle selecting a photo
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    console.log(photo);
  };

  // function to toggle favouriting a photo
  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  // function to close modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  // function to fetch photos by topic id and dispatch to reducer
  const getPhotosByTopics = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch(error => console.error('error fetching photos by topic:', error));
  };


  return {
    state,
    actions: {
      setPhotoSelected,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal,
      getPhotosByTopics
    }
  };
};

export default useApplicationData;