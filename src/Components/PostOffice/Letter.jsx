
const Letter = ({ id, letters, markAsRead }) => {
  const thisLetter = letters[id]
  console.log('this letter::: ' + thisLetter)

  return (
    <>
      <tr>
        <td id="letter-date">{thisLetter.date}</td>
        <td id="letter-sender">{thisLetter.sender}</td>
        <td id="letter-recipient">{thisLetter.recipient}</td>
        <td id="letter-subject">{thisLetter.subject}</td>
        <td id="letter-checkbox">
          <input name="isRead" type="checkbox" checked={thisLetter.read} onClick={() => markAsRead(id, thisLetter.read)} />
        </td>
      </tr>
      <tr>
        <td id="letter-content" colSpan="5">
          {thisLetter.content}
        </td>
      </tr>
    </>
  )
}

export default Letter