
const CategoryMenu = ({ products }) => {
  const categories = products.reduce((prev, product) => {
    if (!prev.includes(product.category)) prev.push(product.category)
    return prev
  }, [])

  return (
    <select>
      {categories.map(cat => 
        <option>
          {cat}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu