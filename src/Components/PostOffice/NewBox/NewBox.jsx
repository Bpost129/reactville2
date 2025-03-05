import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from './BoxHolders'

const NewBox = () => {
  const navigate = useNavigate()
  const [boxHolders, setBoxHolders] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const fullName = firstName + " " + lastName

  const handleChange = (e) => {
    if (e.target.name === 'firstName') setFirstName(e.target.value)
    else setLastName(e.target.value)
  }

  const addBoxHolder = () => {
    setBoxHolders([...boxHolders, fullName])
    setFirstName('')
    setLastName('')
  }

  const removeBoxHolder = (name) => {

  }

  const handleSubmit = () => {

  }

  const handleRedirect = () => {
    navigate('/postoffice')
  }

  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: $</p>
        <button id="submit-box-btn" onClick={() => handleSubmit()}>SUBMIT</button>
      </header>

      <section>
        <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
        <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={handleChange} />
        <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={handleChange} />
        <button id="add-boxholder" onClick={() => addBoxHolder()}>ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox