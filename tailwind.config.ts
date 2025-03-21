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
			screens: {
				xs: { max: "400px" }, // Đặt breakpoint cho màn hình <= 400px
			},
			backgroundImage: {
				investP2P: "url('/images/invest/p2p.jpg')",
				investGroup: "url('/images/invest/group.jpg')",
				investMidBanner: 'url("/images/invest/midBanner.png")',
			},
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
				benefit: "0px 15px 45px 0px #00000026",
			},
			keyframes: {
				marquee: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(calc(-100% - var(--gap)))",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate"),
	],
};

export default config;
