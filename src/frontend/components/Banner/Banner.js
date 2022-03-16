import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-info">
        <div className="banner-title">
          <h1 className="h1-60">
            Delivering <span className="hl-green">Plants</span>
          </h1>
          <h1 className="h1-60">
            Delivering <span className="hl-green">Delight!</span>
          </h1>
        </div>
        <div className="banner-subtitle">
          <p>
            Shop your favorite plants in your favorable factor, air-purifiers,
            pet-friendly, succulents, herbs, and more...
          </p>
        </div>
        <button className="btn btn-link btn-teal">
          <Link className="banner-link" to="/products">
            Shop Now
            <span className="material-icons"> chevron_right </span>
          </Link>
        </button>
      </div>
      <div className="banner-images">
        <img
          className="banner-img-one"
          src="assets/Oasis/Banner/banner-img.png"
          alt="Oasis"
          />
        <img
          className="banner-img-two"
          src="assets/Oasis/Banner/banner-img-bg.svg"
          alt="Oasis"
        />
      </div>
      <div className="floating-img-div floating-img-left">
        <img
          className="floating-img"
          src="assets/Oasis/Floating Images/fig-left.svg"
          alt="Floating Decoration"
        />
      </div>
    </div>
  );
};

export { Banner };
