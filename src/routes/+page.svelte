<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, BookOpen, Moon, Star, Sun } from 'lucide-svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { totalResources as devTotal } from '#lib/resources.ts';
	import { designTotal } from '#lib/design-resources.ts';
	import { aiTotal } from '#lib/ai-resources.ts';
	import { categories as devCategories } from '#lib/resources.ts';
	import { designCategories } from '#lib/design-resources.ts';
	import { aiCategories } from '#lib/ai-resources.ts';

	const totals = {
		all: devTotal + designTotal + aiTotal,
		dev: devTotal,
		ai: aiTotal,
		design: designTotal
	};

	const totalCategories = devCategories.length + designCategories.length + aiCategories.length;

	const repoUrl = 'https://github.com/mwwlean/resourxes-repo';

	let stars = $state<number | null>(null);

	let dark = $state(false);

	const headline =
		'A curated list of developer tools to help you code, design, and build faster.';
	const headlineWords = headline.split(' ');

	type ToolCard = { name: string; domain: string; tag: string };

	/**
	 * Decorative vertical marquee beside the hero. Columns scroll in alternating
	 * directions (up, down, up); each list is rendered twice so the loop is seamless.
	 */
	const toolColumns: ToolCard[][] = [
		[
			{ name: 'React', domain: 'react.dev', tag: 'Frameworks' },
			{ name: 'Supabase', domain: 'supabase.com', tag: 'Databases' },
			{ name: 'VS Code', domain: 'code.visualstudio.com', tag: 'Editors' },
			{ name: 'Docker', domain: 'docker.com', tag: 'Deployment' },
			{ name: 'Next.js', domain: 'nextjs.org', tag: 'Frameworks' },
			{ name: 'Prisma', domain: 'prisma.io', tag: 'Databases' },
			{ name: 'GitHub', domain: 'github.com', tag: 'Version control' },
			{ name: 'Redis', domain: 'redis.io', tag: 'Databases' },
			{ name: 'Playwright', domain: 'playwright.dev', tag: 'Testing' },
			{ name: 'Bun', domain: 'bun.sh', tag: 'Runtimes' },
			{ name: 'Sentry', domain: 'sentry.io', tag: 'Monitoring' },
			{ name: 'Postman', domain: 'postman.com', tag: 'APIs' }
		],
		[
			{ name: 'Claude Code', domain: 'claude.ai', tag: 'AI agents' },
			{ name: 'Figma', domain: 'figma.com', tag: 'Design' },
			{ name: 'Tailwind CSS', domain: 'tailwindcss.com', tag: 'CSS frameworks' },
			{ name: 'PostgreSQL', domain: 'postgresql.org', tag: 'Databases' },
			{ name: 'Vue.js', domain: 'vuejs.org', tag: 'Frameworks' },
			{ name: 'Ollama', domain: 'ollama.com', tag: 'Local models' },
			{ name: 'Hugging Face', domain: 'huggingface.co', tag: 'AI platforms' },
			{ name: 'Cloudflare', domain: 'cloudflare.com', tag: 'Cloud' },
			{ name: 'Linear', domain: 'linear.app', tag: 'Productivity' },
			{ name: 'MongoDB', domain: 'mongodb.com', tag: 'Databases' },
			{ name: 'Vitest', domain: 'vitest.dev', tag: 'Testing' },
			{ name: 'Framer', domain: 'framer.com', tag: 'Design' }
		],
		[
			{ name: 'Svelte', domain: 'svelte.dev', tag: 'Frameworks' },
			{ name: 'Vercel', domain: 'vercel.com', tag: 'Deployment' },
			{ name: 'Cursor', domain: 'cursor.com', tag: 'AI agents' },
			{ name: 'Notion', domain: 'notion.so', tag: 'Productivity' },
			{ name: 'Vite', domain: 'vite.dev', tag: 'Build tools' },
			{ name: 'Node.js', domain: 'nodejs.org', tag: 'Runtimes' },
			{ name: 'Netlify', domain: 'netlify.com', tag: 'Deployment' },
			{ name: 'LangChain', domain: 'langchain.com', tag: 'Agent frameworks' },
			{ name: 'Storybook', domain: 'storybook.js.org', tag: 'Testing' },
			{ name: 'Kubernetes', domain: 'kubernetes.io', tag: 'Deployment' },
			{ name: 'Obsidian', domain: 'obsidian.md', tag: 'Productivity' },
			{ name: 'Deno', domain: 'deno.com', tag: 'Runtimes' }
		]
	];
	const marquee = [
		{ duration: 46, reverse: false },
		{ duration: 54, reverse: true },
		{ duration: 50, reverse: false }
	];

	/** Open-source avatars from DiceBear (notionists style, CC0 artwork). */
	const avatarSeeds = ['Aneka', 'Milo', 'Jade'];
	/** Fixed sparkles around the stars pill: position (% of pill), cycle, and offset. */
	const pillSparks = [
		{ x: -3, y: -18, life: 2.4, delay: 0, color: '#fde68a' },
		{ x: 34, y: -34, life: 3, delay: 1.1, color: '#ffffff' },
		{ x: 98, y: 6, life: 2.7, delay: 0.5, color: '#fde68a' },
		{ x: 70, y: 112, life: 3.2, delay: 1.8, color: '#ffffff' },
		{ x: 8, y: 104, life: 2.6, delay: 2.4, color: '#fecaca' }
	];

	const avatar = (seed: string) =>
		`https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=fde68a,fecaca,bfdbfe`;

	const logo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

	/* Sparkles over the headline (after Magic UI's Sparkles Text). Each star twinkles once,
	   then jumps to a new random spot on the next animation cycle. */
	type Spark = { id: number; x: number; y: number; color: string; delay: number; scale: number; life: number };
	const SPARK_COLORS = ['#fde68a', '#ffffff', '#fecaca'];
	const SPARK_COUNT = 12;
	let sparkId = 0;

	function makeSpark(initial = false): Spark {
		return {
			id: sparkId++,
			x: Math.random() * 100,
			y: Math.random() * 100,
			color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
			delay: initial ? Math.random() * 2 : 0,
			scale: 0.5 + Math.random() * 0.7,
			life: 1.4 + Math.random() * 1.4
		};
	}

	let sparks = $state<Spark[]>([]);

	/**
	 * Move a spark to a new spot when its cycle ends. Only position, color and size change:
	 * changing duration or delay on a running animation makes the browser recompute its
	 * progress, which caused visible blinking and runaway rapid respawns.
	 */
	function respawn(index: number) {
		const current = sparks[index];
		const next = makeSpark();
		sparks[index] = { ...current, x: next.x, y: next.y, color: next.color, scale: next.scale };
	}

	let headlineEl = $state<HTMLElement | null>(null);
	let lineCount = $state(0);
	let heroReady = $state(false);

	/** Tag each word with the visual line it wrapped onto, so lines rise in order. */
	function measureLines() {
		if (!headlineEl) return;
		let line = -1;
		let lastTop = -Infinity;
		headlineEl.querySelectorAll<HTMLElement>('[data-word]').forEach((word) => {
			if (word.offsetTop > lastTop + 2) {
				line += 1;
				lastTop = word.offsetTop;
			}
			word.style.setProperty('--line', String(line));
		});
		lineCount = line + 1;
	}

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		loadRepo();
		sparks = Array.from({ length: SPARK_COUNT }, () => makeSpark(true));

		let cancelled = false;
		// Wait for the webfont so line breaks are final before measuring.
		const fontsReady = document.fonts?.ready ?? Promise.resolve();
		fontsReady.then(() => {
			if (cancelled) return;
			measureLines();
			requestAnimationFrame(() => requestAnimationFrame(() => (heroReady = true)));
		});

		window.addEventListener('resize', measureLines);
		return () => {
			cancelled = true;
			window.removeEventListener('resize', measureLines);
		};
	});

	async function loadRepo() {
		try {
			const res = await fetch('https://api.github.com/repos/mwwlean/resourxes-repo', {
				headers: { Accept: 'application/vnd.github+json' }
			});
			if (res.ok) {
				const repo = await res.json();
				if (typeof repo.stargazers_count === 'number') stars = repo.stargazers_count;
			}
		} catch {
			/* ignore */
		}
	}

	function toggleTheme() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			/* ignore */
		}
	}
