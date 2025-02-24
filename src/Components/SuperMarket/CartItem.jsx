
const CartItem = (props) => {
	return (
		<div className="cart-card">
			<img src="" alt="product icon" />
			<span>
				<p id="product-name">{props.item.name}</p>
				<p id="product-price">${props.item.price}</p>
				<p id="product-quantity">Quantity:{props.item.quantity}</p>
			</span>
			<button>X</button>
		</div>
	)
}

export default CartItem