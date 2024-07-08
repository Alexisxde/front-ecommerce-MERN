// import logo from '@public/logo.svg'
import './Hero.css'

export default function Hero() {
	return (
		<section className='hero'>
			<div className='hero__section'>
				<h1 className='hero__title'>Pisa con personalidad</h1>
				<p className='hero__paragraph'>
					Da pasos con estilo y comodidad, descubre nuestra colección de
					zapatillas para ti.
				</p>
			</div>
			<div className='hero__logo'>
				<div className='hero__logo-filter'></div>
				{/* <img src={logo} alt='' /> */}
			</div>
		</section>
	)
}
