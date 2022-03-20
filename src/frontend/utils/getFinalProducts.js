import { getProductsInPriceRange } from "./getProductsInPriceRange";
import { getProductsOfCategories } from "./getProductsOfCategories";
import { getProductsOfMaintenance } from "./getProductsOfMaintenance";
import { getProductsOfRating } from "./getProductsOfRating";
import { getProductsOfSize } from "./getProductsOfSize";
import { getProductsOfSunlight } from "./getProductsOfSunlight";
import { getProductsSorted } from "./getProductsSorted";

export const getFinalProducts = (products, filters) => {
  const {
    minPrice,
    maxPrice,
    sortBy,
    collections: { size, sunlight, maintenance },
    categories,
    rating,
  } = filters;

  const productsInPriceRange = getProductsInPriceRange(
    products,
    minPrice,
    maxPrice
  );

  const productsSorted = getProductsSorted(productsInPriceRange, sortBy);

  const productsOfSize = getProductsOfSize(productsSorted, size);

  const productsOfSunlight = getProductsOfSunlight(productsOfSize, sunlight);

  const productsOfMaintenance = getProductsOfMaintenance(
    productsOfSunlight,
    maintenance
  );

  const productsOfCategories = getProductsOfCategories(
    productsOfMaintenance,
    categories
  );

  const productsOfRating = getProductsOfRating(productsOfCategories, rating);

  return productsOfRating;
};
