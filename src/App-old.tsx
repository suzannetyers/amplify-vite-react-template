import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
// import "maplibre-gl-js-amplify/dist/public/amplify-map.css";
import "./App.css"

async function initializeMap() {
  await createMap({
    container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/
    center: [-123.1187, 49.2819], // [Longitude, Latitude]
    zoom: 11
  });
}

initializeMap();

function AppOld() {

  return (
   <div id="map"></div>
  );
}

export default AppOld;
