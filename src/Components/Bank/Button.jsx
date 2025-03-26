
const Button = (props) => {
  return (
    <button 
      type="submit" 
      onClick={(e) => {
        e.preventDefault()
        
      }}
    >
      {props.name}
    </button>
  )
}

export default Button