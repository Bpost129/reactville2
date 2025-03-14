
const BoxHolders = (props) => {
  return (
    <div className="box-holders">
      {props.boxHolders.length ? <h4>Box Holders:</h4> : <h4>Add a Boxholder</h4>}
      {props.boxHolders.map((holder, idx) =>
        <div key={idx}>
          <p>{holder}</p>
          <button onClick={() => props.removeBoxHolder(holder)}>Remove</button>
        </div>
      )}
    </div>
  )
}

export default BoxHolders