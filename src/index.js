import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  AuthProvider,
  CategoriesProvider,
  FiltersProvider,
  NavbarProvider,
  ProductsProvider,
} from "./frontend/contexts";
// import Mockman from "mockman-js";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavbarProvider>
          <ProductsProvider>
            <CategoriesProvider>
              <FiltersProvider>
                <App />
              </FiltersProvider>
            </CategoriesProvider>
          </ProductsProvider>
        </NavbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
