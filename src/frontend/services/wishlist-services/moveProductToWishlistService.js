import axios from "axios";

export const moveProductToWishlistService = async (token, product) => {
  try {
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.wishlist;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
