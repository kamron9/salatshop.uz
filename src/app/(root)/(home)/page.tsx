import Banner from './components/Banner'
import Delivery from './components/Delivery'
import Products from './components/Products'
import Target from './components/Target'

export default function Home() {
	return (
		<div className='relative'>
			<Banner />
			<div className='bg-white'>
				<Delivery />
				<Products />
			</div>
			<Target />
		</div>
	)
}
