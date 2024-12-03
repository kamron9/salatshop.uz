import ShareButton from '@/components/ShareButton'
import { getSingleProduct } from '@/service/productService'
import { IProduct } from '@/shared/interface'
import { Metadata } from 'next'
import Image from 'next/image'

interface Params {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	try {
		const id = (await params).id

		const product = await getSingleProduct(Number(id))

		return {
			title: product.title,
			description: product.description,
			openGraph: {
				title: product.title,
				description: product.description,
				images: [
					{
						url: product.image,
						width: 800,
						height: 600,
						alt: product.title,
					},
				],
			},
			twitter: {
				card: 'summary_large_image',
				title: product.title,
				description: product.description,
				images: [product.image],
			},
		}
	} catch (error) {
		console.log(error, 'error occured while generating metadaga')
		return {
			title: 'Product not found',
			description: 'The product you are looking for does not exist.',
		}
	}
}
const SingleProduct = async ({ params }: Params) => {
	try {
		const id = (await params).id

		const product = (await getSingleProduct(Number(id))) as IProduct
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
							<div className='flex  gap-3'>
								<button className='bg-red flex items-center gap-2 px-2 py-1 rounded-md text-white'>
									<Image
										src={'/cart.svg'}
										width={20}
										height={20}
										alt='cart-icon'
									/>
									<span>Savatga qo'shish</span>
								</button>
								<ShareButton isPage productId={product.id} />
							</div>
						</div>
					</div>
				</div>
			</>
		)
	} catch (error) {
		return (
			<div>
				<div className='container py-4 '>
					<div className='flex bg-white p-16 rounded-md gap-16'>
						Product not found
					</div>
				</div>
			</div>
		)
	}
}
export default SingleProduct
