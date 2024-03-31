/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			phone: { max: "450px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			tablet: { min: "450px", max: "1023px" },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			laptop: { min: "1024px" },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["bumblebee"],
	},
};
