/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "var(--font-montserrat)",
			},
			colors: {
				zelena: "#00934a",
				bezova: "#f1ede5",
				hneda: "#8e4a49",
			},
			gridTemplateColumns: {
				auto: "repeat(auto-fit, minmax(180px, 1fr))",
			},
		},
	},
	plugins: [],
};
