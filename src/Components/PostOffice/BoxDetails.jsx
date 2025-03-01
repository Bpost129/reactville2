import { useParams } from "react-router-dom"

const BoxDetails = (props) => {
  const boxNo = useParams().boxNo

  console.log(props.boxes[boxNo])
  return (
    <section className="box-details">
      <header>
        <h3>PO Box</h3>
        <select>
          
          Use the map function to display names of boxholders here
        </select>
      </header>

      LetterList component here

    </section>
  )
}

export default BoxDetails