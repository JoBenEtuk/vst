import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
	return (
		<main className='App'>
			<Router>
				<Routes>
					<Route path='/'>
						<Login />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
				</Routes>
			</Router>
		</main>
	)
}

export default App
