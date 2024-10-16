import { getOneProduct } from '@api/products.api.js'
import Notification from '@components/Notification/Notification'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'

export default function Product() {
	const { slug } = useParams()
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const getProduct = async () => {
			try {
				const data = await getOneProduct(slug)
				setProduct(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		getProduct()
	}, [slug])

	if (error) return <Notification type='error' message={error} />
	if (loading) return

	const { img, brand, model, sale_price, discount } = product

	return (
		<section className='product'>
			<div className='product__img'>
				<img src={`/sneakers/${img}`} alt='$brand . " " . $model' />
			</div>
			<div className='product__body'>
				<h2 className='fw-bold'>
					{brand} {model}
				</h2>
				<div className='prices fw-bold'>
					<span className='prev-price'>${(sale_price / 100) * discount}</span>
					<span className='price'>${sale_price}</span>
				</div>
				<p>$description</p>
				<div className='sizes'>
					<label>
						<select className='form-select mb-2' name='size'>
							<option value='$size'>$size</option>
						</select>
					</label>
				</div>
				<button className='btn-product px-4 py-2'>
					<i className='bi bi-cart4'></i>Agregar al carrito
				</button>
				<div className='size text-center'>
					<strong>No hay talles disponibles</strong>
				</div>
			</div>
			{/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
		</section>
	)
}
