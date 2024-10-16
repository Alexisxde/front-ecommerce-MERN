import Navegation from '@components/Navegation/Navegation'
import Home from '@pages/Home/Home'
import Product from '@pages/Product/Product'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
	return (
		<main>
			<Router>
				<Navegation>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='sneaker/:slug' element={<Product />} />
					</Routes>
				</Navegation>
			</Router>
		</main>
	)
}
