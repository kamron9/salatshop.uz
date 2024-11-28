import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/service/productService'
import { IProduct } from '@/shared/interface'
import Search from './components/Search'

const Menu = async () => {
	const products = (await getProducts()) as IProduct[]

	return (
		<section className='container py-5'>
			<div className='flex items-center justify-between mb-4 gap-4'>
				<span className='text-2xl md:text-4xl font-bold'>Menu</span>
				<Search />
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-[25px]'>
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</section>
	)
}

export default Menu
