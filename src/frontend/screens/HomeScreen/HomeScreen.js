import "./HomeScreen.css";
import React from "react";
import { Banner, PlantsSections, ProductsSection } from "../../components";
import { useProducts } from "../../contexts";

function HomeScreen() {
  const { bestSellerProducts, trendingProducts } = useProducts();

  return (
    <div className="home-screen">
      <Banner />
      <div className="featured-products">
        <ProductsSection products={bestSellerProducts}>
          Our <span className="hl-green">Bestsellers</span>
        </ProductsSection>
        <ProductsSection products={trendingProducts}>
          <span className="hl-green">Trending</span> Flora
        </ProductsSection>
      </div>
      <div class="plants-section">
        <PlantsSections />
      </div>
    </div>
  );
}

export { HomeScreen };
