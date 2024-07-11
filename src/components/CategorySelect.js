import React, { useContext } from 'react';
import CategoriesContext from '../context/Categories';

function CategorySelect({ onCategoryChange, formData }) {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      Catégorie {'   '}
      <select
        name='category'
        onChange={onCategoryChange}
        value={formData.category}
      >
        <option value=''>--Choose a category--</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default CategorySelect;