</script>

<svelte:head>
	<title>ResourXe · Curated developer tools</title>
	<noscript>
		<style>
			.hero-word,
			.hero-fade,
			.marquee-col {
				opacity: 1 !important;
				transform: none !important;
			}
		</style>
	</noscript>
</svelte:head>

<div class="landing min-h-dvh overflow-hidden bg-brand-deep text-white">
	<div class="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-4 sm:px-6">
		<header class="flex items-center justify-between py-5">
			<a href="/" class="flex items-center gap-2.5">
				<span
					class="flex size-9 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20"
				>
					<BookOpen class="size-4" />
				</span>
				<span class="text-base font-bold tracking-tight">ResourXe</span>
			</a>

			<div class="flex items-center gap-2">
				<Button
					href="https://github.com/mwwlean/resourxes-repo"
					target="_blank"
					rel="noopener noreferrer"
					variant="ghost"
					class="hidden rounded-full text-white/80 hover:bg-white/15 hover:text-white sm:inline-flex"
				>
					GitHub
					<ArrowUpRight class="size-4" />
				</Button>
				<Button
					variant="ghost"
					size="icon-lg"
					onclick={toggleTheme}
					class="size-9 rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
					aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if dark}
						<Sun class="size-4" />
					{:else}
						<Moon class="size-4" />
					{/if}
				</Button>
			</div>
		</header>

		<main
			class="grid flex-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
		>
			<div
				class="hero max-w-3xl"
				class:is-ready={heroReady}
				style="--after: {lineCount * 120 + 380}ms"
			>
				<span
					class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
				>
					{totalCategories} categories · {totals.all} hand-picked resources
				</span>

				<div class="relative mt-5">
					<h1
						bind:this={headlineEl}
						aria-label={headline}
						class="text-4xl font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl"
					>
						{#each headlineWords as word, i (i)}<span class="hero-mask" data-word aria-hidden="true"
								><span class="hero-word">{word}</span></span
							>{i < headlineWords.length - 1 ? ' ' : ''}{/each}
					</h1>

					<div aria-hidden="true" class="spark-layer pointer-events-none absolute inset-0">
						{#each sparks as spark, i (spark.id)}
							<svg
								class="spark"
								viewBox="0 0 21 21"
								style="left: {spark.x}%; top: {spark.y}%; --scale: {spark.scale}; animation-duration: {spark.life}s; animation-delay: {spark.delay}s"
								onanimationiteration={() => respawn(i)}
							>
								{@render starPath(spark.color)}
							</svg>
						{/each}
					</div>
				</div>
				<p class="hero-fade mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
					Hand-picked tools for developers, AI agents, and creatives, sorted into tidy categories so
					you can find what you need and get back to building.
				</p>

				<div class="hero-fade hero-fade-late mt-7 flex flex-wrap items-center gap-3">
					<a
						href={`${repoUrl}/stargazers`}
						target="_blank"
						rel="noopener noreferrer"
						class="stars-pill relative inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
					>
						<!-- Glowing border: a rotating light runs around the pill's edge. -->
						<span aria-hidden="true" class="glow-border glow-border-blur"></span>
						<span aria-hidden="true" class="glow-border"></span>
						{#each pillSparks as spark, i (i)}
							<svg
								aria-hidden="true"
								class="spark pill-spark"
								viewBox="0 0 21 21"
								style="left: {spark.x}%; top: {spark.y}%; --scale: 0.75; animation-duration: {spark.life}s; animation-delay: {spark.delay}s"
							>
								{@render starPath(spark.color)}
							</svg>
						{/each}
						<span class="flex -space-x-2">
							{#each avatarSeeds as seed (seed)}
								<img
									src={avatar(seed)}
									alt=""
									width="28"
									height="28"
									class="size-7 rounded-full bg-white ring-2 ring-white/90"
								/>
							{/each}
						</span>
						<Star class="size-4 fill-amber-300 text-amber-300" />
						<span class="font-bold text-white">{stars === null ? '…' : stars.toLocaleString()}</span>
						<span>{stars === 1 ? 'star' : 'stars'}</span>
					</a>
					<Button
						href={repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						size="lg"
						variant="secondary"
						class="rounded-full bg-white px-5 text-sm font-semibold text-primary hover:bg-white/90"
					>
						<Star class="size-4" />
						Star on GitHub
					</Button>
					<Button
						href="/tools"
						size="lg"
						variant="outline"
						class="rounded-full border-white/30 bg-white/10 px-5 text-sm font-semibold text-white shadow-none hover:bg-white/20 hover:text-white"
					>
						Browse resources
						<ArrowUpRight class="size-4" />
					</Button>
				</div>
			</div>

			<div
				aria-hidden="true"
				class="logo-cluster hidden select-none lg:block"
				class:is-ready={heroReady}
				style="--after: {lineCount * 120 + 380}ms"
			>
				<div class="marquee-mask ml-auto grid h-[600px] max-w-xl grid-cols-3 gap-4 overflow-hidden">
					{#each toolColumns as column, c (c)}
						<div class="marquee-col" style="--i: {c}">
							<div
								class="marquee-track"
								class:reverse={marquee[c].reverse}
								style="--duration: {marquee[c].duration}s"
							>
								{#each [0, 1] as copy (copy)}
									{#each column as tool (tool.name)}
										<div class="pb-4">
											<div
												class="flex items-center gap-3 rounded-2xl bg-white/10 p-3 shadow-lg shadow-black/10 ring-1 ring-white/20 backdrop-blur-md"
											>
												<span
													class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white"
												>
													<img src={logo(tool.domain)} alt="" class="size-6 object-contain" />
												</span>
												<span class="min-w-0 leading-tight">
													<span class="block truncate text-sm font-semibold">{tool.name}</span>
													<span class="block truncate text-xs text-white/60">{tool.tag}</span>
												</span>
											</div>
										</div>
									{/each}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</main>

		<footer class="border-t border-white/15">
			<div
				class="py-5 text-sm text-white/50"
			>
				<p>Created with love by Jan Leander Matutes</p>
			</div>

			<div class="overflow-hidden">
				<p
					aria-hidden="true"
					class="select-none bg-gradient-to-b from-white/70 via-white/30 to-transparent bg-clip-text text-left text-[clamp(4rem,17vw,15rem)] font-extrabold leading-[0.72] tracking-[-0.07em] text-transparent"
				>
					ResourXe
				</p>
			</div>
		</footer>
	</div>
</div>

{#snippet starPath(color: string)}
	<path
		fill={color}
		d="M9.825.844a.719.719 0 0 1 1.35 0l.687 1.876c.539 1.472.53 3.672 1.638 4.78 1.108 1.108 3.308 1.1 4.78 1.638l1.876.687a.719.719 0 0 1 0 1.35l-1.876.687c-1.472.539-3.672.53-4.78 1.638-1.108 1.108-1.1 3.308-1.638 4.78l-.687 1.876a.719.719 0 0 1-1.35 0l-.687-1.876c-.539-1.472-.53-3.672-1.638-4.78-1.108-1.108-3.308-1.1-4.78-1.638L.844 11.175a.719.719 0 0 1 0-1.35l1.876-.687c1.472-.539 3.672-.53 4.78-1.638 1.108-1.108 1.1-3.308 1.638-4.78L9.825.844Z"
	/>
{/snippet}

<style>
	/* Dark mode: near-black page with a soft brand glow instead of the full red fill. */
	:global(.dark) .landing {
		background-color: var(--color-background);
		background-image:
			radial-gradient(60rem 30rem at 15% -10%, rgb(239 68 68 / 0.22), transparent 70%),
			radial-gradient(40rem 24rem at 100% 110%, rgb(185 28 28 / 0.16), transparent 70%);
	}

	.landing {
		/* Soft spring: damping 0.72, settles with ~4% overshoot. */
		--spring: linear(
			0, 0.06, 0.199, 0.367, 0.534, 0.682, 0.803, 0.894, 0.959, 1, 1.025, 1.036, 1.038, 1.036,
			1.03, 1.024, 1.017, 1.012, 1.007, 1.004, 1.001, 1, 0.999, 0.999, 1
		);
	}

	/* Each word sits in its own clip box; the word rises up into view from below it. */
	.hero-mask {
		display: inline-block;
		overflow: hidden;
		vertical-align: top;
		/* Room for descenders and the spring overshoot without clipping. */
		padding-bottom: 0.12em;
		margin-bottom: -0.12em;
	}

	.hero-word {
		display: inline-block;
		transform: translateY(115%);
	}

	.hero-fade {
		opacity: 0;
		transform: translateY(10px);
	}

	.is-ready .hero-word {
		transform: none;
		transition: transform 1000ms var(--spring);
		transition-delay: calc(var(--line, 0) * 120ms);
	}

	.is-ready .hero-fade {
		opacity: 1;
		transform: none;
		transition:
			opacity 600ms ease-out,
			transform 600ms ease-out;
		transition-delay: var(--after);
	}

	.is-ready .hero-fade-late {
		transition-delay: calc(var(--after) + 100ms);
	}

	/* Headline sparkles: hidden until the lines have risen in. */
	.spark-layer {
		opacity: 0;
	}

	.is-ready .spark-layer {
		opacity: 1;
		transition: opacity 400ms ease-out;
		transition-delay: calc(var(--after) - 200ms);
	}

	.spark {
		position: absolute;
		width: 1.1rem;
		height: 1.1rem;
		translate: -50% -50%;
		transform: scale(0);
		animation-name: sparkle;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		filter: drop-shadow(0 0 6px rgb(255 255 255 / 0.55));
	}

	@keyframes sparkle {
		0% {
			transform: scale(0) rotate(0deg);
			opacity: 0;
		}
		45% {
			transform: scale(var(--scale)) rotate(75deg);
			opacity: 1;
		}
		100% {
			transform: scale(0) rotate(150deg);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spark-layer {
			display: none;
		}
	}

	/* Stars pill: a bright arc travels around the border, with a blurred copy as glow. */
	.glow-border {
		position: absolute;
		inset: -1px;
		border-radius: inherit;
		padding: 1.5px;
		background: conic-gradient(
			from var(--glow-angle),
			transparent 0deg,
			transparent 200deg,
			#fde68a 260deg,
			#ffffff 300deg,
			#fde68a 330deg,
			transparent 360deg
		);
		/* Show only the padding ring, not the fill. */
		mask:
			linear-gradient(#000 0 0) content-box exclude,
			linear-gradient(#000 0 0);
		animation: glow-spin 3.5s linear infinite;
		pointer-events: none;
	}

	.glow-border-blur {
		inset: -3px;
		padding: 4px;
		filter: blur(6px);
		opacity: 0.8;
	}

	@keyframes glow-spin {
		to {
			--glow-angle: 360deg;
		}
	}

	.pill-spark {
		width: 0.8rem;
		height: 0.8rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.glow-border {
			animation: none;
		}

		.pill-spark {
			display: none;
		}
	}

	/* Vertical marquee: columns fade in after the hero copy, then scroll forever. */
	.marquee-mask {
		mask-image: linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent);
	}

	.marquee-col {
		opacity: 0;
		transform: translateY(16px);
	}

	.is-ready .marquee-col {
		opacity: 1;
		transform: none;
		transition:
			opacity 700ms ease-out,
			transform 900ms var(--spring);
		transition-delay: calc(var(--after) + var(--i) * 90ms);
	}

	.marquee-track {
		animation: marquee-up var(--duration) linear infinite;
	}

	.marquee-track.reverse {
		animation-direction: reverse;
	}

	/* Pause on hover so a logo can actually be read. */
	.marquee-mask:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee-up {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-col,
		.is-ready .marquee-col {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.marquee-track {
			animation: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-word,
		.hero-fade,
		.is-ready .hero-word,
		.is-ready .hero-fade {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
