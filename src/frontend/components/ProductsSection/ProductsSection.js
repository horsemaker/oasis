import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsSection.css";

const ProductsSection = ({ children, products }) => {
  return (
    <div className="products-section">
      <h1 className="h1-60">{children}</h1>
      <div className="products-carousel">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { ProductsSection };
