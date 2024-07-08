import Navegation from '@components/Navegation/Navegation'
import Home from '@pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
	return (
		<main>
			<Router>
				<Navegation />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</main>
	)
}
