import './Card.css'

export default function Card({ product }) {
	const { img, brand, model, stars, sale_price, discount, slug } = product

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
					{discount > 0 && <span className='price-prev'>${sale_price}</span>}
					<span className='price'>${sale_price}</span>
				</div>
				{discount > 0 && (
					<div className='card__discount'>{discount}% de descuento</div>
				)}
			</div>
		</a>
	)
}
