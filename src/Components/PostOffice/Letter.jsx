
const Letter = ({ id, letters }) => {
  const thisLetter = letters[id]
  console.log('this letter::: ' + thisLetter)

  return (
    <>
      <tr>
        <td id="letter-date"></td>
        <td id="letter-sender"></td>
        <td id="letter-recipient"></td>
        <td id="letter-subject"></td>
        <td id="letter-checkbox">
          <input name="isRead" type="checkbox" />
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