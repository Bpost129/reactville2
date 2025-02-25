import { useState } from 'react'
import '../../styles/super-market.css'

// Components & Data
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'


import { products } from '../../data/market-data'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  const addToCart = (item) => {
    console.log('added to cart!!')
    const oldItem = cart.find(cartItem => {
      return cartItem.id === item.id
    })
    if (oldItem) {
      setCart(cart.map(stash => stash.id === item.id
        ? { ...stash, quantity: stash.quantity + 1 }
        : stash
      ))
    } else {
      setCart([{...item, quantity: 1}, ...cart])
    }
    console.log(cart)
  }

  const removeFromCart = (item) => {
    console.log('Item Removed!!!')
    if (item.quantity === 1) {
      setCart(cart.filter(stash => stash.id !== item.id))
    } else {
      setCart(cart.map(stash => stash.id === item.id
        ? { ...stash, quantity: stash.quantity - 1 }
        : stash
      ))
    }
    console.log(cart)
  }

  const clearCart = () => {
    setCart([])
  }
  
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory} />
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart} />
      </section>

      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />

    </div>
  )
}

export default SuperMarket