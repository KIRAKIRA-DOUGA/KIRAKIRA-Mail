import email from "tailwindcss-preset-email";
import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
module.exports = {
	presets: [
		email,
	],
	content: ["./**/*.html"],
	theme: {
		extend: {
			spacing: Object.fromEntries(
				new Array(200).fill(undefined).flatMap((_, j) => {
					const i = j / 2;
					return [
						[i, `${i * 0.25}rem`],
						[`${i}em`, `${i * 0.25}em`],
					];
				}),
			),
			fontSize: {
				heading2: "calc(1.325rem + 0.9vw)",
				heading1: "calc(1.375rem + 1.5vw)",
			},
		},
		colors: {
			"card-bg": "rgb(255 255 255 / 75%)",
			pink: "#f06e8e",
			black: "#212121",
			neutral: "#c19fa8",
			"code-bg": "rgb(0 0 0 / 3%)"
		},

	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".break-words": {
					"overflow-wrap": "break-word"
				},
				".inset-shadow-lg": {
					"box-shadow": "inset 0 1rem 1rem rgba(0, 0, 0, 0.04)",
				},
				".min-h-screen": {
					"min-height": "100vh",
				},
			});
		}),
	],
};
