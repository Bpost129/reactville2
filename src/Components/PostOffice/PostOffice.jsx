import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import '../../styles/mail.css'

//Data & Assets
import BoxList from './BoxList'
import BoxDetails from './BoxDetails'
import NewLetter from './NewLetter/NewLetter'
import NewBox from './NewBox/NewBox'

import LobbyImg from '../../assets/post-office-lobby.png'
import { initialPOBoxes, initialLetters } from "../../data/post-data"

const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState(initialLetters)

	const markAsRead = (id, status) => {
		setLetters({ ...letters, [id]: {...letters[id], read: status} })
	}

	return (
		<div className="post-office">

			<nav>
				<h1>Post Office</h1>
				<NavLink to='/postoffice' >Lobby</NavLink>
				<NavLink to='/postoffice/letters/new' >New Letter</NavLink>
				<NavLink to='/postoffice/boxes/new' >New PO Box</NavLink>
			</nav>

			<div className="postoffice-layout">
				<section className="img-container"><img src={LobbyImg} alt="post office illustration" /></section>
				<Routes>
				<Route
            path='/'
            element={<BoxList boxes={boxes} />}
          />
          <Route 
            path='/:boxNo'
            element={<BoxDetails boxes={boxes} letters={letters} markAsRead={markAsRead} />}
          />
          <Route 
            path='/letters/new'
            element={<NewLetter />}
          />
          <Route 
            path='/boxes/new'
            element={<NewBox />}
          />
				</Routes>
			</div>

		</div>
	)
}

export default PostOffice