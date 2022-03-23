import { giveProductsInPriceRange } from "./giveProductsInPriceRange";
import { giveProductsOfCategories } from "./giveProductsOfCategories";
import { giveProductsOfMaintenance } from "./giveProductsOfMaintenance";
import { giveProductsOfRating } from "./giveProductsOfRating";
import { giveProductsOfSize } from "./giveProductsOfSize";
import { giveProductsOfSunlight } from "./giveProductsOfSunlight";
import { giveProductsSorted } from "./giveProductsSorted";

export const giveFinalProducts = (products, filters) => {
  const {
    minPrice,
    maxPrice,
    sortBy,
    collections: { size, sunlight, maintenance },
    categories,
    rating,
  } = filters;

  const productsInPriceRange = giveProductsInPriceRange(
    products,
    minPrice,
    maxPrice
  );

  const productsSorted = giveProductsSorted(productsInPriceRange, sortBy);

  const productsOfSize = giveProductsOfSize(productsSorted, size);

  const productsOfSunlight = giveProductsOfSunlight(productsOfSize, sunlight);

  const productsOfMaintenance = giveProductsOfMaintenance(
    productsOfSunlight,
    maintenance
  );

  const productsOfCategories = giveProductsOfCategories(
    productsOfMaintenance,
    categories
  );

  const productsOfRating = giveProductsOfRating(productsOfCategories, rating);

  return productsOfRating;
};
