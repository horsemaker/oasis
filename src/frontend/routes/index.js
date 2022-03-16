import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutUsScreen,
  CartScreen,
  HomeScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  WishlistScreen,
} from "../screens";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/wishlist" element={<WishlistScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
};

export { NavRoutes };
