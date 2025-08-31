import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 3000,
		open: true,
		host: "0.0.0.0",
	},
	resolve: {
		alias: {
			"@shared": path.resolve("./src/shared"),
			"@entities": path.resolve("./src/entities"),
			"@features": path.resolve("./src/features"),
			"@widgets": path.resolve("./src/widgets"),
			"@pages": path.resolve("./src/pages"),
		},
	},
})
