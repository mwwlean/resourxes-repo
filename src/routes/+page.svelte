<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowUpRight,
		Atom,
		BadgeCheck,
		BarChart3,
		Blocks,
		BookOpen,
		Bot,
		Boxes,
		CaseSensitive,
		ChevronDown,
		Cloud,
		Code2,
		Component,
		Database,
		Download,
		Film,
		Flame,
		FlaskConical,
		Frame,
		GitBranch,
		Globe,
		Image,
		Layers,
		LayoutTemplate,
		Lightbulb,
		ListChecks,
		Minimize2,
		Monitor,
		Moon,
		Music,
		Paintbrush,
		Palette,
		PenTool,
		Puzzle,
		Rocket,
		Search,
		Shapes,
		Shield,
		SlidersHorizontal,
		Smartphone,
		Sparkles,
		Sun,
		SwatchBook,
		Triangle,
		Type,
		Video,
		Wand2,
		Webhook,
		X
	} from 'lucide-svelte';
	import {
		categories as devCategories,
		totalResources as devTotal,
		type ResourceCategory
	} from '#lib/resources.ts';
	import { designCategories, designTotal } from '#lib/design-resources.ts';
	import ResourceIcon from '#lib/components/resource-icon.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as Card from '#lib/components/ui/card/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import { Tabs, TabsList, TabsTrigger } from '#lib/components/ui/tabs/index.ts';
	import { Separator } from '#lib/components/ui/separator/index.ts';

	type Source = 'all' | 'dev' | 'design';
	type Category = ResourceCategory & { source: 'dev' | 'design'; key: string };

	const icons: Record<string, typeof Layers> = {
		Atom,
		BadgeCheck,
		BarChart3,
		Blocks,
		BookOpen,
		Bot,
		Boxes,
		CaseSensitive,
		Cloud,
		Code2,
		Component,
		Database,
		Download,
		Film,
		Flame,
		FlaskConical,
		Frame,
		GitBranch,
		Globe,
		Image,
		Layers,
		LayoutTemplate,
		Lightbulb,
		ListChecks,
		Minimize2,
		Monitor,
		Music,
		Paintbrush,
		Palette,
		PenTool,
		Puzzle,
		Rocket,
		Shapes,
		Shield,
		Smartphone,
		SwatchBook,
		Triangle,
		Type,
		Video,
		Wand2,
		Webhook
	};

	const allCategories: Category[] = [
		...devCategories.map((category) => ({
			...category,
			source: 'dev' as const,
			key: `dev-${category.slug}`
		})),
		...designCategories.map((category) => ({
			...category,
			source: 'design' as const,
			key: `design-${category.slug}`
		}))
	];

	const totals = {
		all: devTotal + designTotal,
		dev: devTotal,
		design: designTotal
	};

	const sources: { value: Source; label: string; count: number }[] = [
		{ value: 'all', label: 'All', count: totals.all },
		{ value: 'dev', label: 'Dev', count: totals.dev },
		{ value: 'design', label: 'Design', count: totals.design }
	];

	let query = $state('');
	let source = $state<Source>('all');
	let active = $state('all');
	let expanded = $state<string[]>([]);
	let filtersOpen = $state(false);
	let dark = $state(false);
	let scrolled = $state(false);
	let wordmarkVisible = $state(false);
	let wordmarkMaskEl: HTMLElement | undefined;

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');

		const onScroll = () => (scrolled = window.scrollY > 16);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					wordmarkVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0 }
		);

		if (wordmarkMaskEl) observer.observe(wordmarkMaskEl);

		return () => {
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
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

	function changeSource(next: string) {
		source = next as Source;
		active = 'all';
	}

	function selectCategory(key: string) {
		active = key;
		filtersOpen = false;
	}

	function goToSource(next: Source) {
		source = next;
		active = 'all';
		document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
	}

	function resetFilters() {
		query = '';
		source = 'all';
		active = 'all';
	}

	function toggleExpanded(key: string) {
		expanded = expanded.includes(key) ? expanded.filter((item) => item !== key) : [...expanded, key];
	}

	const scope = $derived(
		allCategories.filter((category) => source === 'all' || category.source === source)
	);

	const scopeTotal = $derived(
		scope.reduce((sum, category) => sum + category.items.length, 0)
	);

	const navIndex = $derived(
		active === 'all' ? 0 : Math.max(0, scope.findIndex((category) => category.key === active) + 1)
	);

	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return scope
			.filter((category) => active === 'all' || category.key === active)
			.map((category) => ({
				...category,
				items: category.items.filter(
					(item) =>
						!q ||
						item.name.toLowerCase().includes(q) ||
						item.description.toLowerCase().includes(q)
				)
			}))
			.filter((category) => category.items.length > 0);
	});

	const resultCount = $derived(
		filtered.reduce((sum, category) => sum + category.items.length, 0)
	);

	const activeCategory = $derived(scope.find((category) => category.key === active) ?? null);
