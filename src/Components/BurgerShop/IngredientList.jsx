import { useState, useEffect } from "react"

import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)


	useEffect(() => {
		setHasBuns(props.stack.filter(item => item.type === 'bun').length === 2)
	}, [props.stack])

	return (
		<ul>
			{props.ingredients.map((item, idx) =>
				<Ingredient key={idx} ingredient={item} addToBurger={props.addToBurger} disabled={hasBuns && item.type === 'bun'} />
			)}
		</ul>
	)
}

export default IngredientList