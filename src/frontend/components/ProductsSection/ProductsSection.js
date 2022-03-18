import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsSection.css";

const ProductsSection = ({ children, products }) => {
  return (
    <div className="products-section">
      <h1 className="h1-60">{children}</h1>
      <div className="products-carousel">
        {products.map(
          ({
            _id,
            name,
            originalPrice,
            discount,
            discountedPrice,
            rating,
            images,
            isBestseller,
            isTrending,
          }) => (
            <ProductCard
              key={_id}
              _id={_id}
              name={name}
              originalPrice={originalPrice}
              discount={discount}
              discountedPrice={discountedPrice}
              rating={rating}
              images={images}
              isBestSeller={isBestseller}
              isTrending={isTrending}
            />
          )
        )}
      </div>
    </div>
  );
};

export { ProductsSection };
