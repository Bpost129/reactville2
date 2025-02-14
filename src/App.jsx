import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Landing />}
          />
          <Route 
            path='/burgers'
            element={<BurgerShop />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App