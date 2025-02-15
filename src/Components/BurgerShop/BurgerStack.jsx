import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.map(item =>
        <Ingredient key={item._id} ingredient={item} removeFromBurger={props.removeFromBurger} />
      )}
    </ul>
  )
}

export default BurgerStack