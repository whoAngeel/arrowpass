import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				display: "standalone",
				display_override: ["window-controls-overlay"],
				lang: "es-MX",
				name: "ArrowPass",
				short_name: "AWP",
				description: "ejemplo de pwa",
				theme_color: "#f2f2f2",
				icons: [
					// TODO : agregar los tipos de iconos con nuestro logo
					{
						src: "vite.svg",
						sizes: "64x64",
						type: "svg",
					},
				],
			},
		}),
	],
});
