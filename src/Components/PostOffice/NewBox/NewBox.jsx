import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from './BoxHolders'

const NewBox = ({ createBox }) => {
  const navigate = useNavigate()
  const [boxHolders, setBoxHolders] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [status, setStatus] = useState('')
  const fullName = firstName + " " + lastName
  const costOfBox = (10 * boxHolders.length)

  const handleChange = (e) => {
    if (e.target.name === 'firstName') setFirstName(e.target.value)
    else setLastName(e.target.value)
  }

  const addBoxHolder = () => {
    if (!boxHolders.includes(fullName)) {
      setBoxHolders([...boxHolders, fullName])
      setFirstName('')
      setLastName('')
    } else {
      console.log('Cannot add duplicate boxholders')
    }
  }

  const removeBoxHolder = (name) => {
    setBoxHolders(boxHolders.filter(holder => {
      return holder !== name
    }))
  }
  
  const handleRedirect = () => {
    setTimeout(() => navigate('/postoffice'), 2000)
    
  }

  const handleSubmit = () => {
    if (createBox(boxHolders, costOfBox) === false) {
      setStatus('Payment has failed')
      setTimeout(() => setStatus(''), 2000)
    } else {
      createBox(boxHolders, costOfBox)
      setStatus('Your PO Box has been created')
      handleRedirect()
    }
  }

  if (status) {
    return (
      <div className="status-msg">
        <h4>{status}</h4>
      </div>
    )
  } else {
    return (
      <section className="post-office-form">

        <header>
          <h3>New PO Box</h3>
          <p>Total: ${costOfBox}</p>
          <button id="submit-box-btn" disabled={!boxHolders.length} onClick={() => handleSubmit()}>SUBMIT</button>
        </header>

        <section>
          <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
          <input placeholder="First Name" type="text" name="firstName" value={firstName} onChange={handleChange} />
          <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={handleChange} />
          <button id="add-boxholder" disabled={!firstName || !lastName} onClick={() => addBoxHolder()}>ADD BOXHOLDER</button>
        </section>

      </section>
    )
  }
}

export default NewBox