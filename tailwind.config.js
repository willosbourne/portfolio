/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...colors,
			sand: '#f2f2f2',
			primary: '#c7caa4',
			secondary: '#ebf1ff',
			accent: '#9a43eb'
		},
		extend: {}
	},
	plugins: []
};
