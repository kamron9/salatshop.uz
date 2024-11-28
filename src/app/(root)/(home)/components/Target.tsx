import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'

const Target = () => {
	return (
		<section className='section pb-20'>
			<div className='container flex flex-col sm:flex-row items-center gap-[20px] '>
				<div className='w-full sm:w-1/2'>
					<Image
						src={'/delivery3.png'}
						alt='fast-delivery'
						width={500}
						height={300}
						className='h-[300px] w-full object-contain sm:h-[500px]'
					/>
				</div>
				<div className='w-full sm:w-1/2 flex flex-col gap-5 items-center'>
					<div>
						<Tag>Biznning maqsad</Tag>
					</div>
					<SectionTitle title='Ishonchingizni qozonamiz va sifatli xizmat ko’rsatamiz' />
					<p className='text-lead text-sm'>
						Biz sizning buyurtmalaringizni imkon qadar qisqa vaqt ichida
						yetkazib berishga intilamiz. Sifatli salatlar va tezkor xizmat –
						bizning ustuvorligimiz!
					</p>
					<p className='text-lead'>
						Salatlar yetkazib berish bo’yicha xizmatimiz bilan sizning
						kuningizni osonlashtirishga intilamiz. Har bir buyurtma biz uchun
						muhim va mijozlarimizga eng yaxshi tajribani taqdim etamiz. Faqat
						yangi mahsulotlar va ehtiyotkorlik bilan tayyorlangan salatlar!
					</p>

					<div>
						<Button>Hozir buyurtma bering</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Target
