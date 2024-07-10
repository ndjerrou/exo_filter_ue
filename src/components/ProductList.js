import React, { useContext } from 'react';
import ProductsContext from '../context/Products';
import ProductShow from './ProductShow';

function ProductList({ products }) {
  // const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(product => (
        <ProductShow key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
