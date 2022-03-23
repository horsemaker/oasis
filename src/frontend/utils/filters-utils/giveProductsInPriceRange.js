export const giveProductsInPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(
    ({ discountedPrice }) =>
      discountedPrice >= minPrice && discountedPrice <= maxPrice
  );
};
