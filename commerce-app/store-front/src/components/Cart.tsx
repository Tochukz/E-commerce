import React, { useContext } from 'react';
import AppContext from '../AppContext';
import ICart from '../interfaces/iCart';
import CartItem from './CartItem';

type CartProp = {
}

const Cart: React.FC<CartProp>  = function() { 
  const appContext = useContext(AppContext);
  const cart = appContext.cart;
  
  return (
    <div>
      <h4>&nbsp;Shopping Cart</h4>
      { 
        cart.total_unique_items == 0 ?
        <p>You have no items in your shopping cart, start adding some!</p>
        :
        <div>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              { cart.line_items.map((lineItem) => 
                <CartItem item={lineItem} />
              )}
              <tr>
                <td colSpan={3}>
                  <strong>Subtotal</strong>
                </td>
                <td colSpan={2}>{cart.subtotal.formatted_with_symbol}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-right">
            <button className="btn btn-sm btn-danger" onClick={appContext.emptyCart}>Empty cart</button>
            {' '}
            <button className="btn btn-sm btn-success">Checkout</button> 
          </div>
        </div>
      }
    </div>
  )
}

export default Cart;