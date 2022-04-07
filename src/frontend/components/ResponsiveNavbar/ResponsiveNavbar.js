import React from "react";
import { NavLink } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/authConstants";
import { useAuth, useNavbar } from "../../contexts";
import "./ResponsiveNavbar.css";

function ResponsiveNavbar() {
  const { showNavbar, toggleNavbar } = useNavbar();
  const { auth, setAuth } = useAuth();

  const signOutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
    }));
  };

  return showNavbar ? (
    <ul className="navbar-responsive-links">
      <li onClick={toggleNavbar}>
        {auth.status ? (
          <button onClick={signOutHandler}>Sign Out</button>
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
          to="/about"
        >
          About Us
        </NavLink>
      </li>
    </ul>
  ) : (
    <></>
  );
}

export { ResponsiveNavbar };
