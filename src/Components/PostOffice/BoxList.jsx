import { Link } from "react-router-dom"

const BoxList = ({ boxes }) => {
  const boxList = Object.keys(boxes)

  return (
    <section className="po-box-list">
      {boxList.map((boxNo, idx) => 
        <Link
          key={idx} 
          className="po-box masked-corners"
          to={`/postoffice/${boxNo}`} 
        >
          <div className="inner-po-box masked-corners">
            BOX {boxNo}
          </div>
        </Link>
      )}
    </section>
  )
}

export default BoxList