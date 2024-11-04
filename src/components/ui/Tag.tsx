interface TagProps {
	children: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
	return (
		<span className='text-primary inline-block bg-buttonLight px-[10px] py-[5px] rounded-[7px]'>
			{children}
		</span>
	)
}

export default Tag
