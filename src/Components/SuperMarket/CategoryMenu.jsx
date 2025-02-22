
const CategoryMenu = ({ products }) => {
  const categories = products.reduce((prev, product) => {
    if (!prev.includes(product.category)) prev.push(product.category)
    return prev
  }, [])

  return (
    <select>
      {categories.map((cat, idx) => 
        <option key={idx}>
          {cat}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu