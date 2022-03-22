import React from "react";
import { WishlistProductCard } from "../../components";
import { useWishlist } from "../../contexts";
import "./WishlistScreen.css";

function WishlistScreen() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-screen">
      {wishlist.map((wishlistProduct) => (
        <WishlistProductCard
          key={wishlistProduct._id}
          product={wishlistProduct}
        />
      ))}
    </div>
  );
}

export { WishlistScreen };
