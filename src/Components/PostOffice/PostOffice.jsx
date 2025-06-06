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

	const nextBoxNumber = Object.keys(boxes).length
	const nextLetterId = Object.keys(letters).length

	const markAsRead = (id, status) => {
		setLetters({ ...letters, [id]: {...letters[id], read: status} })
	}

	const createBox = (nameArr, cost) => {
		if (props.handleExchange(cost) !== false) {
			setBoxes({...boxes, [nextBoxNumber]: { boxHolders: nameArr, letters: [] }})
			props.handleExchange(cost)
		} else {
			return false
		}
	}

	const sendLetter = (boxNum, formData) => {
		if (props.handleExchange(0.99) !== false) {
			setLetters({ ...letters, [nextLetterId]: formData})
			const updatedLetterIds = [...boxes[boxNum].letters, nextLetterId]
			setBoxes({ ...boxes, [boxNum]: { ...boxes[boxNum], letters: updatedLetterIds }})
			props.handleExchange(0.99)
		} else {
			return false
		}
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
            element={<NewLetter boxes={boxes} sendLetter={sendLetter} />}
          />
          <Route 
            path='/boxes/new'
            element={<NewBox createBox={createBox} />}
          />
				</Routes>
			</div>

		</div>
	)
}

export default PostOffice