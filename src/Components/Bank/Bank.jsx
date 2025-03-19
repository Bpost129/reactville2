import { useState } from 'react'

import Account from './Account'

import '../../styles/bank.css'

const Bank = () => {
	const [checking, setChecking] = useState(0)
	const [savings, setSavings] = useState(0)

	return (
		<div className="bank">
			<nav>
				<h1>Bank</h1>
			</nav>
			<section>
				<Account name={'Checking'} balance={checking} />
				<Account name={'Savings'} balance={savings} />
			</section>
		</div>
	)
}

export default Bank