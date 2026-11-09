<script lang="ts">
	import {
		ArrowUpRight,
		Activity,
		Atom,
		BadgeCheck,
		BarChart3,
		Blocks,
		BookOpen,
		Bot,
		Boxes,
		Brain,
		CaseSensitive,
		ChevronDown,
		ChevronRight,
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
		GraduationCap,
		HeartHandshake,
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
		Search,
		Shapes,
		Shield,
		Smartphone,
		Sparkles,
		SwatchBook,
		Terminal,
		Triangle,
		Type,
		Users,
		Video,
		Wand2,
		Webhook,
		Wrench,
		X
	} from 'lucide-svelte';
	import {
		categories as devCategories,
		totalResources as devTotal,
		type ResourceCategory
	} from '#lib/resources.ts';
	import { designCategories, designTotal } from '#lib/design-resources.ts';
	import { aiCategories, aiTotal } from '#lib/ai-resources.ts';
	import { breadcrumb } from '#lib/breadcrumb.ts';
	import { resourceQuery } from '#lib/search.ts';
	import ResourceIcon from '#lib/components/resource-icon.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Badge } from '#lib/components/ui/badge/index.ts';

	type Source = 'all' | 'dev' | 'design' | 'ai';
	type Category = ResourceCategory & { source: 'dev' | 'design' | 'ai'; key: string };

	const icons: Record<string, typeof Layers> = {
		Activity,
		Atom,
		BadgeCheck,
		BarChart3,
		Blocks,
		BookOpen,
		Bot,
		Boxes,
		Brain,
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
		GraduationCap,
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
		Sparkles,
		SwatchBook,
		Terminal,
		Triangle,
		Type,
		Users,
		Video,
		Wand2,
		Webhook,
		Wrench
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
		})),
		...aiCategories.map((category) => ({
			...category,
			source: 'ai' as const,
			key: `ai-${category.slug}`
		}))
	];

	const totals = {
		all: devTotal + designTotal + aiTotal,
		dev: devTotal,
		design: designTotal,
		ai: aiTotal
	};

	type SourceGroup = {
		value: 'dev' | 'ai' | 'design';
		label: string;
		icon: typeof Layers;
		count: number;
		categories: Category[];
	};

	const sourceGroups: SourceGroup[] = [
		{
			value: 'dev',
			label: 'Developers',
			icon: Code2,
			count: totals.dev,
			categories: allCategories.filter((category) => category.source === 'dev')
		},
		{
			value: 'ai',
			label: 'AI Agents',
			icon: Bot,
			count: totals.ai,
			categories: allCategories.filter((category) => category.source === 'ai')
		},
		{
			value: 'design',
			label: 'Creatives',
			icon: Palette,
			count: totals.design,
			categories: allCategories.filter((category) => category.source === 'design')
		}
	];

	const PREVIEW_LIMIT = 6;

	let source = $state<Source>('all');
	let active = $state('all');
	let openGroups = $state<string[]>(['dev', 'ai', 'design']);
	let navOpen = $state(false);
	let contentTop = $state<HTMLElement | null>(null);

	function scrollToContent() {
		if (!contentTop) return;
		if (contentTop.getBoundingClientRect().top < 0) {
			contentTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function selectAll() {
		source = 'all';
		active = 'all';
		navOpen = false;
		scrollToContent();
	}

	function selectGroup(value: SourceGroup['value']) {
		source = value;
		active = 'all';
		if (!openGroups.includes(value)) openGroups = [...openGroups, value];
		navOpen = false;
		scrollToContent();
	}

	function toggleGroup(value: string) {
		openGroups = openGroups.includes(value)
			? openGroups.filter((item) => item !== value)
			: [...openGroups, value];
	}

	function selectCategory(key: string) {
		const category = allCategories.find((item) => item.key === key);
		if (!category) return;
		active = key;
		source = category.source;
		if (!openGroups.includes(category.source)) openGroups = [...openGroups, category.source];
		navOpen = false;
		scrollToContent();
	}

	function clearScope() {
		source = 'all';
		active = 'all';
	}

	function resetFilters() {
		resourceQuery.set('');
		clearScope();
	}

	const q = $derived($resourceQuery.trim().toLowerCase());

	const matches = (item: { name: string; description: string }) =>
		!q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);

	const filtered = $derived(
		allCategories
			.filter((category) => source === 'all' || category.source === source)
			.filter((category) => active === 'all' || category.key === active)
			.map((category) => ({ ...category, items: category.items.filter(matches) }))
			.filter((category) => category.items.length > 0)
	);

	const resultCount = $derived(
		filtered.reduce((sum, category) => sum + category.items.length, 0)
	);

	/** Matches outside the current scope, so an empty result can offer a wider search. */
	const globalCount = $derived(
		q ? allCategories.reduce((sum, category) => sum + category.items.filter(matches).length, 0) : 0
	);

	const activeCategory = $derived(allCategories.find((category) => category.key === active) ?? null);
	const activeGroup = $derived(sourceGroups.find((group) => group.value === source) ?? null);

	const scopeLabel = $derived(activeCategory?.name ?? activeGroup?.label ?? 'All resources');
	const scopeBlurb = $derived(
		activeCategory?.blurb ??
			(activeGroup
				? `${activeGroup.categories.length} categories curated for ${activeGroup.label.toLowerCase()}.`
				: `Every curated tool across ${allCategories.length} categories.`)
	);
	const ScopeIcon = $derived(
		activeCategory ? (icons[activeCategory.icon] ?? Layers) : (activeGroup?.icon ?? Layers)
	);
	const hasFilters = $derived(q.length > 0 || source !== 'all');
	const showHero = $derived(source === 'all' && !q);


	$effect(() => {
		const crumbs: { label: string; href?: string }[] = [
			{ label: 'Tools', href: '/tools' },
			{ label: 'Resources', href: '/tools' }
		];
		if (activeGroup) crumbs.push({ label: activeGroup.label });
		if (activeCategory) crumbs.push({ label: activeCategory.name });
		breadcrumb.set(crumbs);
	});

	// One row style for every sidebar entry, so all levels look and behave the same.
	const navItem =
		'flex h-8 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50';
	const navIdle = 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground';
	const navActive = 'bg-primary font-medium text-primary-foreground shadow-xs';
</script>

<main class="w-full lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
	<!-- Sidebar -->
	<aside
		class="border-b border-border bg-muted lg:sticky lg:top-15 lg:flex lg:h-[calc(100dvh-3.75rem)] lg:flex-col lg:border-b-0 lg:border-r"
	>
		<div class="flex flex-col gap-3 p-4 lg:pb-3">
			<!-- Mobile: compact scope picker -->
			<button
				type="button"
				onclick={() => (navOpen = !navOpen)}
				aria-expanded={navOpen}
				aria-controls="resource-nav"
				class="flex h-10 items-center gap-2.5 rounded-lg border border-input bg-card px-3 text-sm lg:hidden"
			>
				<ScopeIcon class="size-4 shrink-0 text-muted-foreground" />
				<span class="truncate font-medium">{scopeLabel}</span>
				<span class="ml-auto text-xs text-muted-foreground">Categories</span>
				<ChevronDown
					class="size-4 shrink-0 text-muted-foreground transition-transform {navOpen
						? 'rotate-180'
						: ''}"
				/>
			</button>
		</div>

		<nav
			id="resource-nav"
			aria-label="Resource categories"
			class="{navOpen ? 'block' : 'hidden'} px-3 pb-4 lg:block lg:min-h-0 lg:flex-1 lg:overflow-y-auto"
		>
			<button
				type="button"
				onclick={selectAll}
				aria-current={source === 'all' ? 'true' : undefined}
				class="{navItem} {source === 'all' ? navActive : navIdle}"
			>
				<Layers class="size-4 shrink-0" />
				<span class="truncate">All resources</span>
				<span class="ml-auto text-xs tabular-nums opacity-70">{totals.all}</span>
			</button>

			{#each sourceGroups as group (group.value)}
				{@const GroupIcon = group.icon}
				{@const isOpen = openGroups.includes(group.value)}
				{@const groupActive = source === group.value && active === 'all'}
				<div class="mt-4">
					<div class="flex items-center gap-1">
						<button
							type="button"
							onclick={() => selectGroup(group.value)}
							aria-current={groupActive ? 'true' : undefined}
							class="{navItem} flex-1 {groupActive ? navActive : navIdle}"
						>
							<GroupIcon class="size-4 shrink-0" />
							<span class="truncate">{group.label}</span>
							<span class="ml-auto text-xs tabular-nums opacity-70">{group.count}</span>
						</button>
						<button
							type="button"
							onclick={() => toggleGroup(group.value)}
							aria-expanded={isOpen}
							aria-controls="group-{group.value}"
							aria-label="{isOpen ? 'Collapse' : 'Expand'} {group.label}"
							class="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
						>
							<ChevronDown class="size-4 transition-transform {isOpen ? '' : '-rotate-90'}" />
						</button>
					</div>

					{#if isOpen}
						<ul id="group-{group.value}" class="mt-0.5 flex flex-col gap-0.5 pl-4">
							{#each group.categories as category (category.key)}
								{@const Icon = icons[category.icon] ?? Layers}
								{@const isActive = active === category.key}
								<li>
									<button
										type="button"
										onclick={() => selectCategory(category.key)}
										aria-current={isActive ? 'true' : undefined}
										class="{navItem} {isActive ? navActive : navIdle}"
									>
										<Icon class="size-4 shrink-0" />
										<span class="truncate">{category.name}</span>
										<span class="ml-auto text-xs tabular-nums opacity-70"
											>{category.items.length}</span
										>
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}

			<div class="mt-4 border-t border-border pt-3">
				<a href="/tools/credits" class="{navItem} {navIdle}">
					<HeartHandshake class="size-4 shrink-0" />
					<span class="truncate">Credits &amp; sources</span>
				</a>
			</div>
		</nav>
	</aside>

	<!-- Content -->
	<section bind:this={contentTop} class="min-w-0 scroll-mt-15 p-4 sm:p-6 lg:p-8">
		{#if showHero}
			<div class="bg-brand-deep relative mb-6 overflow-hidden rounded-2xl p-6 text-white sm:p-10">
				<div
					aria-hidden="true"
					class="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl"
				></div>
				<div class="relative max-w-2xl">
					<span
						class="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/20"
					>
						{allCategories.length} categories · {totals.all} hand-picked resources
					</span>
					<h1 class="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						Every tool you need to build, in one place.
					</h1>
					<p class="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
						ResourXe is a curated directory of tools, libraries, and learning resources for
						developers, AI builders, and creatives. Browse a category from the sidebar or press
						<kbd class="rounded bg-white/15 px-1.5 font-mono text-[11px] ring-1 ring-white/25"
							>/</kbd
						>
						to search everything. Every link opens in a new tab.
					</p>
				</div>
			</div>
		{/if}

		<header class="flex flex-col gap-3 border-b border-border pb-5">
			<div class="flex items-start gap-3 {showHero ? 'hidden' : ''}">
				<span
					class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
				>
					<ScopeIcon class="size-5" />
				</span>
				<div class="min-w-0">
					<h1 class="text-2xl font-bold tracking-tight">{scopeLabel}</h1>
					<p class="mt-0.5 line-clamp-2 max-w-2xl text-sm text-muted-foreground">{scopeBlurb}</p>
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-2 text-sm">
				<span class="text-muted-foreground" aria-live="polite">
					<span class="font-semibold text-foreground tabular-nums">{resultCount}</span>
					{resultCount === 1 ? 'resource' : 'resources'}
				</span>
				{#if q}
					<Badge variant="secondary" class="gap-1 rounded-full py-0.5 pl-2.5 pr-1">
						“{$resourceQuery.trim()}”
						<button
							type="button"
							onclick={() => resourceQuery.set('')}
							class="rounded-full p-0.5 hover:bg-background"
							aria-label="Remove search filter"><X class="size-3" /></button
						>
					</Badge>
				{/if}
				{#if hasFilters}
					<button
						type="button"
						onclick={resetFilters}
						class="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
					>
						Clear all
					</button>
				{/if}
			</div>
		</header>

		{#if filtered.length === 0}
			<div class="flex flex-col items-center gap-3 py-16 text-center">
				<div
					class="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
				>
					<Search class="size-6" />
				</div>
				<h2 class="text-lg font-bold tracking-tight">No results in {scopeLabel}</h2>
				{#if source !== 'all' && globalCount > 0}
					<p class="max-w-sm text-sm text-muted-foreground">
						{globalCount}
						{globalCount === 1 ? 'resource matches' : 'resources match'} “{$resourceQuery.trim()}” in other
						categories.
					</p>
					<Button onclick={clearScope} class="rounded-full">Search all resources</Button>
				{:else}
					<p class="max-w-sm text-sm text-muted-foreground">
						Try a different search term or clear the filters to see everything again.
					</p>
					<Button onclick={resetFilters} variant="outline" class="rounded-full">Clear filters</Button>
				{/if}
			</div>
		{:else if activeCategory}
			<!-- Single category: full grid, nothing hidden -->
			<ul class="mt-6 grid gap-2 sm:grid-cols-2 2xl:grid-cols-3">
				{#each filtered[0].items as item (item.name + item.url)}
					<li>{@render resourceLink(item, true)}</li>
				{/each}
			</ul>
		{:else}
			<!-- Overview: one preview block per category -->
			<div class="mt-6 grid items-start gap-x-6 gap-y-10 md:grid-cols-2 2xl:grid-cols-3">
				{#each filtered as category (category.key)}
					{@const Icon = icons[category.icon] ?? Layers}
					{@const visibleItems = q ? category.items : category.items.slice(0, PREVIEW_LIMIT)}
					<section aria-labelledby="cat-{category.key}">
						<div class="mb-2 flex items-center gap-2 px-2">
							<Icon class="size-4 shrink-0 text-muted-foreground" />
							<h2 id="cat-{category.key}" class="truncate text-sm font-semibold tracking-tight">
								<button
									type="button"
									onclick={() => selectCategory(category.key)}
									class="hover:underline underline-offset-4">{category.name}</button
								>
							</h2>
							<span class="text-xs tabular-nums text-muted-foreground">{category.items.length}</span>
						</div>
						<ul class="flex flex-col gap-0.5">
							{#each visibleItems as item (item.name + item.url)}
								<li>{@render resourceLink(item, false)}</li>
							{/each}
						</ul>
						{#if visibleItems.length < category.items.length}
							<button
								type="button"
								onclick={() => selectCategory(category.key)}
								class="mt-1 flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-primary hover:bg-muted"
							>
								View all {category.items.length}
								<ChevronRight class="size-4" />
							</button>
						{/if}
					</section>
				{/each}
			</div>
		{/if}
	</section>
</main>

{#snippet resourceLink(item: { name: string; url: string; description: string }, card: boolean)}
	<a
		href={item.url}
		target="_blank"
		rel="noopener noreferrer"
		class="group flex h-full items-start gap-3 rounded-xl px-2 py-2.5 transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 {card
			? 'border border-border bg-card p-3 hover:border-primary/40 hover:bg-card'
			: ''}"
	>
		<ResourceIcon url={item.url} name={item.name} class="mt-0.5 size-9" />
		<span class="min-w-0 flex-1">
			<span class="flex items-center justify-between gap-2">
				<span class="truncate text-sm font-semibold text-foreground">{item.name}</span>
				<ArrowUpRight
					class="size-4 shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100 group-hover:text-primary group-focus-visible:opacity-100"
				/>
			</span>
			<span class="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
				{item.description}
			</span>
		</span>
		<span class="sr-only">(opens in new tab)</span>
	</a>
{/snippet}
