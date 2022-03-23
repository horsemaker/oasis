import { useState, useEffect, createContext, useContext } from "react";
import { getProductsService } from "../services";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const bestSellerProducts = products.filter(
    ({ isBestseller }) => isBestseller
  );

  const trendingProducts = products.filter(({ isTrending }) => isTrending);

  useEffect(() => {
    (async () => {
      const getProductsResponse = await getProductsService();
      if (getProductsResponse !== undefined) {
        setProducts(getProductsResponse);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, bestSellerProducts, trendingProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};

export { ProductsProvider, useProducts };
