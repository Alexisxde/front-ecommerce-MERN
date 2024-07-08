import Card from '@components/Card/Card'
import './CardsFeatured.css'

export default function CardsFeatured() {
	return (
		<section className='featured'>
			<div className='featured__title'>
				<span>SNEAKERS</span>
				<span>featured</span>
			</div>
			<div className='featured-card'>
				<Card
					card={{
						img: null,
						title: 'Nike Air Max 2',
						stars: 5,
						price: '100.000,00',
						discount: 10
					}}
				/>
				<Card
					card={{
						img: null,
						title: 'Nike Air Max 2',
						stars: 5,
						price: '100.000,00',
						discount: 10
					}}
				/>
				<Card
					card={{
						img: null,
						title: 'Nike Air Max 2',
						stars: 5,
						price: '100.000,00',
						discount: 10
					}}
				/>
				<Card
					card={{
						img: null,
						title: 'Nike Air Max 2',
						stars: 5,
						price: '100.000,00',
						discount: 10
					}}
				/>
				<Card
					card={{
						img: null,
						title: 'Nike Air Max 2',
						stars: 5,
						price: '100.000,00',
						discount: 10
					}}
				/>
			</div>
		</section>
	)
}
