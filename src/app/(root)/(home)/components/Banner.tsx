import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'

const Banner = () => {
	return (
		<section className='section relative'>
			<div className='container flex flex-col-reverse md:flex-row items-center gap-5'>
				{/* left side */}
				<div className='w-full md:w-1/2 flex flex-col gap-[25px] mt-2 md:mt-0'>
					<div className='text-center md:text-start'>
						<Tag>Tezkor Yetkazish</Tag>
					</div>
					<h1 className='text-xl sm:text-2xl text-center md:text-start md:text-[36px] lg:text-[48px] font-bold md:leading-[45px] lg:leading-[55px]'>
						Discover Your Favourite Food and{' '}
						<span className='text-primary'>Test Forever</span>
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
				<div className='w-full md:w-1/2 flex justify-center items-center p-4'>
					<Image
						width={500}
						height={500}
						draggable={false}
						priority
						src='/image-slug.png'
						alt='slug-image'
						className='w-full md:w-1/2 -z-10 absolute right-0 top-0 h-full max-h-[350px] md:max-h-[400px] '
					/>
					<Image
						width={400}
						height={400}
						draggable={false}
						priority
						src={'/salad.png'}
						alt='salad.png'
						className='min-h-[350px] object-contain'
					/>
				</div>
			</div>
		</section>
	)
}

export default Banner
