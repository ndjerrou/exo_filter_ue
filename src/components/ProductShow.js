import React, { useContext } from 'react';
import ProductsContext from '../context/Products';

function ProductShow({ product }) {
  const { onDeleteProduct } = useContext(ProductsContext);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>$ {product.price}</p>
      <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
    </div>
  );
}

export default ProductShow;
