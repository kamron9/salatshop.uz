'use client'
import { useState } from 'react'
import ActiveLink from './ActiveLink'
import LanguageSwitcher from './LanguageSwitcher'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
		window.document.body.style.overflow = isOpen ? 'auto' : 'hidden'
	}

	return (
		<>
			<button
				className='relative z-40 cursor-pointer md:hidden flex flex-col justify-between items-center'
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

			<aside
				className={`fixed block mobile-menu w-[350px] right-0 z-30 transition-all duration-300 ease-in-out pt-[100px]   ${
					isOpen ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<nav>
					<ul className='flex flex-col items-center gap-3 '>
						<ActiveLink href='/'>Asosiy</ActiveLink>
						<ActiveLink href='/about'>Biz haqimizda</ActiveLink>
						<ActiveLink href='/menu'>Menu</ActiveLink>
						<ActiveLink href='/contact'>Bog'lanish</ActiveLink>
					</ul>
					<div className='flex justify-center mt-5'>
						<LanguageSwitcher />
					</div>
				</nav>
			</aside>
		</>
	)
}

export default BurgerMenu
