
const Ingredient = (props) => {
	return (
		<li style={{backgroundColor: props.ingredient.color}}>
			<p>{props.ingredient.name}</p>
			<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
			<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
		</li>
	)
}

export default Ingredient