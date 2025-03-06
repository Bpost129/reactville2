
const SelectBox = (props) => {
  return (
    <select required name="boxNo">
      <option value="">Select PO Box</option>
      {props.boxNumbers.map((num, idx) =>
        <option key={idx} value={num}>PO Box {num}</option>
      )}
    </select>
  )
}

export default SelectBox