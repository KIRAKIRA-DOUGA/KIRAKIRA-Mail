/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the production configuration that Maizzle will use when you run the
| `npm run build` command. Settings here will be merged on top of the base
| `config.js`, so you only need to add the options that are changing.
|
*/

import posthtmlInlineAssets from "posthtml-inline-assets";
import postcssUrl from "postcss-url";
import autoprefixer from "autoprefixer";

/** @type {import("@maizzle/framework").Config} */
export default {
	build: {
		output: {
			path: "build_production",
		},
	},
	css: {
		inline: true,
		purge: true,
		shorthand: true,
	},
	prettify: false,
	minify: false, // minify will break CSS calc().
	posthtml: {
		plugins: {
			before: [],
			after: [
				posthtmlInlineAssets({
					cwd: "./images",
					errors: "throw",
				}),
			],
		},
	},
	postcss: {
		plugins: [
			autoprefixer,
			postcssUrl({
				url: "inline",
				basePath: "./images",
			}),
		],
	},
};
