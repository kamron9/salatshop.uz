'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

interface ShareButtonProps {
	isPage?: boolean
	productId: number
}

const ShareButton = ({ isPage = false, productId }: ShareButtonProps) => {
	const [isClient, setIsClient] = useState(false)
	const [productUrl, setProductUrl] = useState('')
	const [productTitle, setProductTitle] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsClient(true)
			setProductUrl(window.location.href)
			setProductTitle(document.title)
		}
	}, [])

	const toggleShare = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsOpen(prevState => !prevState)
	}, [])

	const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
		'https://salatshop-uz.vercel.app/menu/' +
			`${isPage ? 'menu' + productId : productId}`
	)}&text=${encodeURIComponent(productTitle)}`

	const handleShareToTelegram = useCallback(() => {
		if (isClient) {
			window.open(telegramUrl, '_blank')
		}
	}, [isClient, telegramUrl])

	const handleCopyText = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault()
			const buttonElement = e.target as HTMLButtonElement
			if (isClient) {
				navigator.clipboard
					.writeText(productUrl)
					.then(() => {
						buttonElement.textContent = 'Nusxalandi ✅'
						setTimeout(() => setIsOpen(false), 2000)
					})
					.catch(err => {
						console.error('Error copying text: ', err)
					})
			}
		},
		[isClient, productUrl]
	)

	if (!isClient) return null

	return (
		<div className='relative'>
			{isOpen && (
				<div className='bg-white px-3 py-1 shadow-xl border border-gray rounded-md absolute -bottom-24 z-[9999]'>
					<div className='flex items-center justify-between'>
						{/* Telegram share button */}
						<Image
							src={'/share-telegram.svg'}
							alt='telegram'
							width={40}
							height={40}
							onClick={handleShareToTelegram}
							className='cursor-pointer'
						/>
						<span onClick={toggleShare} className='text-2xl cursor-pointer'>
							&times;
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<span className='text-[12px]'>
							https://salatshop-uz.vercel.app/menu/{productId}
						</span>
						<button
							onClick={handleCopyText}
							className='px-2 py-1 rounded-md border border-gray text-nowrap'
						>
							Nusxalash 🔗
						</button>
					</div>
				</div>
			)}

			<button
				onClick={toggleShare}
				className={`bg-dark flex items-center justify-center gap-2 rounded-md text-white ${
					isPage ? 'px-2 py-1' : 'w-[28px] h-[28px]'
				}`}
				aria-label='Share this product'
			>
				<Image src={'/share.svg'} width={16} height={16} alt='share-icon' />
				{isPage && <span>Ulashish</span>}
			</button>
		</div>
	)
}

export default ShareButton
