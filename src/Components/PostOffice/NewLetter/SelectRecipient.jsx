
const SelectRecipient = ({ selectedBox, handleChange}) => {
  

  return (
    <select required name="recipient" onChange={handleChange}>
      <option value="">Select Recipient</option>
      {selectedBox?.boxHolders.map((holder, idx) =>
        <option key={idx} value={holder}>{holder}</option>
      )}
    </select>
  )
}

export default SelectRecipient