
const CartItem = ({ item }) => {
	return (
		<div className="cart-card">
			<img src={item.image} alt="product icon" />
			<span>
				<p id="product-name">{item.name}</p>
				<p id="product-price">${item.price}</p>
				<p id="product-quantity">Quantity:{item.quantity}</p>
			</span>
			<button>X</button>
		</div>
	)
}

export default CartItem