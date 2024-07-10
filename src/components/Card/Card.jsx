import './Card.css'

function formatearNumero(num) {
	return num
		.toFixed(2)
		.replace('.', ',')
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default function Card({ product }) {
	const { img, brand, model, stars, sale_price, discount, slug } = product

	let precio = sale_price.replace('.', '').replace(',', '.')
	let precioNumerico = parseFloat(precio)
	let descuento = precioNumerico * 0.1
	let precioFinal = precioNumerico - descuento
	let precioFinalString = formatearNumero(precioFinal)

	return (
		<a className='card' href={`/sneaker/${slug}`}>
			<img
				className='card__img'
				src={`/sneakers/${img}`}
				alt={`${brand} ${model}`}
			/>
			<div className='card__body'>
				<h5 className='card__title'>
					{brand} {model}
				</h5>
				<div className='card__stars'>{stars} ⭐</div>
				<div className='card__prices'>
					{discount > 0 && (
						<span className='price-prev'>${precioFinalString}</span>
					)}
					<span className='price'>${sale_price}</span>
				</div>
				{discount > 0 && (
					<div className='card__discount'>{discount}% de descuento</div>
				)}
			</div>
		</a>
	)
}
