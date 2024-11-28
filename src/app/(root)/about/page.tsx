import Image from 'next/image'

const AboutCompany = () => {
	return (
		<section className='relative bg-gradient-to-br from-blue-500 to-indigo-500  py-16 px-6 md:px-12'>
			<div className='container  flex flex-col-reverse md:flex-row items-center justify-between gap-6'>
				{/* Left Side - Text */}
				<div className='w-full md:w-1/2'>
					<h1 className='logo text-4xl md:text-5xl font-bold mb-4'>
						Salat<span className='text-primary'>shop</span>
					</h1>
					<p className='text-base lg:text-xl mb-6 leading-relaxed text-lead'>
						Sog‘lom va mazali taomlaringizni eshik ostonasiga yetkazamiz!
						Bizning maqsadimiz – har kuni sizni yangi va vitaminlarga boy
						salatlar bilan ta’minlash. Faqatgina tabiiy va yuqori sifatli
						mahsulotlardan foydalanib, sog‘lom ovqatlanish madaniyatini oson va
						qulay qilamiz. Bugun buyurtma bering va yangi ta’m dunyosini kashf
						eting!
					</p>
					<button className='inline-block bg-transparent border border-primary  text-primary font-semibold px-6 py-3 rounded-full shadow-md '>
						Bog'lanish
					</button>
				</div>

				{/* Right Side - Image */}
				<div className='w-full md:w-1/2'>
					<div className='relative'>
						<Image
							src='/about.png'
							alt='Kompaniya haqida'
							width={600}
							height={400}
							className='rounded-xl shadow-lg object-cover min-h-[246px]'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutCompany
