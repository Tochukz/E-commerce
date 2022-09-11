import React, { useState } from 'react';
import ICart from "../interfaces/iCart";
import Cart from './Cart';

type CartNavProps = {
  cart: ICart,
  onUpdateCartQty: (lineItemId: string, quantity: number) => void,
  onEmptyCart: () => void,
  onRemoveItem: (itemId: string) => void
}

const CartNav: React.FC<CartNavProps> = ({ cart, onRemoveItem, onUpdateCartQty, onEmptyCart}) => {
  const [isCartVisible, setCartVisible] = useState(false);
  
  return (
    <div className="nav mb-4">
      <div className="text-right" onClick={() => setCartVisible(!isCartVisible)}>
        {
          isCartVisible ? 
          <button className="btn btn-secondary">
            <i className="fa fa-times"></i>
          </button>
          :
          <button className="btn btn-success">
            <i className="fa fa-shopping-cart"></i> {' '}
            {cart !== null ? <span>{cart.total_items}</span> : ''}
          </button>
        }
      </div>
      <div>
        { isCartVisible &&
          <Cart
            cart={cart}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveItem={onRemoveItem}
            onEmptyCart={onEmptyCart}
          />
        }  
      </div>
    </div>
    );
  };
  
  export default CartNav;