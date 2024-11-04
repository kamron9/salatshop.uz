'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface ActiveLinkProps {
	href: string
	children: React.ReactNode
}
const ActiveLink: FC<ActiveLinkProps> = ({ href, children }) => {
	const pathname = usePathname()
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.stopPropagation()
	}
	return (
		<Link
			onClick={handleClick}
			href={href}
			className={`${
				href === pathname
					? 'text-active border-b border-b-active'
					: 'border-b border-transparent'
			} transition-colors duration-200`}
		>
			{children}
		</Link>
	)
}

export default ActiveLink
