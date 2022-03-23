import React from "react";
import { Filters, ProductListing } from "../../components";
import { useFilters, useProducts } from "../../contexts";
import { giveFinalProducts } from "../../utils";
import "./ProductsScreen.css";

function ProductsScreen() {
  const { products } = useProducts();
  const { filters } = useFilters();
  const finalProducts = giveFinalProducts(products, filters);

  return (
    <div className="products-screen">
      <Filters />
      <ProductListing products={finalProducts} />
    </div>
  );
}

export { ProductsScreen };
