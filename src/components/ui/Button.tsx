import { FC } from 'react'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	rounded?: string
}
const Button: FC<ButtonProps> = ({ children, onClick, rounded }) => {
	return (
		<button
			className={`bg-primary text-white ${
				rounded ? `rounded-[${rounded}]` : 'rounded-[48px]'
			} py-[15px] px-[20px] hover:bg-active transition-all duration-300`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
