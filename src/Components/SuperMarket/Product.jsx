
const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="product icon" />
      <section>
        <span>
          <p id="product-name">{product.name}</p>
          <p id="product-price">${product.price}</p>
        </span>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </section>
    </div>
  )
}

export default Product