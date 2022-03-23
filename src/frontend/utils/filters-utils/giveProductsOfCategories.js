export const giveProductsOfCategories = (products, categories) => {
  if (categories.length === 0) return products;

  return products.filter(
    (product) =>
      product.categories.filter((category) => categories.includes(category))
        .length > 0
  );
};
