export default function formatNumber(price) {
	let precio = price.replace('.', '').replace(',', '.')
	let precioNumerico = parseFloat(precio)
	let descuento = precioNumerico * 0.1
	let precioFinal = precioNumerico - descuento
	return precioFinal
		.toFixed(2)
		.replace('.', ',')
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
