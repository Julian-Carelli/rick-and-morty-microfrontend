import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "rick-and-morty-microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Data": "./src/Data.tsx"
      },
      shared: ["react", "react-dom", "styled-components"]
    })
  ],
  server: {
    port: 3005
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "build",
  }
})
