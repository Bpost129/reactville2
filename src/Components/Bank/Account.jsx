import { useState } from 'react'

import ControlPanel from './ControlPanel'

const Account = (props) => {
	const [balance, setBalance] = useState(0)
	const [message, setMessage] = useState('')

	const handleBalance = () => {
		
	}

	return (
		<div className="account">
			<h3>{props.name}</h3>
			<section>
				<p>Balance: {balance}</p>
				<p>Message: {message}</p>
			</section>
			<ControlPanel />
		</div>
	)
}

export default Account