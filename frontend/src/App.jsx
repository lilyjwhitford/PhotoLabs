import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// create array of null values and map over it to render PhotoListItem
const photos = new Array(3).fill(null);

const App = () => {
  return (
    <div className="App">
      {photos.map((_, id) => ( // replace photo variable with an underscore as a convention to indicate it's an unused variable
      // when rendering lists provide key prop for each child in the list
        <div key={id} className="photo-list">
          <PhotoListItem photo={sampleDataForPhotoListItem}/>
        </div>
      ))}
    </div>
  );
};

// const App = () => {
  
//   return (
//     <div className="App">
//       <PhotoListItem photo={sampleDataForPhotoListItem} />
//     </div>
//   );
// };

export default App;
