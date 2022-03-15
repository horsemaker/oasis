import { useState, createContext, useContext } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => setShowNavbar(!showNavbar);

  return (
    <NavbarContext.Provider value={{ showNavbar, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbar = () => useContext(NavbarContext);

export { NavbarProvider, useNavbar };
