<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { Box, ChevronRight, Moon, Search, Settings, Sun, X } from 'lucide-svelte';
	import { breadcrumb } from '#lib/breadcrumb.ts';
	import { resourceQuery } from '#lib/search.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';

	let { children } = $props();

	let dark = $state(false);
	let searchInput = $state<HTMLInputElement | null>(null);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			/* ignore */
		}
	}

	function onKeydown(event: KeyboardEvent) {
		const target = event.target as HTMLElement | null;
		const typing =
			target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;
		if (event.key === '/' && !typing) {
			event.preventDefault();
			searchInput?.focus();
		} else if (event.key === 'Escape' && target === searchInput && $resourceQuery) {
			resourceQuery.set('');
		}
	}

	const fallback = $derived(
		page.url.pathname.startsWith('/tools/settings')
			? [
					{ label: 'Tools', href: '/tools' },
					{ label: 'Settings' }
				]
			: page.url.pathname.startsWith('/tools/credits')
				? [
						{ label: 'Tools', href: '/tools' },
						{ label: 'Credits & sources' }
					]
				: [
					{ label: 'Tools', href: '/tools' },
					{ label: 'Resources' }
				]
	);

	const crumbs = $derived($breadcrumb.length > 0 ? $breadcrumb : fallback);
</script>

<svelte:window onkeydown={onKeydown} />

<div class="app-public min-h-dvh">
	<header class="sticky top-0 z-30 h-15 border-b border-border bg-card/95 backdrop-blur">
		<div class="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6">
			<div class="flex min-w-0 items-center gap-3">
				<a href="/" class="flex shrink-0 items-center gap-2.5">
					<span class="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
						<Box class="size-4" />
					</span>
					<span class="hidden text-base font-bold tracking-tight text-foreground sm:inline"
						>ResourXe</span
					>
				</a>

				<nav aria-label="Breadcrumb" class="min-w-0">
					<ol class="flex items-center gap-1 text-sm text-muted-foreground">
						{#each crumbs as crumb, i (crumb.label + i)}
							<li
								class="min-w-0 items-center gap-1 {i < crumbs.length - 2 ? 'hidden sm:flex' : 'flex'}"
							>
								{#if i > 0}
									<ChevronRight class="size-3.5 shrink-0 opacity-50" />
								{/if}
								{#if crumb.href && i < crumbs.length - 1}
									<a
										href={crumb.href}
										class="truncate rounded px-1 transition-colors hover:text-foreground"
										>{crumb.label}</a
									>
								{:else}
									<span class="truncate px-1 font-medium text-foreground">{crumb.label}</span>
								{/if}
							</li>
						{/each}
					</ol>
				</nav>
			</div>

			<div class="flex shrink-0 items-center gap-1">
				{#if page.url.pathname === '/tools'}
					<div class="relative w-32 sm:w-48">
						<Search
							class="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
						/>
						<Input
							bind:ref={searchInput}
							bind:value={$resourceQuery}
							type="search"
							placeholder="Search resources"
							aria-label="Search resources"
							class="h-9 rounded-full border-input bg-card pl-8 pr-8 text-sm shadow-none [&::-webkit-search-cancel-button]:hidden"
						/>
						{#if $resourceQuery}
							<button
								type="button"
								onclick={() => {
									resourceQuery.set('');
									searchInput?.focus();
								}}
								class="absolute right-1 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
								aria-label="Clear search"
							>
								<X class="size-3.5" />
							</button>
						{:else}
							<kbd
								class="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 font-mono text-[11px] text-muted-foreground sm:block"
								>/</kbd
							>
						{/if}
					</div>
				{/if}
				<Button
					href="/tools/settings"
					variant="ghost"
					class="hidden rounded-full text-muted-foreground hover:bg-muted hover:text-foreground sm:inline-flex"
				>
					<Settings class="size-4" />
					Settings
				</Button>
				<Button
					variant="ghost"
					size="icon-lg"
					onclick={toggleTheme}
					class="size-9 rounded-full text-foreground hover:bg-muted"
					aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if dark}
						<Sun class="size-4" />
					{:else}
						<Moon class="size-4" />
					{/if}
				</Button>
			</div>
		</div>
	</header>

	{@render children()}
</div>
