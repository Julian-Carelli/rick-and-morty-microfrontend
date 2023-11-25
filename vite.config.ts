import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'rick-and-morty-microfrontend',
        filename: 'remoteEntry.js',
        exposes: {
          './CharacterGallery':
            './src/components/CharacterGallery/CharacterGallery.tsx',
          './CharacterDetails':
            './src/components/CharacterDetails/CharacterDetails.tsx',
        },
        shared: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
      }),
    ],
    server: {
      port: 3005,
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      outDir: 'build',
    },
  })
}
