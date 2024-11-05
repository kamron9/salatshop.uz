export interface IStep {
	iconUrl: string
	title: string
	bg: 'bg-primary' | 'bg-blue' | 'bg-green'
	description: string
	down?: boolean
}

export interface IProduct{
	id: number
	title: string
	price: number
	image: string
	description: string
}