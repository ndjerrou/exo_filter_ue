import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/Products';
import CategoriesContext from '../context/Categories';

function ProductAdd() {
  const { addProduct } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addProduct(formData);
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
        Catégorie{' '}
        <select>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}

export default ProductAdd;
