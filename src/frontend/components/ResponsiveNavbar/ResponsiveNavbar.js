import React from "react";
import { NavLink } from "react-router-dom";
import { useNavbar } from "../../contexts/navbar-context";
import "./ResponsiveNavbar.css";

function ResponsiveNavbar() {
  const { showNavbar, toggleNavbar } = useNavbar();

  return showNavbar ? (
    <ul class="navbar-responsive-links">
      <li onClick={toggleNavbar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li onClick={toggleNavbar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li onClick={toggleNavbar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li onClick={toggleNavbar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/wishlist"
        >
          Wishlist
        </NavLink>
      </li>
      <li onClick={toggleNavbar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link-active" : "navbar-link"
          }
          to="/aboutus"
        >
          About Us
        </NavLink>
      </li>
    </ul>
  ) : (
    <></>
  );
}

export default ResponsiveNavbar;
