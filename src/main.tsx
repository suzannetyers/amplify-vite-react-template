import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

import { signInWithRedirect } from "aws-amplify/auth"

Amplify.configure(outputs);

signInWithRedirect({
  provider: { custom: "EverywareEntra2" }
})

ReactDOM.createRoot(document.getElementById("root")!).render(  
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
