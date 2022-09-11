import React, { useEffect, useState } from 'react';
import commerce from './lib/commerce';
import Product from './models/product';
import ProductList from './components/ProductList';

import './App.scss';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data as Product[]);
    }).catch((error) => {
      console.error('There was an error fetching the products', error)
    });
  }

  return (
    <div className="container-fluid">
      <h2>CommerceJS ECommerce</h2>
      <ProductList products={products}/>
    </div>
  );
};

export default App;