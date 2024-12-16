import './init.js'
import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from 'aws-amplify';
import { MapView } from '@aws-amplify/ui-react-geo';

import '@aws-amplify/ui-react-geo/styles.css';

import awsExports from "../amplify_outputs.json";

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")!).render(  
  <React.StrictMode>
      <MapView
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
    />
  </React.StrictMode>
);

//init js to fix vite global err
//node polyfills install
//leave create map in backend.ts