// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'id',
			},
			meta: [
				{
					name: 'description',
					content:
						'NEBO Indonesia - Komunitas resmi pengguna Yamaha NMAX Neo Turbo. Ride together, grow together!',
				},
				// Open Graph
				{ property: 'og:type', content: 'website' },
				{
					property: 'og:title',
					content: 'NEBO Indonesia - Yamaha NMAX Neo Turbo Community',
				},
				{
					property: 'og:description',
					content:
						'Komunitas resmi pengguna Yamaha NMAX Neo Turbo. Ride together, grow together!',
				},
				{
					property: 'og:image',
					content:
						'https://nebo-indonesia.vercel.app/assets/images/logos/nebo_logo.jpeg',
				},
				{
					property: 'og:url',
					content: 'https://nebo-indonesia.vercel.app',
				},
				{ property: 'og:site_name', content: 'NEBO Indonesia' },
				// Twitter Card
				{ name: 'twitter:card', content: 'summary_large_image' },
				{
					name: 'twitter:title',
					content: 'NEBO Indonesia - Yamaha NMAX Neo Turbo Community',
				},
				{
					name: 'twitter:description',
					content:
						'Komunitas resmi pengguna Yamaha NMAX Neo Turbo. Ride together, grow together!',
				},
				{
					name: 'twitter:image',
					content:
						'https://nebo-indonesia.vercel.app/assets/images/logos/nebo_logo.jpeg',
				},
			],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['nuxt-swiper'],
	swiper: {
		modules: ['autoplay', 'effect-fade', 'pagination'],
	},
	ssr: false,
	nitro: {
		preset: 'vercel-static',
	},
});
