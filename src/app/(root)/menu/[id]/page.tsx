import ShareButton from '@/components/ShareButton'
import { getSingleProduct } from '@/service/productService'
import { IProduct } from '@/shared/interface'
import { Metadata } from 'next'
import Image from 'next/image'

interface Params {
	id: string
}

export const generateMetadata = async ({
	params,
}: {
	params: Params
}): Promise<Metadata> => {
	return {
		title: `Single Product ${params.id}`,
		description: `Single Product ${params.id}`,
	}
}
const SingleProduct = async ({ params }: { params: Params }) => {
	const product = (await getSingleProduct(Number(params.id))) as IProduct

	return (
		<>
			<div className='container py-4'>
				<div className='flex bg-white p-16 rounded-md gap-16'>
					<div>
						<Image
							src={product.image}
							alt={product.title}
							width={500}
							height={500}
							className='rounded-full w-[400px] h-[400px]'
						/>
					</div>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-bold'>{product.title}</h1>
						<p className='text-lead max-w-[500px]'>{product.description}</p>
						<span className='text-bold'>
							{product.price.toLocaleString('ru-Ru')} so'm
						</span>
						<div className='flex items-center gap-3'>
							<button className='bg-red flex items-center gap-2 px-3 py-1 rounded-md text-white'>
								<Image
									src={'/cart.svg'}
									width={20}
									height={20}
									alt='cart-icon'
								/>
								<span>Savatga qo'shish</span>
							</button>
							<button className='bg-dark flex items-center gap-2 px-3 py-1 rounded-md text-white'>
								<Image
									src={'/share.svg'}
									width={15}
									height={15}
									alt='share-icon'
								/>
								<span>Ulashish</span>
							</button>
							<ShareButton />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default SingleProduct
