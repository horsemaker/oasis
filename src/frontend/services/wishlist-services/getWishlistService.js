import axios from "axios";

export const getWishlistService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    return data.wishlist;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
