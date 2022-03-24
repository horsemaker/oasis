import React from "react";
import { useCart, useWishlist } from "../../contexts";
import "./WishlistProductCard.css";

const WishlistProductCard = ({ product }) => {
  const {
    _id,
    name,
    description,
    originalPrice,
    discount,
    discountedPrice,
    images,
  } = product;

  const { removeProductFromWishlist } = useWishlist();
  const { cart, addProductToCart, updateQuantityOfProductInCart } = useCart();

  const addToCartHandler = (product) => {
    if (cart.find((cartProduct) => cartProduct._id === product._id)) {
      updateQuantityOfProductInCart(product._id, "increment");
    } else {
      addProductToCart(product);
    }
  };

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
            <button
              className="btn btn-teal"
              onClick={() => addToCartHandler(product)}
            >
              Add To Cart
            </button>
          </div>
          <div className="card-action-icons">
            <button
              className="card-action-icon top-left"
              onClick={() => removeProductFromWishlist(product._id)}
            >
              <span className="material-icons favorite-icon"> favorite </span>
            </button>
          </div>
        </div>
      </div>
      <span
        className="material-icons delete-icon"
        onClick={() => removeProductFromWishlist(product._id)}
      >
        delete
      </span>
    </div>
  );
};

export { WishlistProductCard };
