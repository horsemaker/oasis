import axios from "axios";

export const removeFromWishlist = async (token, id, setWishlist) => {
  const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
    headers: {
      authorization: token,
    },
  });
  setWishlist(data.wishlist);
};
