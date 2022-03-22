import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    status: localStorage.getItem("AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("AUTH_TOKEN"),
  });
  console.log("auth", auth);

  const signinHandler = async (e, user) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
      setAuth({
        ...auth,
        status: true,
        token: localStorage.getItem("AUTH_TOKEN"),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signupHandler = async (e, user) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
      setAuth({
        ...auth,
        status: true,
        token: localStorage.getItem("AUTH_TOKEN"),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signoutHandler = () => {
    localStorage.removeItem("AUTH_TOKEN");
    setAuth({
      ...auth,
      status: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        signinHandler,
        signupHandler,
        signoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
