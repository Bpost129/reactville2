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

  // console.log('Imported product data:::', products)
  // console.log('Current product category:::', productCategory)
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory} />
        <DisplayProducts products={products} productCategory={productCategory} />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket