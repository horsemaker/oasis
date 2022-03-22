import axios from "axios";

export const moveToWishlist = async (token, product, setWishlist) => {
  const { data } = await axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );
  setWishlist(data.wishlist);
};
