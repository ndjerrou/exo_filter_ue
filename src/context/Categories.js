import axios from 'axios';
import { createContext, useState } from 'react';

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data: categories } = await axios(
        'https://fakestoreapi.com/products/categories?limit=4'
      );

      setCategories(categories);
    } catch (err) {
      console.log(err.message);
    }
  };

  fetchCategories();

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        fetchCategories,
        setCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
