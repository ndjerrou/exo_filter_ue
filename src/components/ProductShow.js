import React, { useContext } from 'react';
import ProductsContext from '../context/Products';

function ProductShow({ title, category, price, id }) {
  const { onDeleteProductById } = useContext(ProductsContext);

  return (
    <div key={id} style={{ border: '2px solid grey', padding: 10 }}>
      <div>{title}</div>
      <p>{price} €</p>
      <p>{category}</p>
      <button onClick={() => onDeleteProductById(id)}>Delete me!</button>
    </div>
  );
}

export default ProductShow;
