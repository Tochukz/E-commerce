import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';
import Cart from './Cart';

type CartNavProps = {
}

const CartNav: React.FC<CartNavProps> = () => { 
  const [isCartVisible, setCartVisible] = useState(false);
  
  const appContext = useContext(AppContext);
  const cart = appContext.cart;
  
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
          <Cart />
        }  
      </div>
    </div>
    );
  };
  
  export default CartNav;