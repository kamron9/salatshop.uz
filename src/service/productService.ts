export const getProducts = async () => {
	const response = await fetch('https://a15d86e93e86e77b.mokky.dev/products')
	const data = await response.json()
	return data
}
