import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-brand">
        <Link to="/">
          <img
            class="brand-logo"
            src="assets/Oasis/Logos/oasis-logo-white.svg"
            alt="Oasis"
          />
        </Link>
        <p>
          <span>Copyright &copy; 2022 Oasis</span>
          <span>All rights reserved</span>
          <span class="footer-icons">
            <a href="https://www.instagram.com/horsemaker_/">
              <i class="fa-brands fa-instagram footer-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/yashghodekar/">
              <i class="fa-brands fa-linkedin-in footer-icon"></i>
            </a>
            <a href="https://www.doglapan.com/">
              <i class="fa-brands fa-facebook-f footer-icon"></i>
            </a>
            <a href="https://github.com/horsemaker/oasis">
              <i class="fa-brands fa-github footer-icon"></i>
            </a>
          </span>
        </p>
      </div>
      <div class="footer-actions">
        <div class="footer-action footer-sitemap">
          <h6 class="footer-title">Sitemap</h6>
          <ul class="footer-list list-style-none list-spaced">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div class="footer-action footer-informative">
          <h6 class="footer-title">Informative</h6>
          <ul class="footer-list list-style-none list-spaced">
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div class="footer-action footer-subscribe">
          <h6 class="footer-title">Subscribe</h6>
          <div class="input-group input-email">
            <input
              class="input"
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
