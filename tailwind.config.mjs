// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // Si usas /pages
    './packages/pure/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' // Si usas /packages/pure/components
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
