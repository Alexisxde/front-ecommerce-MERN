import { getAllProducts } from '@api/products.api.js'
import CardsFeatured from '@components/CardsFeatured/CardsFeatured'
import Hero from '@components/Hero/Hero'
import { useEffect, useState } from 'react'

export default function Home() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const getProducts = async () => {
			try {
				const data = await getAllProducts()
				//! acá hay que traer los 5 productos mejores calificados...
				setData(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		getProducts()
	}, [])

	if (error) return <div>{error}</div>
	if (loading) return <div>Cargando...</div>

	return (
		<>
			<Hero />
			<CardsFeatured />
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</>
	)
}
