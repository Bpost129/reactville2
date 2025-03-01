import { useParams } from "react-router-dom"

import LetterList from './LetterList'

const BoxDetails = ({ boxes, letters}) => {
  const { boxNo } = useParams()
  const poBox = boxes[boxNo]

  console.log(poBox)
  return (
    <section className="box-details">
      <header>
        <h3>PO Box {boxNo}</h3>
        <select>
          {poBox.boxHolders.map((holder, idx) => 
            <option key={idx} value={holder}>{holder}</option>
          )}
        </select>
      </header>
      <LetterList letters={letters} letterIds={poBox.letters} />

    </section>
  )
}

export default BoxDetails