<script lang="ts">
	import './layout.css';
	import '@fontsource/host-grotesk/400.css';
	import '@fontsource/host-grotesk/500.css';
	import '@fontsource/host-grotesk/600.css';
	import '@fontsource/host-grotesk/700.css';
	import '@fontsource/host-grotesk/800.css';
	import '@fontsource/roboto-mono/400.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<script>
		try {
			const stored = localStorage.getItem('theme');
			const dark = stored
				? stored === 'dark'
				: window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.toggle('dark', dark);
		} catch {
			/* ignore */
		}
	</script>
</svelte:head>

{@render children()}
