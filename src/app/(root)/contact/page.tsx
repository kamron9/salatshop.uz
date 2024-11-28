'use client'

import { useState } from 'react'

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		alert('Xabaringiz muvaffaqiyatli yuborildi!')
	}

	return (
		<section className=' py-10 '>
			<div className='container'>
				<div className='text-center'>
					<h1 className='text-2xl md:text-4xl font-bold mb-4'>
						Biz bilan bog‘laning
					</h1>
				</div>
				<div className='flex flex-col md:flex-row gap-10 items-start'>
					{/* Contact Form */}
					<div className='w-full md:w-1/2 bg-white shadow-lg p-8 rounded-lg'>
						<h2 className='text-2xl font-semibold mb-6 text-gray-700'>
							Xabar yuboring
						</h2>
						<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
							<div>
								<label
									htmlFor='name'
									className='block text-gray-600 font-medium'
								>
									Ismingiz
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className='w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-green-400 outline-none'
									placeholder='Ismingizni kiriting'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='phone'
									className='block text-gray-600 font-medium'
								>
									Telefon raqamingiz
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									className='w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-green-400 outline-none'
									placeholder='Telefon raqamingizni kiriting'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-gray-600 font-medium'
								>
									Xabar
								</label>
								<textarea
									name='message'
									id='message'
									value={formData.message}
									onChange={handleChange}
									className='w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-green-400 outline-none'
									rows={5}
									placeholder='Xabaringizni yozing'
									required
								></textarea>
							</div>
							<button
								type='submit'
								className='inline-block bg-transparent border border-primary  text-primary font-semibold px-6 py-3 rounded-full shadow-md '
							>
								Yuborish
							</button>
						</form>
					</div>
					{/* Contact Info */}
					<div className='w-full md:w-1/2 flex flex-col gap-6'>
						<h2 className='text-2xl font-semibold text-gray-700'>
							Aloqa ma’lumotlari
						</h2>
						<p className='text-gray-600'>
							Savollaringiz yoki takliflaringiz bo‘lsa, biz bilan bog‘laning:
						</p>
						<div className='flex items-center gap-4'>
							<span className='text-green-500 text-2xl'>📍</span>
							<p className='text-gray-700'>
								Toshkent sh., Mirzo Ulug‘bek tumani, 123-ko‘cha
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<span className='text-green-500 text-2xl'>📞</span>
							<p className='text-gray-700'>
								<a href='tel:991234567'>+998 (99) 123-45-67</a>
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<span className='text-green-500 text-2xl'>📧</span>
							<p className='text-gray-700'>
								<a href='mailto:info@salatshop.uz'>info@salatshop.uz</a>
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<span className='text-green-500 text-2xl'>🌐</span>
							<p className='text-gray-700'>
								<a href={'https://salatshop.uz'} target='_blank'>
									www.salatshop.uz
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
