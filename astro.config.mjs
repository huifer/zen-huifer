import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
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
