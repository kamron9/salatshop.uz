import { navbar } from '@/constants/navbar'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import BurgerMenu from './BurgerMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
	return (
		<header className='fixed header top-0 left-0 w-full z-20 h-[var(--header-height)] py-4'>
			<div className='flex items-center justify-between container'>
				<Link href={'/'} className='text-3xl font-bold logo'>
					Salat<span className='text-primary'>shop</span>
				</Link>
				<div className='flex items-center gap-8'>
					<nav className='hidden md:flex gap-4 lg:gap-8 '>
						{navbar.map((item, index) => (
							<ActiveLink key={index} href={item.path}>
								{item.title}
							</ActiveLink>
						))}
					</nav>
					<div className='flex items-center gap-4'>
						<Link href={'/cart'}>
							<button className='flex gap-2 bg-active text-white px-4 h-[32px] items-center rounded-2xl'>
								<Image
									src={'/cart.svg'}
									alt='cart-icon'
									width={20}
									height={20}
								/>{' '}
								| <span>0</span>
							</button>
						</Link>
						<div className='hidden md:block'>
							<LanguageSwitcher />
						</div>
						{/* burger menu */}

						<BurgerMenu />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
