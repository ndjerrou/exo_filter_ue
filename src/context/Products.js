import { createContext, useState } from 'react';

const ProductsContext = createContext();

export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '' });

  const onAddProduct = newProduct => {
    setProducts(prevState => [...prevState, newProduct]);
  };

  const onDeleteProductById = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  const onFilterProducts = ({ category, priceRange }) => {
    console.log(category, priceRange);

    // @TODO : check multiple filters state !!
    setFilters({ category, priceRange });

    //   @CAREFUL !!
    let actualProducts = [...products];

    if (category) {
      actualProducts = products.filter(
        product => product.category === category
      );
    }

    if (priceRange) {
      actualProducts = actualProducts.filter(
        ({ price }) => +price >= priceRange[0] && +price < priceRange[1]
      );
    }
    setFilteredProducts(actualProducts);
  };

  const productsToDisplay =
    !filters.category && !filters.priceRange ? products : filteredProducts;

  return (
    <ProductsContext.Provider
      value={{
        products: productsToDisplay,
        onAddProduct,
        onDeleteProductById,
        onFilterProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
