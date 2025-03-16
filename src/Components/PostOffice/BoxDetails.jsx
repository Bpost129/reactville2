import { useParams, useNavigate } from "react-router-dom"

import LetterList from './LetterList'

const BoxDetails = ({ boxes, letters, markAsRead }) => {
  const navigate = useNavigate()
  const { boxNo } = useParams()
  const poBox = boxes[boxNo]

  if (poBox) {
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
        <LetterList letters={letters} letterIds={poBox.letters} markAsRead={markAsRead} />
      </section>
    )
  } else {
    return (
      <div>
        <h4>Hmm, this box doesn't seem to exist.</h4>
        <button onClick={() => navigate('/postoffice')}>Return To Lobby</button>
      </div>
    )
  }
}

export default BoxDetails