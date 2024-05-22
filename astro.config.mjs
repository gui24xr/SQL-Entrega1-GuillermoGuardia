import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://gui24xr.github.io',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  base: '/SQL-Entrega1-GuillermoGuardia'
});