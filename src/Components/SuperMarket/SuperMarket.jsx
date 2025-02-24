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
    const cartItem = {...item}
    cartItem.quantity ? cartItem.quantity += 1 : cartItem.quantity = 1
    // setCart([...cart, cartItem])
    console.log(cartItem)
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