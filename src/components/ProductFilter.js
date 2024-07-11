import React, { useContext, useEffect, useState } from 'react';
import CategorySelect from './CategorySelect';
import ProductsContext from '../context/Products';

function ProductFilter() {
  const { onFilterProducts } = useContext(ProductsContext);

  const [formData, setFormData] = useState({
    category: '',
    priceRange: '',
  });

  useEffect(() => {
    const { category, priceRange } = formData;

    onFilterProducts({
      category,
      priceRange: handlePriceRange(priceRange),
    });
  }, [formData.category, formData.priceRange]);

  const handlePriceRange = priceRangePicked => {
    return !priceRangePicked
      ? priceRangePicked
      : priceRangePicked.split('-').map(Number);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Filter by price/category</h2>
      <CategorySelect onCategoryChange={handleChange} formData={formData} />
      Price :{' '}
      <select
        name='priceRange'
        value={formData.priceRange}
        onChange={handleChange}
      >
        <option value=''>--Choose a price--</option>
        <option value='0-100'>0-100</option>
        <option value='100-200'>100-200</option>
        <option value='200-500'>200-500</option>
      </select>
    </div>
  );
}

export default ProductFilter;
