export const giveProductsOfRating = (products, rating) => {
  switch (rating) {
    case "4 Stars & above":
      return products.filter(({ rating }) => rating >= 4);
    case "3 Stars & above":
      return products.filter(({ rating }) => rating >= 3);
    case "2 Stars & above":
      return products.filter(({ rating }) => rating >= 2);
    default:
      return products;
  }
};
