import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavbarProvider } from "./frontend/contexts/navbar-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
