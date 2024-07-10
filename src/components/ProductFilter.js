import React, { useContext, useEffect, useState } from 'react';

import CategoriesContext from '../context/Categories';

function ProductFilter({ onSetFilter }) {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([]);

  const { categories } = useContext(CategoriesContext);

  useEffect(() => {
    onSetFilter({ category, priceRange });
  }, [category, priceRange]);

  const handlePriceRange = e => {
    const value = e.target.value;

    setPriceRange(value.split('-').map(Number));
  };

  return (
    <div>
      <h1>Filter by price and category</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        Catégorie :
        <select onChange={e => setCategory(e.target.value)}>
          <option value=''>All</option>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
        Price :
        <select onChange={handlePriceRange}>
          <option value=''>All</option>
          <option value='0-10'>0 - 10€</option>
          <option value='10-100'>10 - 100€</option>
          <option value='100-1000'>100 - 1000€</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
