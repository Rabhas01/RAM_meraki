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

      // Snazzy Map Styles
      const mapStyles = [
        {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#202c3e"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "gamma": 0.01
            },
            {
              "lightness": 20
            },
            {
              "weight": "1.39"
            },
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "weight": "0.96"
            },
            {
              "saturation": "9"
            },
            {
              "visibility": "on"
            },
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "lightness": 30
            },
            {
              "saturation": "9"
            },
            {
              "color": "#29446b"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "saturation": 20
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "lightness": 20
            },
            {
              "saturation": -20
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "lightness": 10
            },
            {
              "saturation": -30
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#193a55"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "saturation": 25
            },
            {
              "lightness": 25
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "lightness": -20
            }
          ]
        }
      ];
      const mapOptions = {
        center: { lat: 45.4215, lng: -73.6786 }, // Set your desired location coordinates
        zoom: 12,
        styles: mapStyles,
      };

      const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
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
