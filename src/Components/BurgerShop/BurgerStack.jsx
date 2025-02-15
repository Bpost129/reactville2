
const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.map(item =>
        <li key={item._id}>{item.name}</li>
      )}
    </ul>
  )
}

export default BurgerStack