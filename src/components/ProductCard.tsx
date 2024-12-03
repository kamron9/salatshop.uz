'use client'
import { IProduct } from '@/shared/interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ShareButton from './ShareButton'

const ProductCard: FC<IProduct> = ({
	description,
	image,
	price,
	title,
	id,
}) => {
	const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	return (
		<Link href={`/menu/${id}`}>
			<div className='border border-gray p-2 sm:p-[20px] rounded-md w-full h-full flex flex-col justify-between gap-3'>
				<div className='flex justify-center'>
					<Image
						src={image}
						alt={title}
						width={134}
						priority
						height={134}
						className='w-[100px] h-[100px] sm:w-[134px] sm:h-[134px] object-cover rounded-full'
					/>
				</div>
				<div>
					<span className='font-semibold text-[15px] sm:text-lg line-clamp-1'>
						{title}
					</span>
					<p className='line-clamp-2 text-sm text-lead'>{description}</p>
				</div>
				<div className='flex items-center justify-between gap-1'>
					<span className='text-sm sm:text-base'>
						{price.toLocaleString('ru-RU')} so'm
					</span>
					<div className='flex gap-1 relative z-10'>
						<button
							onClick={addToCart}
							className='flex  items-center justify-center rounded-md bg-red w-[28px] h-[28px]'
						>
							<Image
								src={'/basket.svg'}
								width={20}
								height={20}
								alt='basket-icon'
							/>
						</button>
						<ShareButton productId={id} />
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
