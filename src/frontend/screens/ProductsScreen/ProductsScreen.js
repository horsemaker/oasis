import React from "react";
import { Filters, ProductListing } from "../../components";
import "./ProductsScreen.css";

function ProductsScreen() {
  return (
    <div className="products-screen">
      <Filters />
      <ProductListing />
    </div>
  );
}

export { ProductsScreen };
