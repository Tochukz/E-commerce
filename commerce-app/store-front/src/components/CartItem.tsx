import React from 'react';

type CartItemProps = {
  item: any, 
  onUpdateCartQty: (lineItemId: string, quantity: number) => void,
  onRemoveItem: (itemId: string) => void
}
 
const CartItem: React.FC<CartItemProps>  = function({ item, onUpdateCartQty, onRemoveItem }) {

  return (
    <tr>
      <td>
        <img src={item.image.url} alt={item.name} style={{width: '200px'}}/>
      </td>
      <td>
        <h4>{item.name}</h4>
      </td>
      <td>
        <button type="button" 
                className="btn btn-sm btn-primary"
                onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
        {' '}
        <span>{item.quantity}</span>
        {' '}
        <button type="button" 
                className="btn btn-sm btn-primary"
                onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
      </td>
      <td>
        <div>{item.line_total.formatted_with_symbol}</div>
      </td>
      <td>
      <button
        type="button" 
        className="btn btn-sm btn-danger"
        onClick={() => onRemoveItem(item.id)}>Remove</button>
      </td>
    </tr>
  )
}

export default CartItem