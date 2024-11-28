import ProductCard from '@/components/ProductCard'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { getProducts } from '@/service/productService'
import { IProduct } from '@/shared/interface'
import Link from 'next/link'

const Products = async () => {
	let products = []
	try {
		products = await getProducts()
	} catch (error) {
		console.error('Failed to fetch product data:', error)
		return (
			<div className='text-red'>Maxsulotlarni olishda xatolik yuz berdi :(</div>
		)
	}
	return (
		<div className='section container'>
			<div className='flex flex-col items-center mb-8'>
				<div>
					<SectionTitle title='Bizning mazali salatlarimiz' />
				</div>
				<p className='max-w-[500px] text-lead text-center'>
					Salatlarimiz nafaqat mazali, balki sog’lig’ingiz uchun ham foydali!
					O'zingiz uchun eng yaxshi ingredientlardan tayyorlangan ajoyib
					salatlarni tanlang.
				</p>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-[25px]'>
				{products.slice(0, 8).map((product: IProduct) => (
					<ProductCard
						key={product.id}
						title={product.title}
						description={product.description}
						id={product.id}
						image={product.image}
						price={product.price}
					/>
				))}
			</div>
			<div className='text-center my-5'>
				<Link href='/menu'>
					<Button>Barcha mahsulotlar</Button>
				</Link>
			</div>
		</div>
	)
}

export default Products
