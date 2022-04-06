import React from "react";
import { Link } from "react-router-dom";
import "./PlantsSections.css";

export const PlantsSections = () => {
  return (
    <>
      <div className="plant-section">
        <div className="plant-section-visual">
          <img
            className="plant-section-img section-img-one"
            src="assets/Oasis/Sections/Opened-bro.svg"
            alt="Oasis"
          />
        </div>
        <div className="plant-section-info">
          <div className="plant-section-info-heading">
            <h1 className="h1-48">
              We are open <span className="hl-green">24/7</span>
            </h1>
            <h1>
              We will deliver your plant in just{" "}
              <span className="hl-green">2 days</span>
            </h1>
          </div>
          <div className="plant-section-info-details">
            <p>
              Unlike your regional nurseries, we are open 24/7. Browse through
              the wide range of flora we present at Oasis anytime you want!
            </p>
          </div>
          <Link to="/products" className="plant-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="floating-img-div floating-img-right">
          <img
            className="floating-img"
            src="assets/Oasis/Floating Images/fig-right.svg"
            alt="Floating Decoration"
          />
        </div>
      </div>
      {/* || Plants Section One*/}
      {/* || Plants Section Two */}
      <div className="plant-section">
        <div className="plant-section-info">
          <div className="plant-section-info-heading">
            <h1 className="h1-48">
              We have the <span className="hl-green">widest ragnge</span> of
              flora
            </h1>
            <h1>
              And we keep increasing our range{" "}
              <span className="hl-green">every month!</span>
            </h1>
          </div>
          <div className="plant-section-info-details">
            <p>
              We bring for you the widest range of flora you have ever seen!
              From succulents to herbs, we surely have what you need!
            </p>
          </div>
          <Link to="/products" className="plant-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="plant-section-visual">
          <img
            className="plant-section-img section-img-two"
            src="assets/Oasis/Sections/Blooming-bro.svg"
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
      {/* || Plants Section Two */}
      {/* || Plants Section Three */}
      <div className="plant-section">
        <div className="plant-section-visual">
          <img
            className="plant-section-img section-img-three"
            src="assets/Oasis/Sections/Florist-bro.svg"
            alt="Oasis"
          />
        </div>
        <div className="plant-section-info">
          <div className="plant-section-info-heading">
            <h1 className="h1-48">
              We bring{" "}
              <span className="hl-green">experience</span>
            </h1>
            <h1>
              The older the plant, the{" "}
              <span className="hl-green">stronger</span> it is!
            </h1>
          </div>
          <div className="plant-section-info-details">
            <p>
              We pack with ourselves a bunch of great experienced botanists!
              They help us in research &amp; care of plants at Oasis!
            </p>
          </div>
          <Link to="/products" className="plant-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="floating-img-div floating-img-right">
          <img
            className="floating-img"
            src="assets/Oasis/Floating Images/fig-right.svg"
            alt="Floating Decoration"
          />
        </div>
      </div>
      {/* || Plants Section Three */}
      {/* || Plants Section Four */}
      <div className="plant-section">
        <div className="plant-section-info">
          <div className="plant-section-info-heading">
            <h1 className="h1-48">
              We provide the{" "}
              <span className="hl-green">best plant-care</span> tips!
            </h1>
            <h1>
              Yes,{" "}
              <span className="hl-green">we care</span> too much for plants.
            </h1>
          </div>
          <div className="plant-section-info-details">
            <p>
              We know how much you love your plants. Do not hesitate to contact
              our flora ambulance whenever you need help.
            </p>
          </div>
          <Link to="/products" className="plant-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="plant-section-visual">
          <img
            className="plant-section-img section-img-four"
            src="assets/Oasis/Sections/Sprout-bro.svg"
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
      {/* || Plants Section Four */}
      {/* || Plants Section Five */}
      <div className="plant-section">
        <div className="plant-section-visual">
          <img
            className="plant-section-img section-img-five"
            src="assets/Oasis/Sections/Cactus lover-bro.svg"
            alt="Oasis"
          />
        </div>
        <div className="plant-section-info">
          <div className="plant-section-info-heading">
            <h1 className="h1-48">
              Are you also a <span className="hl-green">cactus lover?</span>
            </h1>
            <h1>
              We have a special{" "}
              <span className="hl-green">60% discount</span> for you!
            </h1>
          </div>
          <div className="plant-section-info-details">
            <p>
              We have brought a whole new range of succulents for cactus lovers!
              Go, get your succulent now! It is dying to meet you!
            </p>
          </div>
          <Link to="/products" className="plant-section-info-link">
            Shop Now<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="floating-img-div floating-img-right">
          <img
            className="floating-img"
            src="assets/Oasis/Floating Images/fig-right.svg"
            alt="Floating Decoration"
          />
        </div>
      </div>
      {/* || Plants Section Five */}
    </>
  );
};
