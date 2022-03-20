import React from "react";
import { Filters, ProductListing } from "../../components";
import { useFilters, useProducts } from "../../contexts";
import { getFinalProducts } from "../../utils";
import "./ProductsScreen.css";

function ProductsScreen() {
  const { products } = useProducts();
  const { filters } = useFilters();
  const finalProducts = getFinalProducts(products, filters);

  return (
    <div className="products-screen">
      <Filters />
      <ProductListing products={finalProducts} />
    </div>
  );
}

export { ProductsScreen };
