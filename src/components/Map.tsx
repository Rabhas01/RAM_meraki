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
      const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 40.712776, lng: -74.005974 }, // Example coordinates
        zoom: 10,
        styles: [/* Insert Snazzy Map styles here if you have any */]
      });
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
