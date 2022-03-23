import axios from "axios";

export const addProductToCartService = async (token, product) => {
  try {
    const { data } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data.cart;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
