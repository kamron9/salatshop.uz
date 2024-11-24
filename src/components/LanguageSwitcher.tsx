'use client'

import Image from 'next/image'
import { useState } from 'react'

const LanguageSwitcher = () => {
	const [language, setLanguage] = useState('uz')
	return (
		<div className='bg-white px-1 h-[32px] rounded-2xl flex items-center'>
			<button
				onClick={() => setLanguage('uz')}
				className={`transition-all duration-300 text-sm px-2 py-[2px] rounded-2xl ${
					language === 'uz' ? 'bg-buttonLight text-primary font-bold' : ''
				}`}
			>
				<Image src={'/uz.png'} alt='uz' width={23} height={23} />
			</button>
			<button
				onClick={() => setLanguage('ru')}
				className={`transition-all duration-300 text-sm px-2 py-[2px] rounded-2xl  ${
					language === 'ru' ? 'bg-buttonLight text-primary font-bold' : ''
				}`}
			>
				<Image src={'/ru.png'} alt='uz' width={23} height={23} />
			</button>
		</div>
	)
}

export default LanguageSwitcher
