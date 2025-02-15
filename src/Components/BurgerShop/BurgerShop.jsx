import { useState } from 'react'
import '../../styles/burger.css'

import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
    console.log(stack)
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} />
      </section>
    </div>
  )
}

export default BurgerShop