
const InputPad = ({ setAmount, amount }) => {

  const addToAmount = (e) => {
    setAmount(amount += e.target.innerText)
    console.log(amount)
  }

  return (
    <div className="number-pad">
      <button onClick={addToAmount}>1</button>
      <button onClick={addToAmount}>2</button>
      <button onClick={addToAmount}>3</button>
      <button onClick={addToAmount}>4</button>
      <button onClick={addToAmount}>5</button>
      <button onClick={addToAmount}>6</button>
      <button onClick={addToAmount}>7</button>
      <button onClick={addToAmount}>8</button>
      <button onClick={addToAmount}>9</button>
      <button onClick={addToAmount}>.</button>
      <button onClick={addToAmount}>0</button>
      <button onClick={addToAmount}>00</button>
    </div>
  )
}

export default InputPad