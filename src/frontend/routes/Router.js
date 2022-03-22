import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";
import {
  AboutUsScreen,
  CartScreen,
  HomeScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  WishlistScreen,
} from "../screens";

const Router = () => {
  const {
    auth: { status },
  } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <WishlistScreen />
          </PrivateRoute>
        }
      />
      {!status && (
        <>
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </>
      )}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export { Router };
