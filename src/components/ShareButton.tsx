'use client'

import Image from 'next/image'
import { useState } from 'react'

const ShareButton = ({ isPage = false }: { isPage?: boolean }) => {
	const [open, setOpen] = useState(false)
	const productUrl = window.location.href
	const productTitle = document.title

	const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
		productUrl
	)}&text=${encodeURIComponent(productTitle)}`

	const handleShare = (e: React.MouseEvent<HTMLButtonElement>) => {
		setOpen(!open)
		e.preventDefault()
	}

	const handleShareTg = () => {
		let shareUrl = telegramUrl
		window.open(shareUrl, '_blank')
	}
	const copyText = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		let element = e.target as HTMLButtonElement
		navigator.clipboard
			.writeText(productUrl)
			.then(() => {
				element.textContent = 'Nusxalandi ✅'
				setTimeout(() => {
					setOpen(false)
				}, 2000)
			})
			.catch(err => console.log('Nusxalashda xato yuz berdi.'))
	}
	return (
		<div className='relative'>
			{open && (
				<div className='bg-white px-3 py-1 shadow-xl border border-gray rounded-md absolute -bottom-24 z-[9999]'>
					<div className='flex items-center justify-between'>
						<Image
							src={'/share-telegram.svg'}
							alt='telegram'
							width={40}
							height={40}
							onClick={handleShareTg}
							className='cursor-pointer'
						/>
						<span
							onClick={() => setOpen(false)}
							className='text-2xl cursor-pointer'
						>
							&times;
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<span>{productUrl}</span>
						<button
							onClick={copyText}
							className='px-2 py-1 rounded-md border border-gray text-nowrap'
						>
							Nusxalash 🔗
						</button>
					</div>
				</div>
			)}

			<button
				onClick={handleShare}
				className={`bg-dark flex items-center justify-center  gap-2  rounded-md text-white ${
					isPage ? 'px-2 py-1' : 'w-[28px] h-[28px]'
				}`}
			>
				<Image src={'/share.svg'} width={16} height={16} alt='share-icon' />
				{isPage && <span>Ulashish</span>}
			</button>
		</div>
	)
}

export default ShareButton
