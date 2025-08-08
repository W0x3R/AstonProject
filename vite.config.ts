import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 3000,
		open: true,
		host: "0.0.0.0",
	},
})
