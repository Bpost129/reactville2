import { useState, useEffect } from "react"

import { getMinutes } from "../../modules/functions"

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const time = date.toLocaleTimeString()
  const currTime = getMinutes(time)
  console.log(currTime)

  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock