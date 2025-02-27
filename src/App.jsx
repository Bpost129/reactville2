import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import PostOffice from './Components/PostOffice/PostOffice'

const App = () => {
  const [daytime, setDaytime] = useState(true)
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    if (cash - amt > 0) setCash((cash - amt).toFixed(2))
    else return false
  }

  return (
    <>
      <Nav setDaytime={setDaytime} cash={cash} />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Landing daytime={daytime} />}
          />
          <Route 
            path='/burgers'
            element={<BurgerShop  />}
          />
          <Route 
            path='/market'
            element={<SuperMarket handleExchange={handleExchange} />}
          />
          <Route 
            path='/postoffice/*'
            element={<PostOffice />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App