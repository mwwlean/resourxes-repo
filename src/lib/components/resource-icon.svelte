<script lang="ts">
	import { cn } from '#lib/utils.ts';

	let {
		url,
		name,
		class: className
	}: { url: string; name: string; class?: string } = $props();

	let attempt = $state(0);

	const domain = $derived.by(() => {
		try {
			return new URL(url).hostname;
		} catch {
			return '';
		}
	});

	const sources = $derived(
		domain
			? [
					`https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
					`https://icons.duckduckgo.com/ip3/${domain}.ico`
				]
			: []
	);

	const initial = $derived((name.trim().charAt(0) || '?').toUpperCase());
</script>

<span
	class={cn(
		'flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted',
		className
	)}
>
	{#if sources[attempt]}
		<img
			src={sources[attempt]}
			alt=""
			loading="lazy"
			referrerpolicy="no-referrer"
			class="size-5 object-contain opacity-80 grayscale transition dark:invert group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:invert-0"
			onerror={() => (attempt += 1)}
		/>
	{:else}
		<span class="text-[10px] font-bold text-muted-foreground">{initial}</span>
	{/if}
</span>
