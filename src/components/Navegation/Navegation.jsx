import Cart from '@icon/Cart'
import Moon from '@icon/Moon'
import Sun from '@icon/Sun'
import { useEffect, useState } from 'react'
import './Navegation.css'
// import logo from '@public/logo.svg'

export default function Navegation() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<header className='header'>
			<a href='/' className='header__logo'>
				{/* <img src={logo} alt='Logo CSS' /> */}
				<span>SNEAKERS</span>
			</a>
			<nav className='header__nav'>
				<a href=''>Sneakers</a>
				<a href=''>Messages</a>
				<div className='header__mode'>
					<button onClick={toggleTheme}>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</button>
				</div>
				<section className='header__cart'>
					<button>
						<Cart />
					</button>
				</section>
			</nav>
		</header>
	)
}
