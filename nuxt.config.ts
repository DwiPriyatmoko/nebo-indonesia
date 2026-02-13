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
	nitro: {
		preset: 'vercel',
		externals: {
			inline: [
				'vue',
				'vue-bundle-renderer',
				'@vue/shared',
				'@vue/server-renderer',
				'@vue/runtime-core',
				'@vue/runtime-dom',
				'@vue/reactivity',
				'@vue/compiler-dom',
				'@vue/compiler-core',
			],
		},
	},
});
