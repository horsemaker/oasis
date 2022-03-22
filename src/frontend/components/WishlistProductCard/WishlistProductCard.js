import React from "react";
import { useAuth, useWishlist } from "../../contexts";
import "./WishlistProductCard.css";
import { removeFromWishlist } from "./../../services/wishlist-services";

const WishlistProductCard = ({ product }) => {
  const {
    name,
    description,
    originalPrice,
    discount,
    discountedPrice,
    images,
  } = product;

  const { auth } = useAuth();
  const { setWishlist } = useWishlist();

  return (
    <div className="card card-horizontal wishlist-card-horizontal">
      <div className="card-media">
        <img className="img-rsp" src={images[0]} alt="headphones" />
      </div>
      <div className="card-info">
        <div className="card-primary">
          <h2 className="card-title wishlist-card-title">{name}</h2>
          <h3 className="card-subtitle">by Oasis</h3>
          <div className="card-price">
            <h4 className="card-price-discounted">₹{discountedPrice}</h4>
            <small className="card-price-original">₹{originalPrice}</small>
            <span className="card-discount">{discount}% Off</span>
          </div>
          <div className="wishlist-card-desc">{description}</div>
        </div>
        <div className="card-actions wishlist-card-actions">
          <div className="card-action-buttons">
            <button className="btn btn-teal">Add To Cart</button>
          </div>
          <div className="card-action-icons">
            <button
              className="card-action-icon top-left"
              onClick={() =>
                removeFromWishlist(auth.token, product._id, setWishlist)
              }
            >
              <span className="material-icons favorite-icon"> favorite </span>
            </button>
          </div>
        </div>
      </div>
      <span
        className="material-icons delete-icon"
        onClick={() => removeFromWishlist(auth.token, product._id, setWishlist)}
      >
        delete
      </span>
    </div>
  );
};

export { WishlistProductCard };
