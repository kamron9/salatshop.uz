import ShareButton from '@/components/ShareButton'
import { getSingleProduct } from '@/service/productService'
import { IProduct } from '@/shared/interface'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
			icons: product.image,
			openGraph: {
				type: 'website', // Open Graph uchun content turi
				title: product.title,
				description: product.description,
				images: [
					{
						url: product.image,
						width: 1200, // Optimal kenglik (Telegram va boshqalar uchun)
						height: 630, // Optimal balandlik (1.91:1 nisbati)
						alt: product.title,
					},
				],
				locale: 'en_US', // Til va mamlakat kodi (agar kerak bo'lsa o'zgartiring)
				siteName: 'SalatShop', // Veb-sayt nomi
			},
			twitter: {
				card: 'summary_large_image', // Twitterda katta rasm bilan karta ko'rinishi
				site: '@salatshop', // Twitter akkaunt username (agar bor bo'lsa)
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
					<div className='flex flex-col md:flex-row bg-white p-8 md:p-16 rounded-md gap-4 md:gap-16'>
						<div>
							<Image
								src={product.image}
								alt={product.title}
								width={500}
								height={500}
								className=' max-h-[350px] h-full object-contain'
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<h1 className='text-2xl md:text-4xl font-bold'>
								{product.title}
							</h1>
							<p className='text-lead max-w-[500px]'>{product.description}</p>
							<span className='text-bold'>
								{product.price.toLocaleString('ru-Ru')} so'm
							</span>
							<div className='flex md:flex-col lg:flex-row  gap-3'>
								<button className='bg-red inline-flex w-fit items-center gap-2 px-2 py-1 rounded-md text-white'>
									<Image
										src={'/cart.svg'}
										width={20}
										height={20}
										alt='cart-icon'
									/>
									<span className='text-nowrap'>Savatga qo'shish</span>
								</button>
								<ShareButton isPage productId={product.id} />
							</div>
						</div>
					</div>
					<div className='text-center py-4'>
						<Link href='/menu'>
							<button className='px-4 py-2 bg-primary text-white rounded-md'>
								Menuga qaytish
							</button>
						</Link>
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
