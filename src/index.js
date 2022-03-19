import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  CategoriesProvider,
  FiltersProvider,
  NavbarProvider,
  ProductsProvider,
} from "./frontend/contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <ProductsProvider>
          <CategoriesProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </CategoriesProvider>
        </ProductsProvider>
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
