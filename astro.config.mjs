// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import umami from '@yeskunall/astro-umami';

import { loadEnv } from "vite";
// @ts-ignore
const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, PUBLIC_UMAMI_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  // Used for sitemap and canonical URLs
  site: 'https://niebinarnosc.pl',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [alpinejs(), sanity({
    projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
    dataset: PUBLIC_SANITY_STUDIO_DATASET,
    // Set useCdn to false if you're building statically.
    useCdn: false,
    // Access the Studio on your.url/admin
    studioBasePath: '/admin',
  }), react(), sitemap(), umami({id: PUBLIC_UMAMI_ID})],

  adapter: netlify(),

  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
});
