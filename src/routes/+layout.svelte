<script context="module" lang="ts">
	export async function load({ session }) {
		const localTheme = session.theme;
		return { props: { localTheme } };
	}
</script>

<script lang="ts">
	import Theme from '$components/themes/Theme.svelte';

	export let localTheme: string;
</script>

<div id="theme" class={localTheme}>
	<main class="bg-ligth bg-black">
		<Theme {localTheme} />
		<slot />
		<p>GOODD {localTheme}</p>
	</main>
</div>

<style>
	:global(*, *::after, *::before) {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	:global(html) {
		font-size: 62.5%;
	}
	p {
		font-size: 3rem;
	}
</style>
