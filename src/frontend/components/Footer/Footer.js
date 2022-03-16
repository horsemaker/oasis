import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer classNameName="footer">
      <div className="footer-brand">
        <Link to="/">
          <img
            className="brand-logo"
            src="assets/Oasis/Logos/oasis-logo-white.svg"
            alt="Oasis"
          />
        </Link>
        <p>
          <span>Copyright &copy; 2022 Oasis</span>
          <span>All rights reserved</span>
          <span className="footer-icons">
            <a href="https://www.instagram.com/horsemaker_/">
              <i className="fa-brands fa-instagram footer-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/yashghodekar/">
              <i className="fa-brands fa-linkedin-in footer-icon"></i>
            </a>
            <a href="https://www.doglapan.com/">
              <i className="fa-brands fa-facebook-f footer-icon"></i>
            </a>
            <a href="https://github.com/horsemaker/oasis">
              <i className="fa-brands fa-github footer-icon"></i>
            </a>
          </span>
        </p>
      </div>
      <div className="footer-actions">
        <div className="footer-action footer-sitemap">
          <h6 className="footer-title">Sitemap</h6>
          <ul className="footer-list list-style-none list-spaced">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="footer-action footer-informative">
          <h6 className="footer-title">Informative</h6>
          <ul className="footer-list list-style-none list-spaced">
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-action footer-subscribe">
          <h6 className="footer-title">Subscribe</h6>
          <div className="input-group input-email">
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address..."
              required
            />
            <button>GO</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
