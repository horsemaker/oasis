import axios from "axios";

export const removeProductFromCartService = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data.cart;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
