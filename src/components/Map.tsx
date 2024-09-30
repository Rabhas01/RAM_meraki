import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

function MapComponent() {
  const position = { lat: 45.43795618983045, lng: -73.70586453869741 };
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const map = useMap();

  useEffect(() => {
    if (map) {
      // You can interact with the map object here if needed
      console.log("Map is loaded", map);

      return () => {
        // No need for map.setMap(null), just clean up other resources if necessary
        console.log("Cleanup on unmount");
      };
    }
  }, [map]);

  return <Map zoom={9} center={position} mapId={mapId} />;
}

export default function Intro() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;

  if (!apiKey || !mapId) {
    return <p>API Key or Map ID is missing</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "100vh", width: "100%" }}>
        <MapComponent />
      </div>
    </APIProvider>
  );
}
