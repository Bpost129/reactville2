import { useState } from "react"

import Button from "./Button"
import InputPad from './InputPad'

const ControlPanel = (props) => {
	const [amount, setAmount] = useState('')

	return (
		<div className="control-panel">
			<div id="input-display">{amount}</div>
			<InputPad setAmount={setAmount} amount={amount} />
			<section>
				<Button name="DEPOSIT" amount={amount} />
				<button onClick={() => setAmount('')}>CLEAR</button>
				<Button name="WITHDRAW" amount={amount} />
			</section>
		</div>
	)
}

export default ControlPanel