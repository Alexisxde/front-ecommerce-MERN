import './Hero.css'
import sneaker from './sneaker-image.png'

export default function Hero() {
	return (
		<section className='hero'>
			<span className='hero__title'>snea.</span>
			<span className='hero__title'>ker</span>
			<span className='hero__title'>HASTA 40% OFF</span>
			<span className='hero__title'>DESCUENTOS SOLO HOY</span>
			<img className='hero__img' src={sneaker} />
			{/* <div className='hero__filter hero__filter-1'></div>
			<div className='hero__filter hero__filter-2'></div> */}
		</section>
	)
}
