import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>
);
