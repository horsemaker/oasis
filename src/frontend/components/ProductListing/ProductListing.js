import React from "react";
import { useProducts } from "../../contexts";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductListing.css";

const ProductListing = () => {
  const { products } = useProducts();
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          className="product-listing-card"
          key={product._id}
          product={product}
        />
      ))}
      {/* _id={_id}
            name={name}
            originalPrice={originalPrice}
            discount={discount}
            discountedPrice={discountedPrice}
            rating={rating}
            images={images}
            isBestSeller={isBestseller}
            isTrending={isTrending}
            isProductListingCard={true} */}
    </div>
  );
};

export { ProductListing };
