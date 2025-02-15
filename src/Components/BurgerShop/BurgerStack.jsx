
const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.map(item =>
        <li>{item}</li>
      )}
    </ul>
  )
}

export default BurgerStack