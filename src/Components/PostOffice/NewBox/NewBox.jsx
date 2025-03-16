import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from './BoxHolders'

const NewBox = ({ createBox }) => {
  const navigate = useNavigate()
  const [boxHolders, setBoxHolders] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
    navigate('/postoffice')
  }

  const handleSubmit = () => {
    createBox(boxHolders, costOfBox)
    handleRedirect()
  }


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

export default NewBox