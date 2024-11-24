import { navbar } from '@/constants/navbar'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-dark text-white pt-[100px] min-h-[var(--footer-height)]'>
			<div className='container'>
				<div className='flex gap-16 justify-between flex-wrap'>
					{/* left section */}
					<div>
						<h2 className='text-3xl font-bold logo'>
							Salat<span className='text-primary'>shop</span>
						</h2>
						<p className='max-w-[300px]'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</p>
					</div>
					{/* center */}
					<nav className='flex flex-col gap-1'>
						{navbar.map((item, index) => (
							<Link className='hover:text-primary' key={index} href={item.path}>
								{item.title}
							</Link>
						))}
					</nav>
					{/* socials */}
					<div>
						<h2 className='mb-2 font-bold'>Ijtimoiy tarmoqlarimiz</h2>
						<ul className='flex items-center gap-2'>
							<li>
								<a href='#'>
									<Image
										src='/facebook.svg'
										alt='facebook'
										width={30}
										height={30}
									/>
								</a>
							</li>
							<li>
								<a href='#'>
									<Image
										src='/instagram.svg'
										alt='instagram'
										width={30}
										height={30}
									/>
								</a>
							</li>
							<li>
								<a href='#'>
									<Image
										src='/telegram.svg'
										alt='telegram'
										width={30}
										height={30}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr className='my-4' />

				<div className='pb-2 text-center'>
					<p>© 2021 Salatshop. Barcha huquqlar himoyalangan</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
