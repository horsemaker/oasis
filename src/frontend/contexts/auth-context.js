import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const authInitialState = localStorage.getItem("authToken") ? true : false;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(authInitialState);

  const signinHandler = async (e, user) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      setIsAuth(true);
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
        email: user.name,
        password: user.password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signoutHandler = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
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
