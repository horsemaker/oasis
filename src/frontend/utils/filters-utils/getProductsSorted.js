export const getProductsSorted = (products, sortBy) => {
  if (sortBy === "Price - Low to High") {
    return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortBy === "Price - High to Low") {
    return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  return products;
};
