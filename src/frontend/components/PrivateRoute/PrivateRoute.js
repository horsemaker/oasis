import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate replace to="/signin" />;
};

export { PrivateRoute };
