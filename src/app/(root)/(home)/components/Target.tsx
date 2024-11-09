import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'

const Target = () => {
	return (
		<section className='section'>
			<div className='container flex items-center gap-[20px]'>
				<div className='w-1/2'>
					<Image
						src={'/fast-delivery.svg'}
						alt='fast-delivery'
						width={500}
						height={300}
						className=''
					/>
				</div>
				<div className='w-1/2 flex flex-col gap-5'>
					<div>
						<Tag>Our Target</Tag>
					</div>
					<SectionTitle title='We Earn Your Trust and are Diligent in Your Case' />
					<p className='text-lead'>
						When an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting,
					</p>
					<p className='text-lead'>
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
					<div>
						<Button>Order now</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Target
