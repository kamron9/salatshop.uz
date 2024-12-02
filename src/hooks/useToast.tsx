'use client'

import { useEffect, useState } from 'react'

export const useToast = () => {
	const [showToast, setShowToast] = useState<boolean>(false)
	const [toastContent, setToastContnet] = useState<string>('')
	const openToast = () => setShowToast(true)
	useEffect(() => {
		setTimeout(() => {
			setShowToast(false)
			setToastContnet('')
		}, 3000)
	}, [showToast])
	return { showToast, toastContent, setToastContnet, openToast }
}
