/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				yellow: "#FFCA3A",
				green: "#8AC926",
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
