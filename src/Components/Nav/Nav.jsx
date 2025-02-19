import { NavLink } from 'react-router-dom'

// Components & Assets
import Clock from './Clock'
import Logo from '../../assets/react-logo.png'



const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="logo" /></NavLink>
      <Clock setDaytime={props.setDaytime} />
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
    </nav>
  )
}

export default Nav