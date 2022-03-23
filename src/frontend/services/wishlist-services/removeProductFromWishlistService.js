import axios from "axios";

export const removeProductFromWishlistService = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
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
