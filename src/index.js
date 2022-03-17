import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavbarProvider, ProductsProvider } from "./frontend/contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
