<script lang="ts">
	import { onMount } from 'svelte';
	import { toggleTheme } from '$lib/shared/components/themes/toggleTheme';
	import { theme } from '$stores/theme';
	import { UiMoonSolid, UiSunOutline } from '$lib/shared/ui/components/icons/themes';

	export let localTheme: string;
	
	onMount(() => {
		if (!('theme' in localStorage)) {
			
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localTheme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
			} else {
				localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
			}
		} else {
			theme.useLocalStorage();
		}
		// document.documentElement.classList.remove('dark');
	});
</script>

<div class="flex-0">
	<a
		href="/app/theme"
		aria-label="Toggle Light - Dark "
		on:click|preventDefault={() => {
			toggleTheme(theme, $theme);
		}}
	>
		<div class="hid-dark"><UiSunOutline /></div>
		<div class="hid-light"><UiMoonSolid /></div>
	</a>
</div>

<style>
	:global(.dark .bg-black) {
		background-color: #000;
		color: #fff;
		transition: background-color 0.3s;
	}
	:global(.light .bg-ligth) {
		background-color: #fff;
		color: #000;
		transition: background-color 0.3s;
	}

	:global(.light .hid-dark) {
		display: none;
	}

	:global(.dark .hid-dark) {
		display: block;
	}
	:global(.dark .hid-light) {
		display: none;
	}

	:global(.h-6) {
		height: 3rem;
		width: 3rem;
	}
	.flex-0 {
		display: flex;
	}
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
		color: blue;
	}
</style>
