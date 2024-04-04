const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			animation: {
				fade: 'fadeOut 1s ease-in-out',
			  },
		
			  // that is actual animation
			  keyframes: theme => ({
				fadeOut: {
				  '0%': { opacity: '0.1' },
				  '100%': { opacity: '1' },
				},
			  }),
		},
	},
	darkMode: 'class',
	plugins: [nextui({
		themes: {
			light: {
				colors: {
					primary: {
						50: '#F2EAFA',
						100: '#E4D4F4',
						200: '#C9A9E9',
						300: '#AE7EDE',
						400: '#9353D3',
						500: '#7828C8',
						600: '#6020A0',
						700: '#481878',
						800: '#301050',
						900: '#180828',
						DEFAULT: '#9353D3',
					}
				}
			}
		}
	}),],
}
