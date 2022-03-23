export const getProductsInPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(
    ({ discountedPrice }) =>
      discountedPrice >= minPrice && discountedPrice <= maxPrice
  );
};
