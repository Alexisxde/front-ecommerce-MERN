import './Card.css'
import test from './test.png'

function formatearNumero(num) {
	return num
		.toFixed(2)
		.replace('.', ',')
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default function Card({ card }) {
	const { img, title, stars, price, discount = 0 } = card

	let precio = price.replace('.', '').replace(',', '.')
	let precioNumerico = parseFloat(precio)
	let descuento = precioNumerico * 0.1
	let precioFinal = precioNumerico - descuento
	let precioFinalString = formatearNumero(precioFinal)

	return (
		<article className='card'>
			<img className={`card__img ${img}`} src={test} alt='' />
			<div className='card__body'>
				<h5 className='card__title'>{title}</h5>
				<div className='card__stars'>{stars} ⭐</div>
				<div className='card__prices'>
					{discount > 0 && (
						<span className='price-prev'>${precioFinalString}</span>
					)}
					<span className='price'>${price}</span>
				</div>
				{discount > 0 && (
					<div className='card__discount'>{discount}% de descuento</div>
				)}
			</div>
		</article>
	)
}
