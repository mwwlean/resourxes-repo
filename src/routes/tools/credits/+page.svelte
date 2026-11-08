<script lang="ts">
	import { ArrowUpRight, GitFork, Globe, Palette, Users } from 'lucide-svelte';
	import { breadcrumb } from '#lib/breadcrumb.ts';
	import { categories as devCategories, totalResources as devTotal } from '#lib/resources.ts';
	import { designCategories, designTotal } from '#lib/design-resources.ts';
	import { aiCategories, aiTotal } from '#lib/ai-resources.ts';

	// Set in an effect (browser only): the store is module-level, so setting it during SSR
	// would leak this page's crumbs into other requests.
	$effect(() => {
		breadcrumb.set([
			{ label: 'Tools', href: '/tools' },
			{ label: 'Credits & sources' }
		]);
	});

	const TRAVERSY_REPO = 'https://github.com/bradtraversy/design-resources-for-developers';
	const RESOURXE_REPO = 'https://github.com/mwwlean/resourxes-repo';

	type Link = { label: string; href: string };
	type Source = {
		title: string;
		by: string;
		icon: typeof Users;
		body: string;
		stat?: string;
		links: Link[];
	};

	const sources: Source[] = [
		{
			title: 'Design Resources for Developers',
			by: 'Brad Traversy and contributors',
			icon: Palette,
			body: 'The open-source list behind the Creatives section: UI kits, fonts, colors, icons, stock media, CSS and JavaScript libraries, design tools, and inspiration.',
			stat: `${designTotal} resources · ${designCategories.length} categories`,
			links: [
				{ label: 'Repository', href: TRAVERSY_REPO },
				{ label: 'Contributors', href: `${TRAVERSY_REPO}/graphs/contributors` }
			]
		},
		{
			title: 'ResourXe repo',
			by: 'Jan Leander Matutes and contributors',
			icon: GitFork,
			body: 'The original developer list this site grew from, plus the AI agent and developer categories added since.',
			stat: `${devTotal + aiTotal} resources · ${devCategories.length + aiCategories.length} categories`,
			links: [
				{ label: 'Repository', href: RESOURXE_REPO },
				{ label: 'Contributors', href: `${RESOURXE_REPO}/graphs/contributors` }
			]
		},
		{
			title: 'Official project sites',
			by: 'Each tool’s own maintainers',
			icon: Globe,
			body: 'Every link points to the tool’s official site or repository, and short descriptions are based on how each project describes itself.',
			links: []
		}
	];

	const assets: Link[] = [
		{ label: 'Lucide icons', href: 'https://lucide.dev/' },
		{ label: 'DiceBear avatars (Notionists, CC0)', href: 'https://www.dicebear.com/styles/notionists/' },
		{ label: 'Google favicon service for tool logos', href: 'https://www.google.com/s2/favicons' },
		{ label: 'SvelteKit', href: 'https://svelte.dev/' },
		{ label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
		{ label: 'shadcn-svelte', href: 'https://www.shadcn-svelte.com/' }
	];
</script>

<svelte:head>
	<title>Credits & sources · ResourXe</title>
</svelte:head>

<main class="mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8">
	<div class="bg-brand-deep relative overflow-hidden rounded-2xl p-6 text-white sm:p-10">
		<div
			aria-hidden="true"
			class="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl"
		></div>
		<div class="relative max-w-2xl">
			<span
				class="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/20"
			>
				Credits &amp; sources
			</span>
			<h1 class="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
				Built on the work of the open-source community.
			</h1>
			<p class="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
				ResourXe collects and organizes resources from these lists. Thank you to everyone who
				curated, contributed, and maintained them.
			</p>
		</div>
	</div>

	<section aria-labelledby="sources-heading" class="mt-8">
		<h2 id="sources-heading" class="text-sm font-semibold tracking-tight">Resource sources</h2>
		<ul class="mt-3 flex flex-col gap-3">
			{#each sources as source (source.title)}
				{@const Icon = source.icon}
				<li class="rounded-xl border border-border bg-card p-5">
					<div class="flex items-start gap-4">
						<span
							class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
						>
							<Icon class="size-5" />
						</span>
						<div class="min-w-0 flex-1">
							<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
								<h3 class="font-semibold">{source.title}</h3>
								{#if source.stat}
									<span class="text-xs tabular-nums text-muted-foreground">{source.stat}</span>
								{/if}
							</div>
							<p class="text-xs text-muted-foreground">{source.by}</p>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{source.body}</p>
							{#if source.links.length}
								<div class="mt-3 flex flex-wrap gap-x-5 gap-y-1">
									{#each source.links as link (link.href)}
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
										>
											{link.label}
											<ArrowUpRight class="size-3.5" />
											<span class="sr-only">(opens in new tab)</span>
										</a>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section aria-labelledby="assets-heading" class="mt-8">
		<h2 id="assets-heading" class="text-sm font-semibold tracking-tight">
			Icons, images &amp; tooling
		</h2>
		<ul class="mt-3 grid gap-2 rounded-xl border border-border bg-card p-3 sm:grid-cols-2">
			{#each assets as asset (asset.href)}
				<li>
					<a
						href={asset.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
					>
						{asset.label}
						<ArrowUpRight
							class="size-3.5 shrink-0 transition-colors group-hover:text-primary"
						/>
						<span class="sr-only">(opens in new tab)</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<p class="mt-8 text-xs text-muted-foreground">
		Spot a missing credit or a broken link?
		<a
			href="{RESOURXE_REPO}/issues"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
			>Open an issue</a
		>.
	</p>
</main>
