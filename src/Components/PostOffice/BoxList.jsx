import { Link } from "react-router-dom"

const BoxList = ({ boxes }) => {
  const boxList = Object.keys(boxes)
  console.log('BoxList:::  ' + boxList)
  return (
    <section className="po-box-list">
      {boxList.map(box => 
        <Link to={`/postoffice/${box}`} box={boxes.box}>Box {box}</Link>
      )}
      Use the map function and Link component here
    </section>
  )
}

export default BoxList