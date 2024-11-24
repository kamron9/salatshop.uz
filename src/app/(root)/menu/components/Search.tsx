'use client'
import Image from 'next/image'
import { useState } from 'react'

const Search = () => {
	const [search, setSearch] = useState('')

	const handleClear = () => {
		setSearch('')
	}
	return (
		<div className='w-full max-w-[250px] sm:max-w-[350px]'>
			<div className='relative w-full'>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					type='text'
					placeholder='Search...'
					className='w-full py-3 pl-12 pr-10 text-sm border-none border-dark bg-transparent rounded-full shadow-md outline-none ring-1 ring-gray  transition focus:ring-primary'
				/>
				<div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
					<Image src={'/search.svg'} alt='search-icon' width={20} height={20} />
				</div>
				{search.length > 0 && (
					<button
						onClick={handleClear}
						className='absolute right-4 top-1/2 transform -translate-y-1/2'
					>
						<Image
							src={'/close.svg'}
							alt='search-icon'
							width={20}
							height={20}
						/>
					</button>
				)}
			</div>
		</div>
	)
}

export default Search
