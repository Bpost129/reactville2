import { useParams } from "react-router-dom"

const BoxDetails = ({ boxes, letters}) => {
  const { boxNo } = useParams()
  const poBox = boxes[boxNo].boxHolders

  return (
    <section className="box-details">
      <header>
        <h3>PO Box {boxNo}</h3>
        <select>
          {poBox.map((holder, idx) => 
            <option key={idx} value={holder}>{holder}</option>
          )}
        </select>
      </header>

      LetterList component here

    </section>
  )
}

export default BoxDetails