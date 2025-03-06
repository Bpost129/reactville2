import { useState } from 'react'

//Components & Data
import SelectBox from './SelectBox'
import SelectRecipient from './SelectRecipient'

import { initialState } from "./initialState"

const NewLetter = () => {
  const [boxNum, setBoxNum] = useState(null)
  const [letter, setLetter] = useState(initialState)

  console.log(initialState)

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }
  
  return (
    <form className="post-office-form">

      <header>
        <h3>New Letter</h3>
        <SelectBox />
        <SelectRecipient />
      </header>

      <section>
        <h4>Sender</h4>
        <input
          required
          name="sender"
          placeholder="Sender"
          value={letter.sender}
          onChange={handleChange}
        />
        <h4>Enter Subject</h4>
        <input
          required
          name="subject"
          placeholder="Subject"
          value={letter.subject}
          onChange={handleChange}
        />
        <h4>Letter Content</h4>
        <textarea
          required
          name="content"
          placeholder="Content"
          value={letter.content}
          onChange={handleChange}
        />
        <button type="submit">SEND LETTER</button>
      </section>

    </form>
  )
}

export default NewLetter