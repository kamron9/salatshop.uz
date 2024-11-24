'use client'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Banner = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = ['/salad.png', '/salad2.png', '/salad3.png']

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => prev + 1)
		}, 3000)
		return () => clearInterval(interval)
	}, [images.length])
	console.log('currentIndex', currentIndex)

	return (
		<section className='main-section section relative'>
			<div className='container flex justify-between flex-col-reverse md:flex-row gap-5'>
				{/* left side */}
				<div className='w-full  flex flex-col gap-[25px] mt-2 md:mt-0'>
					<div className='text-center md:text-start'>
						<Tag>Tezkor Yetkazish</Tag>
					</div>
					<h1 className='text-3xl  text-center md:text-start md:text-[36px] lg:text-[48px] font-bold md:leading-[45px] lg:leading-[55px]'>
						Discover Your Favourite Food and{' '}
						<span className='text-primary slogan'>Test Forever</span>
					</h1>
					<p className='text-lead text-sm text-center md:text-start'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</p>
					<div className='text-center md:text-start'>
						<Button>Get Started</Button>
					</div>
				</div>
				{/* right side */}
				<div className='w-full  overflow-hidden flex justify-center md:justify-end items-center'>
					{images.map((image, index) => (
						<Image
							key={index}
							width={400}
							height={400}
							draggable={false}
							priority
							src={image}
							alt='salad.png'
							className={`min-h-[350px] object-contain transition-all duration-500 ${
								index === currentIndex ? 'block' : 'hidden'
							}`}
						/>
					))}
					{/* <Image
						width={400}
						height={400}
						draggable={false}
						priority
						src={'/salad.png'}
						alt='salad.png'
						className='min-h-[350px] object-contain'
					/> */}
				</div>
			</div>
		</section>
	)
}

export default Banner
