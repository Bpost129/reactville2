import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map(item =>
				<Ingredient key={item._id} ingredient={item} addToBurger={props.addToBurger} />
			)}
		</ul>
	)
}

export default IngredientList