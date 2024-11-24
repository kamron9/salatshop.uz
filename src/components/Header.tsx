import { navbar } from '@/constants/navbar'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import BurgerMenu from './BurgerMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
	return (
		<header className=' h-[var(--header-height)]  py-4'>
			<div className='flex items-center justify-between container'>
				<Link href={'/'} className='text-3xl font-bold logo'>
					Salat<span className='text-primary'>shop</span>
				</Link>
				<div className='flex items-center gap-8'>
					<nav className='hidden md:flex gap-8 '>
						{navbar.map((item, index) => (
							<ActiveLink key={index} href={item.path}>
								{item.title}
							</ActiveLink>
						))}
					</nav>
					<div className='flex items-center gap-2'>
						<Link href={'/cart'}>
							<button className='flex gap-2 bg-primary text-white px-4 py-1 rounded-2xl'>
								<Image
									src={'/cart.svg'}
									alt='cart-icon'
									width={20}
									height={20}
								/>{' '}
								| <span>0</span>
							</button>
						</Link>
						<LanguageSwitcher />
						{/* burger menu */}

						<BurgerMenu />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
