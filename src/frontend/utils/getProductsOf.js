export const getProductsOf = (value) => (products, valueArray) => {
  if (valueArray.length === 0) {
    return products;
  }
  return products.filter((product) => valueArray.includes(product[value]));
};
