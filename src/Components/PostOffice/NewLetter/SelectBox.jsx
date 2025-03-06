
const SelectBox = (props) => {

  const handleChange = (e) => {
    props.setBoxNum(parseInt(e.target.value))
  }

  return (
    <select required name="boxNo" onChange={handleChange}>
      <option value="">Select PO Box</option>
      {props.boxNumbers.map(num =>
        <option key={num} value={num}>PO Box {num}</option>
      )}
    </select>
  )
}

export default SelectBox