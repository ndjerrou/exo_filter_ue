import { createContext, useState } from 'react';

const ProductsContext = createContext();

export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    setProducts(data);
  };

  const addProduct = newProduct => {
    setProducts([...products, newProduct]);
  };

  const onDeleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, fetchProducts, onDeleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
