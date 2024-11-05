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
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
		},
		{
			iconUrl: '/delivery.png',
			title: 'Yetkazib berish',

			bg: 'bg-primary',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
		},
		{
			iconUrl: '/payment.png',
			title: 'To`lov',
			bg: 'bg-green',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
		},
	]

	return (
		<div className='section  py-[96px]'>
			<div className='container'>
				<div className='text-center'>
					<SectionTitle title='How it works' />
				</div>
				<div className='flex justify-center '>
					<p className='text-center max-w-[500px] text-lead'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry
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
