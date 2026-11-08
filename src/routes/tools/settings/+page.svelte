<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Accessibility,
		Bell,
		Check,
		ChevronDown,
		Database,
		Download,
		Globe,
		HardDrive,
		Info,
		Palette,
		ScrollText,
		Search,
		Shield,
		SlidersHorizontal,
		Trash2,
		User
	} from 'lucide-svelte';
	import { breadcrumb } from '#lib/breadcrumb.ts';
	import { Button } from '#lib/components/ui/button/index.ts';

	type Section = { id: string; label: string; icon: typeof User };
	type Group = { id: string; label: string; icon: typeof User; sections: Section[] };

	const groups: Group[] = [
		{
			id: 'general',
			label: 'General',
			icon: SlidersHorizontal,
			sections: [
				{ id: 'appearance', label: 'Appearance', icon: Palette },
				{ id: 'language', label: 'Language & region', icon: Globe },
				{ id: 'accessibility', label: 'Accessibility', icon: Accessibility }
			]
		},
		{
			id: 'workspace',
			label: 'Workspace',
			icon: Database,
			sections: [
				{ id: 'content', label: 'Content & sources', icon: Database },
				{ id: 'search', label: 'Search', icon: Search },
				{ id: 'data', label: 'Data & storage', icon: HardDrive }
			]
		},
		{
			id: 'account',
			label: 'Account',
			icon: User,
			sections: [
				{ id: 'profile', label: 'Profile', icon: User },
				{ id: 'notifications', label: 'Notifications', icon: Bell },
				{ id: 'privacy', label: 'Privacy', icon: Shield }
			]
		},
		{
			id: 'about',
			label: 'About',
			icon: Info,
			sections: [
				{ id: 'about', label: 'About ResourXe', icon: Info },
				{ id: 'changelog', label: 'Changelog', icon: ScrollText }
			]
		}
	];

	const themeOptions: { id: 'light' | 'dark' | 'system'; label: string }[] = [
		{ id: 'light', label: 'Light' },
		{ id: 'dark', label: 'Dark' },
		{ id: 'system', label: 'System' }
	];

	let openGroups = $state<string[]>(['general', 'workspace']);
	let activeSection = $state('appearance');

	let theme = $state<'light' | 'dark' | 'system'>('system');
	let reducedMotion = $state(false);
	let highContrast = $state(false);
	let rememberFilters = $state(true);
	let searchDescriptions = $state(true);
	let emailUpdates = $state(false);
	let weeklyDigest = $state(true);
	let analytics = $state(false);

	onMount(() => {
		try {
			const stored = localStorage.getItem('theme');
			if (stored === 'dark' || stored === 'light') theme = stored;
		} catch {
			/* ignore */
		}
	});

	const active = $derived(
		groups.flatMap((group) => group.sections.map((section) => ({ group, section }))).find(
			(item) => item.section.id === activeSection
		) ?? null
	);

	$effect(() => {
		const group = active?.group;
		const section = active?.section;
		breadcrumb.set([
			{ label: 'Tools', href: '/tools' },
			{ label: 'Settings', href: '/tools/settings' },
			...(group ? [{ label: group.label }] : []),
			...(section ? [{ label: section.label }] : [])
		]);
	});

	function toggleGroup(id: string) {
		openGroups = openGroups.includes(id)
			? openGroups.filter((item) => item !== id)
			: [...openGroups, id];
	}

	function selectSection(id: string) {
		activeSection = id;
		const group = groups.find((item) => item.sections.some((section) => section.id === id));
		if (group && !openGroups.includes(group.id)) openGroups = [...openGroups, group.id];
	}

	function setTheme(next: 'light' | 'dark' | 'system') {
		theme = next;
		const dark =
			next === 'dark' ||
			(next === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList.toggle('dark', dark);
		try {
			if (next === 'system') localStorage.removeItem('theme');
			else localStorage.setItem('theme', next);
		} catch {
			/* ignore */
		}
	}

	function clearData() {
		try {
			localStorage.clear();
		} catch {
			/* ignore */
		}
	}
</script>

{#snippet PanelHeader(title: string, description: string)}
	<div class="mb-4">
		<h2 class="text-xl font-bold tracking-tight">{title}</h2>
		<p class="mt-1 text-sm text-muted-foreground">{description}</p>
	</div>
{/snippet}

<div class="w-full lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
	<aside
		class="border-b border-border bg-muted lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto lg:border-b-0 lg:border-r"
	>
		<nav aria-label="Settings" class="p-3">
			<p class="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
				Settings
			</p>
			<div class="flex flex-col gap-1">
				{#each groups as group (group.id)}
					{@const GroupIcon = group.icon}
					{@const isOpen = openGroups.includes(group.id)}
					<button
						type="button"
						onclick={() => toggleGroup(group.id)}
						aria-expanded={isOpen}
						class="flex h-10 w-full items-center gap-2 rounded-xl px-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/70"
					>
						<GroupIcon class="size-4 shrink-0 text-muted-foreground" />
						<span class="flex-1 text-left">{group.label}</span>
						<ChevronDown
							class="size-4 text-muted-foreground transition-transform {isOpen ? 'rotate-180' : ''}"
						/>
					</button>

					{#if isOpen}
						<div class="ml-3 flex flex-col gap-0.5 border-l border-border pl-2">
							{#each group.sections as section (section.id)}
								{@const SectionIcon = section.icon}
								<button
									type="button"
									onclick={() => selectSection(section.id)}
									aria-current={activeSection === section.id ? 'page' : undefined}
									class="flex h-9 w-full items-center gap-2 rounded-lg px-3 text-sm transition-colors {activeSection ===
									section.id
										? 'bg-background font-semibold text-foreground shadow-sm'
										: 'text-muted-foreground hover:bg-background/60 hover:text-foreground'}"
								>
									<SectionIcon class="size-4 shrink-0" />
									<span class="truncate">{section.label}</span>
								</button>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</nav>
	</aside>

	<section class="min-w-0 p-4 sm:p-6">
		<div class="mx-auto max-w-3xl">
			{#if activeSection === 'appearance'}
				{@render PanelHeader('Appearance', 'Choose how ResourXe looks on this device.')}
				<div class="grid gap-3 sm:grid-cols-3">
					{#each themeOptions as option (option.id)}
						<button
							type="button"
							onclick={() => setTheme(option.id)}
							aria-pressed={theme === option.id}
							class="flex flex-col gap-3 rounded-2xl border p-4 text-left transition-colors {theme ===
							option.id
								? 'border-primary bg-accent/40'
								: 'border-border bg-card hover:bg-muted'}"
						>
							<span class="flex items-center justify-between">
								<span class="text-sm font-semibold">{option.label}</span>
								{#if theme === option.id}
									<Check class="size-4 text-primary" />
								{/if}
							</span>
							<span
								class="flex h-14 items-end gap-1 rounded-lg border border-border p-2 {option.id ===
								'dark'
									? 'bg-zinc-900'
									: option.id === 'light'
										? 'bg-white'
										: 'bg-gradient-to-r from-white to-zinc-900'}"
							>
								<span class="h-2 w-6 rounded-full bg-primary/60"></span>
								<span class="h-2 w-3 rounded-full bg-muted-foreground/40"></span>
							</span>
						</button>
					{/each}
				</div>
				<p class="mt-3 text-xs text-muted-foreground">
					System follows your operating system preference.
				</p>
			{:else if activeSection === 'language'}
				{@render PanelHeader('Language & region', 'Set the language and time zone used across the app.')}
				<div class="space-y-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
					<label class="block">
						<span class="mb-1.5 block text-sm font-medium">Language</span>
						<select class="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm">
							<option>English (US)</option>
							<option>English (UK)</option>
							<option>Español</option>
							<option>Français</option>
							<option>Deutsch</option>
							<option>Filipino</option>
						</select>
					</label>
					<label class="block">
						<span class="mb-1.5 block text-sm font-medium">Time zone</span>
						<select class="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm">
							<option>Use system time zone</option>
							<option>UTC</option>
							<option>Asia/Manila (UTC+8)</option>
							<option>America/New_York (UTC−5)</option>
							<option>Europe/London (UTC+0)</option>
						</select>
					</label>
				</div>
			{:else if activeSection === 'accessibility'}
				{@render PanelHeader('Accessibility', 'Adjust motion and contrast to suit your needs.')}
				<div class="divide-y divide-border rounded-2xl border border-border bg-card">
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Reduce motion</span>
							<span class="block text-xs text-muted-foreground">Minimize animations and transitions.</span>
						</span>
						<input type="checkbox" bind:checked={reducedMotion} class="size-4 accent-[var(--color-primary)]" />
					</label>
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">High contrast</span>
							<span class="block text-xs text-muted-foreground">Increase contrast for text and borders.</span>
						</span>
						<input type="checkbox" bind:checked={highContrast} class="size-4 accent-[var(--color-primary)]" />
					</label>
				</div>
			{:else if activeSection === 'content'}
				{@render PanelHeader('Content & sources', 'Pick which libraries appear in your default view.')}
				<div class="divide-y divide-border rounded-2xl border border-border bg-card">
					{#each [{ id: 'all', label: 'Everything', note: 'Developers, AI agents, and creatives.' }, { id: 'dev', label: 'Developers', note: 'Languages, frameworks, and infrastructure.' }, { id: 'ai', label: 'AI Agents', note: 'Coding agents, frameworks, and MCP tooling.' }, { id: 'design', label: 'Creatives', note: 'UI kits, fonts, icons, and assets.' }] as option (option.id)}
						<label class="flex items-center justify-between gap-4 p-4">
							<span>
								<span class="block text-sm font-medium">{option.label}</span>
								<span class="block text-xs text-muted-foreground">{option.note}</span>
							</span>
							<input
								type="radio"
								name="default-source"
								checked={option.id === 'all'}
								class="size-4 accent-[var(--color-primary)]"
							/>
						</label>
					{/each}
				</div>
			{:else if activeSection === 'search'}
				{@render PanelHeader('Search', 'Tune how the resource search behaves.')}
				<div class="divide-y divide-border rounded-2xl border border-border bg-card">
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Remember filters</span>
							<span class="block text-xs text-muted-foreground">Restore your last source and category.</span>
						</span>
						<input type="checkbox" bind:checked={rememberFilters} class="size-4 accent-[var(--color-primary)]" />
					</label>
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Search descriptions</span>
							<span class="block text-xs text-muted-foreground">Also match text inside resource descriptions.</span>
						</span>
						<input type="checkbox" bind:checked={searchDescriptions} class="size-4 accent-[var(--color-primary)]" />
					</label>
				</div>
			{:else if activeSection === 'data'}
				{@render PanelHeader('Data & storage', 'Manage data stored in this browser.')}
				<div class="space-y-3 rounded-2xl border border-border bg-card p-4 sm:p-5">
					<div class="flex flex-wrap items-center justify-between gap-3">
						<div>
							<p class="text-sm font-medium">Export preferences</p>
							<p class="text-xs text-muted-foreground">Download your settings as JSON.</p>
						</div>
						<Button variant="outline" size="sm" class="rounded-full">
							<Download class="size-4" /> Export
						</Button>
					</div>
					<div class="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
						<div>
							<p class="text-sm font-medium">Clear local data</p>
							<p class="text-xs text-muted-foreground">Remove saved settings and filters.</p>
						</div>
						<Button variant="outline" size="sm" onclick={clearData} class="rounded-full">
							<Trash2 class="size-4" /> Clear
						</Button>
					</div>
				</div>
			{:else if activeSection === 'profile'}
				{@render PanelHeader('Profile', 'How you appear inside the workspace.')}
				<div class="space-y-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
					<div class="flex items-center gap-4">
						<span class="flex size-14 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
							JL
						</span>
						<div>
							<p class="text-sm font-semibold">Jan Leander Matutes</p>
							<p class="text-xs text-muted-foreground">Local profile</p>
						</div>
					</div>
					<label class="block">
						<span class="mb-1.5 block text-sm font-medium">Display name</span>
						<input class="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm" value="Jan Leander Matutes" />
					</label>
					<label class="block">
						<span class="mb-1.5 block text-sm font-medium">Email</span>
						<input type="email" class="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm" placeholder="you@example.com" />
					</label>
					<Button class="rounded-full">Save changes</Button>
				</div>
			{:else if activeSection === 'notifications'}
				{@render PanelHeader('Notifications', 'Choose what updates you want to receive.')}
				<div class="divide-y divide-border rounded-2xl border border-border bg-card">
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Product updates</span>
							<span class="block text-xs text-muted-foreground">New features and improvements.</span>
						</span>
						<input type="checkbox" bind:checked={emailUpdates} class="size-4 accent-[var(--color-primary)]" />
					</label>
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Weekly digest</span>
							<span class="block text-xs text-muted-foreground">A roundup of new resources each week.</span>
						</span>
						<input type="checkbox" bind:checked={weeklyDigest} class="size-4 accent-[var(--color-primary)]" />
					</label>
				</div>
			{:else if activeSection === 'privacy'}
				{@render PanelHeader('Privacy', 'Control what data ResourXe may collect.')}
				<div class="divide-y divide-border rounded-2xl border border-border bg-card">
					<label class="flex items-center justify-between gap-4 p-4">
						<span>
							<span class="block text-sm font-medium">Anonymous analytics</span>
							<span class="block text-xs text-muted-foreground">Help improve the app with usage statistics.</span>
						</span>
						<input type="checkbox" bind:checked={analytics} class="size-4 accent-[var(--color-primary)]" />
					</label>
					<div class="p-4 text-xs text-muted-foreground">
						No account is required. Resource data is public and fetched from the resourxes repo.
					</div>
				</div>
			{:else if activeSection === 'about'}
				{@render PanelHeader('About ResourXe', 'A curated list of developer tools to help you code, design, and build faster.')}
				<div class="space-y-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground sm:p-5">
					<p>
						ResourXe brings hand-picked tools for developers, AI agents, and creatives into one tidy
						place. Built with SvelteKit and Tailwind CSS.
					</p>
					<p>Created with love by Jan Leander Matutes.</p>
					<div class="flex flex-wrap gap-2 pt-1">
						<Button href="https://github.com/mwwlean/resourxes-repo" target="_blank" rel="noopener noreferrer" variant="outline" size="sm" class="rounded-full">
							GitHub repository
						</Button>
						<Button href="/tools" variant="outline" size="sm" class="rounded-full">
							Browse resources
						</Button>
					</div>
				</div>
			{:else if activeSection === 'changelog'}
				{@render PanelHeader('Changelog', 'What is new in ResourXe.')}
				<div class="space-y-3">
					{#each [{ version: '1.2.0', date: 'Nov 2026', notes: ['Added AI agents source and categories.', 'New settings screen with nested navigation.', 'Breadcrumbs across the tools shell.'] }, { version: '1.1.0', date: 'Nov 2026', notes: ['New landing page with GitHub stars.', 'Moved the resource browser to /tools.'] }, { version: '1.0.0', date: 'Oct 2026', notes: ['Initial release of ResourXe.'] }] as entry (entry.version)}
						<div class="rounded-2xl border border-border bg-card p-4">
							<div class="flex items-center justify-between gap-2">
								<p class="text-sm font-semibold">v{entry.version}</p>
								<span class="text-xs text-muted-foreground">{entry.date}</span>
							</div>
							<ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
								{#each entry.notes as note}
									<li>{note}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</div>
