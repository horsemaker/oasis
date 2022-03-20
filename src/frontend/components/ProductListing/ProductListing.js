import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductListing.css";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          className="product-listing-card"
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export { ProductListing };
