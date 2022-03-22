import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useNavbar } from "../../contexts";
import { ResponsiveNavbar } from "../ResponsiveNavbar/ResponsiveNavbar";
import "./Navbar.css";

function Navbar() {
  const { showNavbar, toggleNavbar } = useNavbar();
  const { isAuth, signoutHandler } = useAuth();

  return (
    <>
      <ResponsiveNavbar />
      <header className="header">
        <nav className="navbar">
          <section className="navbar-brand">
            <span
              className="material-icons navbar-menu-icon"
              onClick={toggleNavbar}
            >
              {showNavbar ? "close" : "menu"}
            </span>
            <NavLink to="/">
              <img
                className="brand-logo"
                src="/assets/Oasis/Logos/oasis-logo-rectangle.svg"
                alt="Oasis"
              />
            </NavLink>
          </section>
          <section className="navbar-menu">
            <ul className="navbar-links">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar-link-active" : "navbar-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar-link-active" : "navbar-link"
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar-link-active" : "navbar-link"
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="navbar-actions">
            <span className="navbar-action navbar-search">
              <span className="material-icons navbar-icon navbar-search-icon">
                search
              </span>
            </span>
            <span className="navbar-action">
              <NavLink to="/cart">
                <span className="badge badge-icon">
                  <span className="material-icons navbar-icon">
                    shopping_cart
                  </span>
                  <span className="badge-content badge-small badge-color badge-right">
                    3
                  </span>
                </span>
              </NavLink>
            </span>
            <span className="navbar-action">
              <span className="material-icons navbar-icon">perm_identity</span>
              <ul className="dropdown-content list-simple list-cursor-pointer list-style-none">
                <li>
                  {isAuth ? (
                    <span className="navbar-link" onClick={signoutHandler}>
                      Sign Out
                    </span>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "navbar-link-active" : "navbar-link"
                      }
                      to="/signin"
                    >
                      Sign In
                    </NavLink>
                  )}
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "navbar-link-active" : "navbar-link"
                    }
                    to="/wishlist"
                  >
                    Wishlist
                  </NavLink>
                </li>
              </ul>
            </span>
          </section>
        </nav>
      </header>
    </>
  );
}

export { Navbar };
