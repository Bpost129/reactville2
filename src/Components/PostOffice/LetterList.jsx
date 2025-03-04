import Letter from './Letter'

const LetterList = ({ letters, letterIds, markAsRead }) => {
  return (
    <table>
      <thead>
        <tr>
          <th width="8%">Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Subject</th>
          <th width="2%">Read</th>
        </tr>
      </thead>
      <tbody>
        {letterIds.map((lid, idx) => 
          <Letter key={idx} id={lid} letters={letters} markAsRead={markAsRead} />
        )}
      </tbody>
    </table>
  )
}

export default LetterList
