import { useState } from 'react'

//Components & Data
import SelectBox from './SelectBox'
import SelectRecipient from './SelectRecipient'

import { initialState } from "./initialState"

const NewLetter = ({ boxes, sendLetter }) => {
  const [boxNum, setBoxNum] = useState(null)
  const [letter, setLetter] = useState(initialState)
  const boxNumbers = Object.keys(boxes)
  const selectedBox = boxes[boxNum]

  // console.log(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    sendLetter(boxNum, letter)
    setLetter(initialState)
  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }
  
  return (
    <form className="post-office-form" onSubmit={handleSubmit}>

      <header>
        <h3>New Letter</h3>
        <SelectBox setBoxNum={setBoxNum} boxNumbers={boxNumbers} />
        <SelectRecipient selectedBox={selectedBox} handleChange={handleChange} />
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