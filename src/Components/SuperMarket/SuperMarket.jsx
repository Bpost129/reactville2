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
      return cartItem.name === item.name
    })
    if (oldItem) {
      setCart([{...oldItem, quantity: parseInt(`${oldItem.quantity += 1}`)}, ...cart])
    } else {
      setCart([{...item, quantity: 1}, ...cart])
    }
    console.log(cart)
  }

  // console.log('Imported product data:::', products)
  
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory} />
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart} />
      </section>

      <Cart cart={cart} />

    </div>
  )
}

export default SuperMarket