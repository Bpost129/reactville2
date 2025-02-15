
const Ingredient = (props) => {
	return (
		<li>
			<p>{props.ingredient.name}</p>
			<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
			<button>X</button>
		</li>
	)
}

export default Ingredient