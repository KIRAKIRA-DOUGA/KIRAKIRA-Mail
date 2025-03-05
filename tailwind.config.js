/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/*.{html,js}"],
	theme: {
		extend: {
			spacing: Object.fromEntries(
				Array.from({ length: 200 }, (_, i) => [i, `${i * 0.25}rem`])
			)
		},
		colors: {
			"card-bg": "rgb(255 255 255 / 75%)",
			pink: "#f06e8e",
			black: "#212121",
			neutral: "#c19fa8",
			"code-bg": "rgb(0 0 0 / 3%)"
		},
	},
	plugins: [],
};
