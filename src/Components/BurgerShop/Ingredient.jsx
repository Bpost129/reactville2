
const Ingredient = (props) => {
	return (
		<li>
			<p>{props.ingredient.name}</p>
			<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
			<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
		</li>
	)
}

export default Ingredient