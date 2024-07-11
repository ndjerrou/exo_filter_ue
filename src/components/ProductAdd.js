import React, { useState, useContext, useEffect } from 'react';

import CategoriesContext from '../context/Categories';
import ProductsContext from '../context/Products';
import CategorySelect from './CategorySelect';

function ProductAdd() {
  const { fetchCategories, categories } = useContext(CategoriesContext);
  const { onAddProduct } = useContext(ProductsContext);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    //@FIX : horrible !!!
    onAddProduct({ ...formData, id: Math.random() });

    setFormData({
      title: '',
      price: '',
      category: '',
    });
  };

  return (
    <div>
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit}>
        Title :{' '}
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handleChange}
        />
        Price :{' '}
        <input
          type='number'
          name='price'
          placeholder='Price'
          value={formData.price}
          onChange={handleChange}
        />
        <CategorySelect onCategoryChange={handleChange} formData={formData} />
        <button disabled={!formData.category}>Add Product</button>
      </form>
    </div>
  );
}

export default ProductAdd;
