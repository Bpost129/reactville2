import { NavLink } from 'react-router-dom'

// Components & Assets
import Clock from './Clock'
import Wallet from './Wallet'

import Logo from '../../assets/react-logo.png'



const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="logo" /></NavLink>
      <Wallet cash={props.cash} />
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <Clock setDaytime={props.setDaytime} />
    </nav>
  )
}

export default Nav