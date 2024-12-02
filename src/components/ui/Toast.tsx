'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const Toast = () => {
	const [showToast, setShowToast] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setShowToast(false)
		}, 3000)
	}, [showToast])
	return (
		<div
			className={`shadow-xl absolute ${
				showToast ? 'top-[var(--header-height)]' : '-top-32'
			} left-1/2 flex items-center gap-2 -translate-x-1/2 z-[9999] bg-white px-5 py-2 rounded-md transition-all duration-300`}
		>
			<Image src={'/done.svg'} height={20} width={20} alt='done-icon' />
			<span className='text-[#43A047]'>done</span>
		</div>
	)
}

export default Toast
