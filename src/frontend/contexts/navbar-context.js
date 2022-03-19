import { useState, useEffect, createContext, useContext } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      document.body.classList.add("overflowY-hidden");
    } else {
      document.body.classList.remove("overflowY-hidden");
    }

    const removeClass = () => {
      if (window.innerWidth >= 786) {
        document.body.classList.remove("overflowY-hidden");
      }
      if (showNavbar && window.innerWidth <= 786) {
        document.body.classList.add("overflowY-hidden");
      }
    };

    window.addEventListener("resize", removeClass);

    return () => window.removeEventListener("resize", removeClass);
  }, [showNavbar]);

  const toggleNavbar = () => setShowNavbar(!showNavbar);

  return (
    <NavbarContext.Provider value={{ showNavbar, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }

  return context;
};

export { NavbarProvider, useNavbar };
