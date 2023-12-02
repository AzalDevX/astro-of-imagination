/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bigStone50: '#f5f7fa',
				bigStone100: '#eaeef4',
				bigStone200: '#d0dbe7',
				bigStone300: '#a6bcd3',
				bigStone400: '#7799b9',
				bigStone500: '#557ca2',
				bigStone600: '#426287',
				bigStone700: '#37506d',
				bigStone800: '#30455c',
				bigStone900: '#2c3c4e',
				bigStone950: '#1f2937',
			  },	
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			  },			
		},
	},
	plugins: [],
}
