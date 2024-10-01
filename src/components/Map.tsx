import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

function MapComponent() {
  const position = { lat: 45.43795618983045, lng: -73.70586453869741 };
  const zoom = 19; // Separate zoom from position
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;
  const map = useMap();

  useEffect(() => {
    if (map) {
      console.log("Map is loaded", map);
      return () => {
        console.log("Cleanup on unmount");
      };
    }
  }, [map]);

  return <Map zoom={zoom} center={position} mapId={mapId} />;
}

export default function Intro() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;

  if (!apiKey || !mapId) {
    return <p>API Key or Map ID is missing</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "50vh", width: "100%" }}>
        <MapComponent />
      </div>
    </APIProvider>
  );
}
