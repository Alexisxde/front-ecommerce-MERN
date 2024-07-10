import { getAllProducts } from '@api/products.api.js'
import Card from '@components/Card/Card'
import Notification from '@components/Notification/Notification'
import { useEffect, useState } from 'react'
import './CardsFeatured.css'

export default function CardsFeatured() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const getProducts = async () => {
			try {
				const data = await getAllProducts()
				setProducts(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		getProducts()
	}, [])

	if (error) return <Notification type='error' message={error} />
	if (loading) return

	return (
		<section className='featured'>
			<div className='featured__title'>
				<span>SNEAKERS</span>
				<span>featured</span>
			</div>
			<div className='featured-card'>
				{products?.map(product => (
					<Card key={product.id_product} product={product} />
				))}
			</div>
		</section>
	)
}
