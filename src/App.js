import ProductAdd from './components/ProductAdd';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <ProductAdd />
      <ProductFilter />
      <ProductList />
    </div>
  );
}

export default App;
