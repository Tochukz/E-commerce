import React, { useEffect, useState } from 'react';

import commerce from './lib/commerce';
import Product from './models/product';
import ProductList from './components/ProductList';
import ICart from './interfaces/iCart';
import CartNav from './components/CartNav';
import { createCart } from './helpers/factory';

import './App.scss';
const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const defaultCart = createCart();
  const [cart, setCart] = useState<ICart>(defaultCart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const addToCart = (productId: any, quantity: number) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart as any);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data as Product[]);
    }).catch((error) => {
      console.error('There was an error fetching the products', error)
    });
  }

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  const updateCartQty = (lineItemId: string, quantity: number) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  const removeFromCart = (lineItemId: string) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }

  const emptyCart = () => {
    commerce.cart.empty().then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  return (
    <div className="container-fluid">
      <h2>CommerceJS ECommerce</h2>
      <CartNav cart={cart} 
               onUpdateCartQty={updateCartQty} 
               onRemoveItem={removeFromCart} 
               onEmptyCart={emptyCart} />
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
};

export default App;