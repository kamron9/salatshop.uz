import StepCard from '@/components/StepCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { IStep } from '@/shared/interface'

const Delivery = () => {
	const steps: IStep[] = [
		{
			iconUrl: '/order-now.png',
			bg: 'bg-blue',
			title: 'Buyurtma',
			description:
				'Salatlaringizni tez va oson tarzda buyurtma qiling! Bizning qulay interfeysimiz orqali sevimli taomlaringizni bir necha soniyada tanlang va buyurtma bering.',
		},
		{
			iconUrl: '/delivery.png',
			title: 'Yetkazib berish',
			bg: 'bg-primary',
			description:
				'Biz sizning salatlaringizni yangi va xavfsiz holatda yetkazib beramiz. Yetkazib berish xizmati bilan vaqtingizni tejang va taomlaringizdan zavq oling.',
		},
		{
			iconUrl: '/payment.png',
			title: 'To`lov',
			bg: 'bg-green',
			description:
				"To'lovni mahsulotni qabul qilganingizdan so'ng amalga oshirishingiz mumkin.",
		},
	]

	return (
		<div className='section  py-[96px]'>
			<div className='container'>
				<div className='text-center'>
					<SectionTitle title='Qanday ishlaymiz?' />
				</div>
				<div className='flex justify-center '>
					<p className='text-center max-w-[500px] text-lead'>
						Bizning xizmatimiz mijozlarimiz uchun qulay va tezkor tizim asosida
						ishlaydi. Salatlaringizni buyurtma qilishdan to yetkazib berish
						jarayonigacha barcha bosqichlar mukammallik sari yo’naltirilgan.
					</p>
				</div>
				{/* deliver card */}
				<div className='grid grid-cols-1 sm:grid-cols-3 justify-between gap-6 mt-8'>
					{steps.map((step, index) => (
						<StepCard
							key={index}
							bg={step.bg}
							title={step.title}
							description={step.description}
							iconUrl={step.iconUrl}
							down={index === 1}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Delivery
