import Close from '@icon/Close'
import './SideBarCart.css'
import test from './test.png'

export default function SideBarCart({ toggleCart }) {
	return (
		<>
			<div onClick={toggleCart} className='cart__bg'></div>
			<side className='cart'>
				<header className='cart__header'>
					<span className='cart__title'>Carrito de compras</span>
					<button onClick={toggleCart}>
						<Close />
					</button>
				</header>
				<section className='cart__body'>
					<article className='product'>
						<a className='product__img'>
							<img src={test} alt='' />
							<span className='discount'>-20%</span>
						</a>
						<div className='product__body'>
							<span className='product__title'>Nike Air Max</span>
							<div className='product__data'>
								<span className='product__price'>$100.000,00</span>
								<span className='product__price-discount'>$100.000,00</span>
							</div>
							<span className='product__size'>Talle 39</span>
						</div>
						<button className='product__button-delete'>
							<Close />
						</button>
					</article>
				</section>
				<footer className='cart__footer'>
					<div className='product__total'>
						<span>Total:</span>
						<span>$100.000,00</span>
					</div>
					<button className='product__button'>Vaciar carrito</button>
					<button className='product__button'>Finalizar la compra</button>
				</footer>
			</side>
		</>
	)
}
