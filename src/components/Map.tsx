import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 45.43795618983045, lng: -73.70586453869741 };

  // Load environment variables
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID;

  // Log the API key and Map ID to the console
  console.log("Google Maps API Key:", apiKey);
  console.log("Google Maps Map ID:", mapId);

  // Ensure API Key and Map ID are properly loaded
  if (!apiKey || !mapId) {
    return <p>API Key or Map ID is missing</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={mapId}></Map>
      </div>
    </APIProvider>
  );
}
