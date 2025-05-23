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

  const removeFromBurger = (idx) => {
    setStack(stack.filter((item, i) => i !== idx))
    console.log(stack)
  }

  const clearOrder = () => {
    setStack([])
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => clearOrder()}>Clear Order</button>
      </nav>
      <section>
        <IngredientList stack={stack} ingredients={ingredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop