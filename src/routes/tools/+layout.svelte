<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { BookOpen, ChevronRight, Moon, Settings, Sun } from 'lucide-svelte';
	import { breadcrumb } from '#lib/breadcrumb.ts';
	import { Button } from '#lib/components/ui/button/index.ts';

	let { children } = $props();

	let dark = $state(false);

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

<div class="app-public min-h-dvh">
	<header class="sticky top-0 z-30 h-15 border-b border-border bg-card/95 backdrop-blur">
		<div class="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6">
			<div class="flex min-w-0 items-center gap-3">
				<a href="/" class="flex shrink-0 items-center gap-2.5">
					<span class="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
						<BookOpen class="size-4" />
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
