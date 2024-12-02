'use client'

import Image from 'next/image'

const ShareButton = () => {
	const productUrl = window.location.href
	const productTitle = document.title

	// Ijtimoiy tarmoqlarga ulanish uchun URL’lar
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		productUrl
	)}`
	const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(
		productUrl
	)}`
	const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
		productUrl
	)}&text=${encodeURIComponent(productTitle)}`

	const handleShare = (platform: string) => {
		let shareUrl
		if (platform === 'facebook') {
			shareUrl = facebookUrl
		} else if (platform === 'instagram') {
			shareUrl = instagramUrl
		} else if (platform === 'telegram') {
			shareUrl = telegramUrl
		}
		window.open(shareUrl, '_blank')
	}
	const copyText = () => {
		navigator.clipboard
			.writeText(productUrl)
			.then(() => {
				console.log('success')
			})
			.catch(err => console.log('Nusxalashda xato yuz berdi.'))
	}
	return (
		<>
			<div className='bg-white px-3 py-1 shadow-xl border border-gray rounded-md'>
				<div className='flex items-center gap-2'>
					<Image
						src={'/share-facebook.svg'}
						alt='facebook'
						width={40}
						height={40}
						onClick={() => handleShare('facebook')}
						className='cursor-pointer'
					/>
					<Image
						src={'/share-instagram.svg'}
						width={40}
						height={40}
						alt='instagram'
						onClick={() => handleShare('instagram')}
						className='cursor-pointer'
					/>

					<Image
						src={'/share-telegram.svg'}
						alt='telegram'
						width={40}
						height={40}
						onClick={() => handleShare('telegram')}
						className='cursor-pointer'
					/>
				</div>
				<div className='flex items-center gap-1'>
					<span>{productUrl}</span>
					<button
						onClick={copyText}
						className='px-2 py-1 rounded-md border border-gray'
					>
						Nusxalash
					</button>
				</div>
			</div>
		</>
	)
}

export default ShareButton
