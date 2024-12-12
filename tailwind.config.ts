import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				"4xl": "32px",
			},
			fontFamily: {
				sfpro: ["var(--font-sfpro)"],
				ambrose: ["var(--font-ambrose)"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				customPink: "#FDECEC",
				customYellow: "#FDF7EC",
				customGreen: "#4fd1c5",
				gradCustom: "linear-gradient(90deg, #F84F4F 0%, #EF836C 100%)",
			},
			boxShadow: {
				custom: "-5px 0px 16.7px 0px #FA5E5E40",
			},
			// borderRadius: {
			// 	lg: "var(--radius)",
			// 	md: "calc(var(--radius) - 2px)",
			// 	sm: "calc(var(--radius) - 4px)",
			// },
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate"),
	],
};

export default config;
