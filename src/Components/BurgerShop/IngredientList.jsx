
const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map(item => 
				<li>{item.name}</li>
			)}
		</ul>
	)
}

export default IngredientList