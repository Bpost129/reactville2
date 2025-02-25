import { useEffect } from 'react'

import CartItem from './CartItem'

const Cart = (props) => {
  const format = (num) => (num.toFixed(2)) /* Alternate --->  (Math.round(num * 100) / 100).toFixed(2) */

  const total = format(props.cart.reduce((sum, item) => {
    return item.quantity > 1
      ? sum + (item.price * item.quantity)
      : sum + item.price
  }, 0))

  return (
    <div className="cart">
      <h3>Cart</h3>
      {props.cart.map((item, idx) => 
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      )}


      <div className="cart-total">
        <p>Total: </p>
        <p>$ {total}</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={() => props.clearCart()}>CLEAR CART</button>
    </div>
  )
}

export default Cart