import axios from "axios";

export const updateQuantityOfProductInCartService = async (token, id, type) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type,
        },
      },
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
