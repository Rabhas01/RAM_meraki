import React from 'react';
// import 'App.css'; // Make sure to import the CSS file

const UfoWithBeam: React.FC = () => (
  <div className="relative">
    <img
      src="src/assets/Parallax_images/ufo.png"
      alt="UFO"
      className="ufo"
    />
    <div className="ufo-beam"></div>
  </div>
);

export default UfoWithBeam;
