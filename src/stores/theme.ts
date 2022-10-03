import { writable } from 'svelte/store';

export const createWritableStore = (key: string, startValue: object) => {
	const { subscribe, set } = writable(startValue);
	return {
		subscribe,
		set,
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe((current) => {
				localStorage.setItem(key, JSON.stringify(current));
			});
		}
	};
};

// Theme
export const theme = createWritableStore('theme', { mode: 'dark' });
