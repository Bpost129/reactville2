import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from './BoxHolders'

const NewBox = () => {
  const navigate = useNavigate()
  const [boxHolders, setBoxHolders] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const addBoxHolder = () => {

  }

  const removeBoxHolder = (name) => {

  }

  const handleSubmit = () => {

  }

  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: $</p>
        <button id="submit-box-btn" onClick={() => handleSubmit()}>SUBMIT</button>
      </header>

      <section>
        <BoxHolders removeBoxHolder={removeBoxHolder} />
        <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={() => setFirstName()} />
        <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={() => setLastName()} />
        <button id="add-boxholder" onClick={() => addBoxHolder()}>ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox