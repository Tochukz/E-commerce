import React from 'react';

import { createCart } from './helpers/factory';

const cart = createCart();

const updateCartQty = (lineItemId: string, quantity: number) => {
}

const removeFromCart = (lineItemId: string) => {
}

const emptyCart = () => {
}

const addToCart = (productId: any, quantity: number) => {
}

const AppContext = React.createContext({cart, addToCart, updateCartQty, removeFromCart, emptyCart });

export default AppContext;