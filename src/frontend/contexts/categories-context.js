import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const categoryNames = categories.map((category) => category.name);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, categoryNames }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
};

export { CategoriesProvider, useCategories };
