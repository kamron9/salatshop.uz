import { IStep } from '@/shared/interface'
import { FC } from 'react'

const StepCard: FC<IStep> = ({ iconUrl, title, bg, description, down }) => {
	return (
		<div
			className={`${
				down ? 'sm:transform sm:translate-y-12' : ''
			} flex flex-col items-center justify-center gap-3 p-4 sm:p-0 lg:p-8`}
		>
			{/* icon */}
			<div
				className={`w-[88px] h-[88px] ${bg}  flex items-center justify-center rounded-full`}
			>
				<img src={iconUrl} alt={title} />
			</div>
			{/* card title */}
			<span className='text-[20px] font-semibold'>{title}</span>
			{/* card text */}
			<p className='text-sm text-lead text-center'>{description}</p>
		</div>
	)
}

export default StepCard
