
const CategoryMenu = ({ products, setProductCategory }) => {
  const categories = products.reduce((prev, product) => {
    if (!prev.includes(product.category)) prev.push(product.category)
    return prev
  }, [])

  const changeCategory = (e) => {
    setProductCategory(e.target.value)
  }

  return (
    <select onChange={(e) => changeCategory(e)}>
      {categories.map((category, idx) => 
        <option key={idx} value={category}>
          {category}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu