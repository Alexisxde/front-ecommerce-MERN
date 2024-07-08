import './CardsFeatured.css'

export default function CardsFeatured() {
	return (
		<section className='featured'>
			<h2 className='featured__title'>featured</h2>
			<div className='featured-card'>
				<article className='card'>
					<h3 className='card__title'>Scroll</h3>
					<div className='card__body'>
						<p className='card__paragraph'>
							Animaciones que responden al desplazamiento del usuario, como
							efectos parallax y aparición de elementos.
						</p>
					</div>
				</article>
				<article className='card'>
					<h3 className='card__title'>Texto</h3>
					<div className='card__body'>
						<p className='card__paragraph'>
							Animaciones para texto, incluyendo efectos de máquina de escribir,
							desvanecimiento y rotación de mensajes.
						</p>
					</div>
				</article>
				<article className='card'>
					<h3 className='card__title'>Imágenes</h3>
					<div className='card__body'>
						<p className='card__paragraph'>
							Animaciones para imágenes, como desenfoque al pasar el ratón,
							transiciones suaves y zoom para destacar detalles.
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}
