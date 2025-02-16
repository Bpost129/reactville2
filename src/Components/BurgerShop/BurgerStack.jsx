import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.map((item, idx) =>
        <Ingredient key={item._id} ingredient={item} removeFromBurger={props.removeFromBurger} idx={idx} />
      )}
    </ul>
  )
}

export default BurgerStack