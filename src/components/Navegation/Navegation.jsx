import SideBarCart from '@components/SideBarCart/SideBarCart'
import Cart from '@icon/Cart'
import Moon from '@icon/Moon'
import Sun from '@icon/Sun'
import { useEffect, useState } from 'react'
import './Navegation.css'
// import logo from '@public/logo.svg'

export default function Navegation({ children }) {
	const [cart, setCart] = useState(false)
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	const toggleCart = () => {
		setCart(!cart)
	}

	return (
		<>
			<header className='header'>
				<a href='/' className='header__logo'>
					{/* <img src={logo} alt='Logo CSS' /> */}
					<span>SNEAKERS</span>
				</a>
				<nav className='header__nav'>
					<a href=''>Sneakers</a>
					<div className='header__mode'>
						<button onClick={toggleTheme}>
							{theme === 'dark' ? <Sun /> : <Moon />}
						</button>
					</div>
					<section className='header__cart'>
						<button onClick={toggleCart}>
							<Cart />
						</button>
						{cart && <SideBarCart toggleCart={toggleCart} />}
					</section>
				</nav>
			</header>
			{children}
		</>
	)
}
