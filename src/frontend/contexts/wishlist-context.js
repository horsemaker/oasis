import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { auth } = useAuth();

  const [wishlist, setWishlist] = useState([]);
  console.log("wishlist", wishlist);

  useEffect(() => {
    if (auth.status) {
      console.log("wishlist if");
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
      console.log("wishlist else");
      setWishlist([]);
    }
  }, [auth]);

  const moveToWishlist = async (product) => {
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: auth.token,
        },
      }
    );
    setWishlist(data.wishlist);
  };

  const removeFromWishlist = async (product) => {
    const { data } = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: auth.token,
      },
    });
    setWishlist(data.wishlist);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, moveToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(WishlistContext);
  return context;
};

export { WishlistProvider, useWishlist };
