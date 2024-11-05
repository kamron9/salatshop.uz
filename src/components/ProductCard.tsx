import { IProduct } from '@/shared/interface'
import Image from 'next/image'
import { FC } from 'react'

const ProductCard: FC<IProduct> = ({
	description,
	image,
	price,
	title,
	id,
}) => {
	return (
		<div className='border border-gray p-2 sm:p-[20px] rounded-md w-full h-full flex flex-col justify-between gap-3'>
			<div className='flex justify-center'>
				<Image
					src={image}
					alt={title}
					width={134}
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
				<span className='text-[12px] sm:text-base'>
					{price.toLocaleString('ru-RU')} so'm
				</span>
				<div className='flex gap-1'>
					<button className='flex  items-center justify-center rounded-md bg-red w-[28px] h-[28px]'>
						<Image
							src={'/basket.svg'}
							width={20}
							height={20}
							alt='basket-icon'
						/>
					</button>
					<button className='flex  items-center justify-center rounded-md bg-dark w-[28px] h-[28px]'>
						<Image
							src={'/share.svg'}
							width={16}
							height={16}
							alt='basket-icon'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard