import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Inter',
        cssVariable: '--font-inter',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