</script>

<div class="app-public">
	<div class="pointer-events-none fixed inset-x-0 top-0 z-50">
		<div
			class="pointer-events-auto mx-auto flex items-center justify-between gap-2 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] {scrolled
				? 'mt-3 max-w-3xl rounded-full border border-border bg-card/85 px-3 py-2 shadow-xl shadow-black/5 backdrop-blur-xl sm:px-4'
				: 'mt-0 max-w-[1440px] border-b border-white/15 bg-transparent px-4 py-4 sm:px-6'}"
		>
			<a href="#top" class="flex items-center gap-2.5">
				<span
					class="flex size-9 items-center justify-center rounded-xl transition-colors duration-500 {scrolled
						? 'bg-brand text-white'
						: 'bg-white/15 text-white ring-1 ring-white/20'}"
				>
					<BookOpen class="size-4" />
				</span>
				<span
					class="text-base font-bold tracking-tight transition-colors duration-500 {scrolled
						? 'text-foreground'
						: 'text-white'}">ResourXe</span
				>
			</a>

			<nav class="hidden items-center gap-1 sm:flex">
				<a
					href="#resources"
					class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors {scrolled
						? 'text-muted-foreground hover:bg-muted hover:text-foreground'
						: 'text-white/80 hover:bg-white/10 hover:text-white'}">Resources</a
				>
				<button
					type="button"
					onclick={() => goToSource('dev')}
					class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors {scrolled
						? 'text-muted-foreground hover:bg-muted hover:text-foreground'
						: 'text-white/80 hover:bg-white/10 hover:text-white'}">Developer</button
				>
				<button
					type="button"
					onclick={() => goToSource('design')}
					class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors {scrolled
						? 'text-muted-foreground hover:bg-muted hover:text-foreground'
						: 'text-white/80 hover:bg-white/10 hover:text-white'}">Design</button
				>
				<a
					href="https://github.com/mwwlean/resourxes-repo"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-1 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors {scrolled
						? 'text-muted-foreground hover:bg-muted hover:text-foreground'
						: 'text-white/80 hover:bg-white/10 hover:text-white'}"
				>
					GitHub
					<ArrowUpRight class="size-3.5" />
				</a>
			</nav>

			<Button
				variant="ghost"
				size="icon-lg"
				onclick={toggleTheme}
				class="size-9 rounded-full transition-colors duration-500 {scrolled
					? 'text-foreground hover:bg-muted'
					: 'border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white'}"
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

	<header id="top" class="relative overflow-hidden rounded-b-[32px] bg-brand-deep text-white">
		<div class="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-white/10"></div>
		<div class="pointer-events-none absolute -bottom-40 left-1/3 size-96 rounded-full bg-white/10"></div>
		<div class="pointer-events-none absolute right-1/4 top-1/3 size-24 rounded-full bg-white/10"></div>

		<div class="relative mx-auto max-w-[1440px] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
			<div class="max-w-3xl">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
				>
					<Sparkles class="size-3.5" />
					{allCategories.length} categories · {totals.all} hand-picked resources
				</span>

				<h1 class="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
					A curated hub of developer resources.
				</h1>
				<p class="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
					Every developer tool from the resourxes repo plus the full design-resources library, sorted
					into tidy categories so you can find what you need and get back to building.
				</p>

				<div class="mt-7 flex flex-wrap items-center gap-3">
					<Button
						href="#resources"
						size="lg"
						variant="secondary"
						class="rounded-full bg-white px-5 text-sm font-semibold text-primary hover:bg-white/90"
					>
						Browse resources
					</Button>
					<Button
						href="https://github.com/mwwlean/resourxes-repo"
						target="_blank"
						rel="noopener noreferrer"
						size="lg"
						variant="outline"
						class="rounded-full border-white/30 bg-white/10 px-5 text-sm font-semibold text-white shadow-none hover:bg-white/20 hover:text-white"
					>
						View on GitHub
						<ArrowUpRight class="size-4" />
					</Button>
				</div>
			</div>

			<dl class="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:mt-12">
				<div class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
					<dd class="text-2xl font-bold tracking-tight">{allCategories.length}</dd>
					<dt class="mt-0.5 text-xs uppercase tracking-wide text-white/70">Categories</dt>
				</div>
				<div class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
					<dd class="text-2xl font-bold tracking-tight">{totals.all}</dd>
					<dt class="mt-0.5 text-xs uppercase tracking-wide text-white/70">Resources</dt>
				</div>
				<div class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
					<dd class="text-2xl font-bold tracking-tight">100%</dd>
					<dt class="mt-0.5 text-xs uppercase tracking-wide text-white/70">Free to explore</dt>
				</div>
			</dl>
		</div>
	</header>

	<main id="resources" class="mx-auto max-w-[1440px] scroll-mt-24 px-3 py-6 sm:px-6 sm:py-10">
		<div class="rounded-3xl border border-border bg-card lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
			<aside
				class="relative border-b border-border bg-muted max-lg:rounded-t-3xl lg:rounded-l-3xl lg:border-b-0"
			>
				<div class="lg:sticky lg:top-20">
					<div class="p-4 pb-3">
						<div class="flex items-center justify-between gap-3 lg:hidden">
							<div>
								<p class="text-sm font-bold tracking-tight">Filters</p>
								<p class="text-xs text-muted-foreground">
									{scope.length} categories · {scopeTotal} resources
								</p>
							</div>
							<Button
								variant="outline"
								size="sm"
								onclick={() => (filtersOpen = !filtersOpen)}
								class="shrink-0 rounded-full"
								aria-expanded={filtersOpen}
							>
								<SlidersHorizontal class="size-4" />
								{filtersOpen ? 'Hide' : 'Show'}
							</Button>
						</div>

						<div class="{filtersOpen ? 'mt-4 block' : 'hidden'} lg:mt-0 lg:block">
							<div class="relative">
								<Search
									class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
								/>
								<Input
									bind:value={query}
									type="search"
									placeholder="Search {totals.all} resources…"
									aria-label="Search resources"
									class="h-11 rounded-full border-input bg-card pl-11 pr-11 text-sm shadow-none"
								/>
								{#if query}
									<Button
										variant="ghost"
										size="icon-xs"
										onclick={() => (query = '')}
										class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-muted-foreground"
										aria-label="Clear search"
									>
										<X class="size-4" />
									</Button>
								{/if}
							</div>

							<Tabs value={source} onValueChange={changeSource} class="mt-3">
								<TabsList class="grid h-10 w-full grid-cols-3 rounded-full bg-card">
									{#each sources as item}
										<TabsTrigger value={item.value} class="rounded-full px-2 text-sm">
											{item.label}
											<span class="text-xs opacity-60">{item.count}</span>
										</TabsTrigger>
									{/each}
								</TabsList>
							</Tabs>

							<div class="mt-5 flex items-center justify-between px-1">
								<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
									Categories
								</p>
								<Badge variant="secondary" class="rounded-full">{scope.length}</Badge>
							</div>
						</div>
					</div>

					<nav
						class="{filtersOpen
							? 'block'
							: 'hidden'} relative max-h-96 overflow-y-auto pb-3 pl-4 lg:block lg:max-h-[calc(100dvh-20rem)]"
					>
						<div
							aria-hidden="true"
							class="pointer-events-none absolute right-0 top-0 hidden h-10 w-4 rounded-l-full bg-card transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:block"
							style:transform={`translateY(${navIndex * 44}px)`}
						></div>

						<div class="flex flex-col gap-1">
							<Button
								variant="ghost"
								onclick={() => selectCategory('all')}
								aria-pressed={active === 'all'}
								class="h-10 w-full justify-start rounded-xl pl-3 pr-7 text-sm {active === 'all'
									? 'font-semibold text-foreground'
									: 'text-muted-foreground hover:bg-background/70 hover:text-foreground'}"
							>
								<Layers class="size-4 shrink-0" />
								<span class="truncate">All resources</span>
								<span class="ml-auto text-xs opacity-60">{scopeTotal}</span>
							</Button>
							{#each scope as category}
								{@const Icon = icons[category.icon] ?? Layers}
								<Button
									variant="ghost"
									onclick={() => selectCategory(category.key)}
									aria-pressed={active === category.key}
									class="h-10 w-full justify-start rounded-xl pl-3 pr-7 text-sm {active ===
									category.key
										? 'font-semibold text-foreground'
										: 'text-muted-foreground hover:bg-background/70 hover:text-foreground'}"
								>
									<Icon class="size-4 shrink-0" />
									<span class="truncate">{category.name}</span>
									<span class="ml-auto text-xs opacity-60">{category.items.length}</span>
								</Button>
							{/each}
						</div>
					</nav>

					{#if query || active !== 'all' || source !== 'all'}
						<div class="{filtersOpen ? 'block' : 'hidden'} px-4 pb-4 lg:block">
							<Button
								variant="outline"
								size="sm"
								onclick={resetFilters}
								class="w-full rounded-full"
							>
								Reset filters
							</Button>
						</div>
					{/if}
				</div>
			</aside>

			<section class="min-w-0 bg-card p-4 max-lg:rounded-b-3xl sm:p-6 lg:rounded-r-3xl">
				<div class="flex flex-wrap items-end justify-between gap-3">
					<div>
						<h2 class="text-2xl font-bold tracking-tight">Browse by category</h2>
						<p class="mt-1 text-sm text-muted-foreground">
							{resultCount}
							{resultCount === 1 ? 'resource' : 'resources'}
							{#if query.trim()}matching “{query.trim()}”{/if}
							{#if activeCategory}in {activeCategory.name}{/if}
						</p>
					</div>
					<Badge variant="outline" class="rounded-full px-3 py-1">
						{#if source === 'all'}All sources{:else if source === 'dev'}Developer{:else}Design{/if}
					</Badge>
				</div>

				{#if filtered.length > 0}
					<div class="mt-6 grid items-start gap-5 md:grid-cols-2">
						{#each filtered as category (category.key)}
							{@const showAll = expanded.includes(category.key) || query.trim().length > 0}
							{@const visibleItems = showAll ? category.items : category.items.slice(0, 8)}
							<Card.Root class="rounded-2xl bg-background shadow-none ring-border">
								<Card.Content>
									<h3 class="sr-only">{category.name}</h3>
									<ul class="flex flex-col gap-0.5">
										{#each visibleItems as item (item.name + item.url)}
											<li>
												<a
													href={item.url}
													target="_blank"
													rel="noopener noreferrer"
													class="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-muted"
												>
													<ResourceIcon url={item.url} name={item.name} class="mt-0.5 size-9" />
													<span class="min-w-0 flex-1">
														<span class="flex items-center justify-between gap-2">
															<span class="text-sm font-semibold text-foreground">{item.name}</span>
															<ArrowUpRight
																class="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
															/>
														</span>
														<span class="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
															{item.description}
														</span>
													</span>
												</a>
											</li>
										{/each}
									</ul>
								</Card.Content>

								{#if !query.trim() && category.items.length > 8}
									<Card.Footer class="pt-1">
										<Button
											variant="ghost"
											size="sm"
											onclick={() => toggleExpanded(category.key)}
											class="w-full rounded-full text-muted-foreground"
										>
											{expanded.includes(category.key)
												? 'Show less'
												: `Show all ${category.items.length}`}
											<ChevronDown
												class="size-4 transition-transform {expanded.includes(category.key)
													? 'rotate-180'
													: ''}"
											/>
										</Button>
									</Card.Footer>
								{/if}
							</Card.Root>
						{/each}
					</div>
				{:else}
					<Card.Root class="mt-6 rounded-2xl bg-background shadow-none ring-border">
						<Card.Content class="items-center py-8 text-center">
							<div
								class="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground"
							>
								<Search class="size-6" />
							</div>
							<h3 class="text-lg font-bold tracking-tight">No resources match</h3>
							<p class="max-w-sm text-sm text-muted-foreground">
								Try a different search term or reset the filters to see everything again.
							</p>
							<Button onclick={resetFilters} class="mt-2 rounded-full">Reset filters</Button>
						</Card.Content>
					</Card.Root>
				{/if}
			</section>
		</div>
	</main>

	<footer>
		<Separator></Separator>
		<div
			class="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6"
		>
			<p>
				Built from
				<a
					href="https://github.com/mwwlean/resourxes-repo"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-primary hover:underline">resourxes-repo</a
				>
				and
				<a
					href="https://github.com/bradtraversy/design-resources-for-developers"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-primary hover:underline">design-resources</a
				>.
			</p>
			<p class="font-mono text-xs">ResourXe · curated developer &amp; design links</p>
		</div>

		<div bind:this={wordmarkMaskEl} class="overflow-hidden px-4 sm:px-6">
			<p
				aria-hidden="true"
				class="select-none bg-gradient-to-b from-primary/60 via-primary/30 to-transparent bg-clip-text text-center text-[clamp(4rem,17vw,15rem)] font-extrabold leading-[0.72] tracking-[-0.07em] text-transparent transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] {wordmarkVisible
					? 'translate-y-0'
					: 'translate-y-[110%]'}"
			>
				ResourXe
			</p>
		</div>
	</footer>
</div>
