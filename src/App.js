import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<main className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Login />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
				</Routes>
			</Router>
		</main>
	)
}

export default App
