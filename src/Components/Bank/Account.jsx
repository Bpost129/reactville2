
import ControlPanel from './ControlPanel'

const Account = (props) => {
	return (
		<div className="account">
			<h3>{props.name}</h3>
			<section>
				<p>Balance: {props.balance}</p>
				<p>Message:</p>
			</section>
			<ControlPanel />
		</div>
	)
}

export default Account