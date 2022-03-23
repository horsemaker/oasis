import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { Rating } from "../Rating/Rating";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    originalPrice,
    discount,
    discountedPrice,
    rating,
    images,
    isBestseller,
    isTrending,
  } = product;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { wishlist, moveProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { cart, addProductToCart } = useCart();

  return (
    <div
      className={
        pathname === "/products"
          ? "product-listing-card card card-vertical"
          : "card card-vertical"
      }
    >
      <img src={images[0]} alt={name} className="card-media" />
      <div className="card-primary">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-subtitle">by Oasis</h3>
      </div>
      <Rating rating={rating} />
      <div className="card-price">
        <h4 className="card-price-discounted">₹{discountedPrice}</h4>
        <small className="card-price-original">₹{originalPrice}</small>
        <span className="card-discount">{discount}% Off</span>
      </div>
      <div className="card-actions">
        <div className="card-action-buttons">
          {cart.find((cartProduct) => cartProduct._id === _id) ? (
            <button
              className="btn btn-icon btn-teal btn-card"
              onClick={() => navigate("/cart")}
            >
              <span className="material-icons">shopping_cart</span>
              Go To Cart
            </button>
          ) : (
            <button
              className="btn btn-primary-sloid btn-teal btn-card"
              onClick={() => {
                if (auth.status) {
                  addProductToCart(product);
                } else {
                  navigate("/signin");
                }
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
        <div className="card-action-icons">
          {wishlist.find((wishlistProduct) => wishlistProduct._id === _id) ? (
            <button
              className="card-action-icon top-right"
              onClick={() => removeProductFromWishlist(product._id)}
            >
              <span className="material-icons favorite-icon"> favorite </span>
            </button>
          ) : (
            <button
              className="card-action-icon top-right"
              onClick={() => {
                if (auth.status) {
                  moveProductToWishlist(product);
                } else {
                  navigate("/signin");
                }
              }}
            >
              <span className="material-icons"> favorite_border </span>
            </button>
          )}
          <button className="card-action-icon">
            <span className="material-icons"> share </span>
          </button>
        </div>
      </div>
      {isBestseller && (
        <div className="card-badge bestseller hl">Bestseller</div>
      )}
      {isTrending && <div className="card-badge trending hl">Trending</div>}
    </div>
  );
};

export { ProductCard };
