import ProductCard from '@/components/ProductCard'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { getProducts } from '@/service/productService'
import { IProduct } from '@/shared/interface'

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
			<div className='flex flex-col items-center mb-[81px]'>
				<div>
					<SectionTitle title='Our Delicious Dish' />
				</div>
				<p className='max-w-[500px] text-lead text-center'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry
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
				<Button>Ko'proq ko'rish</Button>
			</div>
		</div>
	)
}

export default Products
