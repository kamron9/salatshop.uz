import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#FFC12F ',
				active: '#FCC647',
				lightOrange: '#FFFBF3 ',
				buttonLight: '#FFF2D4',
				lead: '#667085',
				title: 'var(--title-color)',
				blue: '#335DFF',
				green: '#0BD28E',
				red: '#F24D21',
				dark: '#3C3C3C',
				gray: 'rgba(112, 112, 112, 0.2)',
			},
		},
	},
	plugins: [],
}
export default config
