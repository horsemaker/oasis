export const getProductsOfRating = (products, rating) => {
  if (rating === "4 Stars & above") {
    return products.filter(({ rating }) => rating >= 4);
  } else if (rating === "3 Stars & above") {
    return products.filter(({ rating }) => rating >= 3);
  } else if (rating === "2 Stars & above") {
    return products.filter(({ rating }) => rating >= 2);
  }
  return products;
};
