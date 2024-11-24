'use client'
import { useState } from 'react'
import ActiveLink from './ActiveLink'
import LanguageSwitcher from './LanguageSwitcher'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<button
				className=' relative z-40 cursor-pointer md:hidden flex flex-col justify-between items-center'
				onClick={toggleMenu}
			>
				<span
					className={`inline-block w-8 h-[3px] bg-black 
						mb-2 transition-all duration-400 ${
							isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
						}`}
				></span>

				<span
					className={`inline-block w-8 h-[3px] bg-black transition-all duration-400 ${
						isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
					}`}
				></span>
			</button>

			<nav
				className={`fixed mobile-menu top-0 right-0 z-30 h-full bg-lightOrange transition-all duration-600 ease-in-out ${
					isOpen ? 'w-[300px] opacity-100' : 'w-0 opacity-0'
				}`}
			>
				<ul className='flex flex-col items-center  gap-3 mt-[100px]'>
					<ActiveLink href='/'>Asosiy</ActiveLink>
					<ActiveLink href='/about'>Biz haqimizda</ActiveLink>
					<ActiveLink href='/menu'>Menu</ActiveLink>
					<ActiveLink href='/contact'>Bog'lanish</ActiveLink>
				</ul>
				<div className='flex justify-center mt-5'>
					<LanguageSwitcher />
				</div>
			</nav>
		</>
	)
}

export default BurgerMenu
