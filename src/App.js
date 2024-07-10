import { useContext, useEffect, useState } from 'react';
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';
import ProductsContext from './context/Products';
import ProductFilter from './components/ProductFilter';

function App() {
  const { fetchProducts, products } = useContext(ProductsContext);
  const [filter, setFilter] = useState({ category: '', priceRange: '' });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  const applyFilter = ({ category, priceRange }) => {
    console.log(category, priceRange);

    setFilter({ category, priceRange });
  };

  useEffect(() => {
    const filterProducts = () => {
      let actualProducts = [...products];
      console.log(actualProducts);
      if (filter.category)
        actualProducts = actualProducts.filter(
          product => product.category === filter.category
        );

      if (filter.priceRange)
        actualProducts = actualProducts.filter(
          product =>
            product.price >= filter.priceRange[0] &&
            product.price <= filter.priceRange[1]
        );

      return actualProducts;
    };

    // Check if products are fetched and filter criteria is set
    if (
      products.length > 0 &&
      (filter.category || filter.priceRange.length > 0)
    ) {
      const newFilteredProducts = filterProducts();
      setFilteredProducts(newFilteredProducts);
      console.log('if');
    } else {
      // If no filter criteria, show all products
      console.log('else');
      setFilteredProducts(products);
    }
  }, [filter, products]);

  return (
    <>
      <ProductAdd />
      <ProductFilter onSetFilter={applyFilter} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
