import ActiveLink from './ActiveLink'
import BurgerMenu from './BurgerMenu'

const Header = () => {
	return (
		<header className='bg-lightOrange h-[var(--header-height)]  py-4'>
			<div className='flex items-center justify-between container'>
				<h3 className='text-xl font-bold'>
					Safia <span className='text-primary'>Salad</span>
				</h3>
				<nav className='hidden md:flex gap-8 '>
					<ActiveLink href='/'>Asosiy</ActiveLink>
					<ActiveLink href='/about'>Biz haqimizda</ActiveLink>
					<ActiveLink href='/menu'>Menu</ActiveLink>
					<ActiveLink href='/contact'>Bog'lanish</ActiveLink>
				</nav>
				{/* burger menu */}
				<BurgerMenu />
			</div>
		</header>
	)
}

export default Header
