import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.google || !window.google.maps) {
        console.error('Google Maps JavaScript API script not loaded.');
        return;
      }

      // Snazzy Map Styles (if needed)

      // Initialize the map
    };

    loadMap();
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '300px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
    ></div>
  );
};

export default Map;
