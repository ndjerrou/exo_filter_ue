import React, { useContext } from 'react';
import ProductsContext from '../context/Products';
import ProductShow from './ProductShow';

function ProductList() {
  const { products } = useContext(ProductsContext);

  return !products.length ? (
    <h4>No products yet...</h4>
  ) : (
    <div>
      <h3>My products</h3>
      <div style={{ display: 'flex', gap: 10 }}>
        {products.map(product => (
          <ProductShow {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
