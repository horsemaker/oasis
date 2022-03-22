import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { auth } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (auth.status) {
      (async () => {
        try {
          const { data } = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: auth.token,
            },
          });
          setWishlist(data.wishlist);
        } catch {}
      })();
    } else {
      setWishlist([]);
    }
  }, [auth]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }

  return context;
};

export { WishlistProvider, useWishlist };
