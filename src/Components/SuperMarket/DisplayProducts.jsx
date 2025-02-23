import Product from './Product'

const DisplayProducts = (props) => {
  
  return (
    <div className="product-list">
      {props.products.map(product => 
        {if (product.category === props.productCategory) {
          <Product product={product} />
        }}
      )}
    </div>
  )
}

export default DisplayProducts
