import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$stores: path.resolve('./src/stores'),
			$components: path.resolve('./src/lib/shared/components'),
			$ui: path.resolve('./src/lib/shared/ui'),
			$shared: path.resolve('./src/lib/shared'),
			$models: path.resolve('./src/lib/models')
		}
	}
};

export default config;
