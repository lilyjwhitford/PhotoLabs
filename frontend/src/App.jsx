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
const photos = new Array(3).fill(sampleDataForPhotoListItem); // This ensures the array is filled with null values, which can be helpful if you're not using the actual photo object.

const App = () => {
  return (
    <div className="App">
      {photos.map((photo, index) => ( // Since we're not using the photo variable, you can replace it with an underscore as a convention to indicate it's an unused variable.
        <div key={index} className="photo-list"> {/* Use index as a key */}
          <PhotoListItem photo={photo}/> {/* Removed photo prop since we don't have photo details here */}
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
