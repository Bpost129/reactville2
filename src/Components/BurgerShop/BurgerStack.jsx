import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  if (!props.stack.length) return <ul className="burger-stack" style={{textAlign: 'center'}}>No ingredients yet</ul>

  return (
    <ul className="burger-stack">
      {props.stack.map((item, idx) =>
        <Ingredient key={item._id} ingredient={item} removeFromBurger={props.removeFromBurger} idx={idx} />
      )}
    </ul>
  )
}

export default BurgerStack