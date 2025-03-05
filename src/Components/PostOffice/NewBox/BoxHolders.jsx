
const BoxHolders = (props) => {
  return (
    <div className="box-holders">
      <h4>Boxholders:</h4>
      {props.boxHolders.map((holder, idx) =>
        <p key={idx}>{holder}</p>
      )}
      <div>
        <p>Boxholder name</p>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default BoxHolders