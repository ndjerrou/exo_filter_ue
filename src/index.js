import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/Products';
import { CategoriesProvider } from './context/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </ProductsProvider>
);
