import Account from './Account'

import '../../styles/bank.css'

const Bank = ({ handleExchange }) => {
	return (
		<div className="bank">
			<nav>
				<h1>Bank</h1>
			</nav>
			<section>
				<Account name='Checking' handleExchange={handleExchange} />
				<Account name='Savings' handleExchange={handleExchange} />
			</section>
		</div>
	)
}

export default Bank