import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true }
	}),

	site: "https://zen-huifer.vercel.app/",
	integrations: [
		starlight({
			head: [
				{
					tag: "meta",
					attrs:{
						name: "google-adsense-account",
						content:"ca-pub-2032930149616773"
					}
				}
			],
			title: 'Zen HuiFer Doc',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'AI',
                    autogenerate:{
                        directory: 'ai'
                    }
				},
				{
					label: 'About Me',
					autogenerate:{
						directory: 'about'
					}
				},
			],

			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
});
