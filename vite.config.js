import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: "build",
        minify: 'esbuild',
        target: 'esnext',
        rollupOptions: {
            input: {
                main: "index.html",
            }
        },
    },
    optimizeDeps: {
        include: ["react", "react-dom"],
        entries: ["index.jsx"],
    },
});