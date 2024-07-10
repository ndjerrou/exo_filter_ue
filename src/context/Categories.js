import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const CategoriesContext = createContext();

export default CategoriesContext;

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios('https://fakestoreapi.com/products/categories');
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ fetchCategories, categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
