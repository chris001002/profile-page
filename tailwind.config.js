/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"slide-up": {
					"0%": {transform: "translateY(20px)", opacity: "0"},
					"100%": {transform: "translateY(0)", opacity: "1"},
				},
			},
			animation: {
				"slide-up": "slide-up 700ms cubic-bezier(.2,.9,.2,1) forwards",
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
