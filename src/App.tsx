import { Geo } from '@aws-amplify/geo';
import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
// import "maplibre-gl-js-amplify/dist/public/amplify-map.css";
import "./App.css"

async function initializeMap() {
  const defaultMap = Geo.getDefaultMap();
  const map = await createMap({
    container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/
  });
  map.setStyle(defaultMap.mapName); // map name received from getAvailableMaps()
  map.resize(); // forces the map to re-render
}

initializeMap();

// function componentWillUnmount() {
//     map.remove();
// }

export default function App() {
  return (
   <div id="map"></div>
  );
}
