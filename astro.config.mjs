import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), react(), image()]
})
