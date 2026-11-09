export type ResourceItem = {
	name: string;
	url: string;
	description: string;
};

export type ResourceCategory = {
	slug: string;
	name: string;
	icon: string;
	blurb: string;
	items: ResourceItem[];
};

export const categories: ResourceCategory[] = [
	{
		slug: 'languages',
		name: 'Languages',
		icon: 'Code2',
		blurb: 'Programming languages for every kind of build.',
		items: [
			{ name: 'JavaScript', url: 'https://www.javascript.com/', description: 'A dynamic, high-level programming language used for web development.' },
			{ name: 'Python', url: 'https://www.python.org/', description: 'A high-level programming language known for its readability and versatility in web development, data science, and machine learning.' },
			{ name: 'Ruby', url: 'https://www.ruby-lang.org/en/', description: 'A dynamic, open-source programming language with a focus on simplicity and productivity.' },
			{ name: 'Go', url: 'https://golang.org/', description: 'A statically typed programming language designed at Google for building fast and scalable applications.' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org/', description: 'A superset of JavaScript that adds optional static typing and other features for better development tools.' },
			{ name: 'Java', url: 'https://www.oracle.com/java/', description: 'A high-level, class-based, object-oriented programming language for cross-platform applications.' },
			{ name: 'C++', url: 'https://isocpp.org/', description: 'A powerful, general-purpose language for systems programming, game development, and high-performance applications.' },
			{ name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', description: 'A modern, object-oriented programming language developed by Microsoft.' },
			{ name: 'Swift', url: 'https://developer.apple.com/swift/', description: 'A powerful, intuitive language for building apps for iOS, Mac, watchOS, and tvOS.' },
			{ name: 'Kotlin', url: 'https://kotlinlang.org/', description: 'A statically typed language for modern, scalable applications, primarily used for Android development.' },
			{ name: 'PHP', url: 'https://www.php.net/', description: 'A widely-used open-source scripting language suited for web development and dynamic content.' },
			{ name: 'R', url: 'https://www.r-project.org/', description: 'A programming language and environment for statistical computing and graphics.' },
			{ name: 'Rust', url: 'https://www.rust-lang.org/', description: 'A systems programming language focused on safety, speed, and concurrency.' },
			{ name: 'Scala', url: 'https://www.scala-lang.org/', description: 'A high-level language combining functional and object-oriented programming for scalable applications.' },
			{ name: 'Dart', url: 'https://dart.dev/', description: 'A language optimized for mobile, desktop, and web apps, particularly for Flutter.' },
			{ name: 'Lua', url: 'https://www.lua.org/', description: 'A lightweight, embeddable scripting language used in game development and embedded systems.' },
			{ name: 'Perl', url: 'https://www.perl.org/', description: 'A general-purpose language known for text processing and ease of use in web development.' },
			{ name: 'Elixir', url: 'https://elixir-lang.org/', description: 'A dynamic, functional language for scalable and maintainable applications on the Erlang VM.' },
			{ name: 'Shell Scripting (Bash)', url: 'https://www.gnu.org/software/bash/', description: 'A scripting language for automating tasks on Unix-like systems and DevOps work.' },
			{ name: 'MATLAB', url: 'https://www.mathworks.com/products/matlab.html', description: 'A high-performance language for technical computing, numerical computing, and visualization.' },
			{ name: 'F#', url: 'https://fsharp.org/', description: 'A functional-first language on the .NET platform for academic and industry applications.' },
			{ name: 'Objective-C', url: 'https://developer.apple.com/objective-c/', description: 'A general-purpose, object-oriented language used for macOS and iOS development.' }
		]
	},
	{
		slug: 'frameworks',
		name: 'Frameworks',
		icon: 'Layers',
		blurb: 'Full-stack and front-end frameworks to ship faster.',
		items: [
			{ name: 'React.js', url: 'https://reactjs.org/', description: 'A JavaScript library for building user interfaces.' },
			{ name: 'Vue.js', url: 'https://vuejs.org/', description: 'A progressive JavaScript framework for building UIs.' },
			{ name: 'Angular', url: 'https://angular.io/', description: 'A TypeScript-based framework for building dynamic web applications.' },
			{ name: 'Svelte', url: 'https://svelte.dev/', description: 'A compiler that generates minimal, optimized JavaScript for fast web applications.' },
			{ name: 'Next.js', url: 'https://nextjs.org/', description: 'A React framework for server-side rendering and static web applications.' },
			{ name: 'Nuxt.js', url: 'https://nuxtjs.org/', description: 'A framework for building Vue.js applications with server-side rendering.' },
			{ name: 'Ember.js', url: 'https://emberjs.com/', description: 'An opinionated framework for building ambitious web applications.' },
			{ name: 'Backbone.js', url: 'https://backbonejs.org/', description: 'A JavaScript framework that provides the minimal structure for web applications.' },
			{ name: 'Meteor.js', url: 'https://www.meteor.com/', description: 'A full-stack JavaScript framework for modern web and mobile applications.' },
			{ name: 'Express.js', url: 'https://expressjs.com/', description: 'A minimal and flexible Node.js web application framework.' },
			{ name: 'Django', url: 'https://www.djangoproject.com/', description: 'A high-level Python framework that encourages rapid, clean, pragmatic design.' },
			{ name: 'Flask', url: 'https://flask.palletsprojects.com/', description: 'A lightweight Python web framework for building web applications.' },
			{ name: 'Ruby on Rails', url: 'https://rubyonrails.org/', description: 'A server-side Ruby framework focused on simplicity and productivity.' },
			{ name: 'Laravel', url: 'https://laravel.com/', description: 'A PHP framework focused on clean code and elegant syntax.' },
			{ name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', description: 'A framework for building Java-based web applications with minimal configuration.' },
			{ name: 'ASP.NET Core', url: 'https://dotnet.microsoft.com/en-us/apps/aspnet', description: 'A cross-platform, high-performance framework for modern web apps and APIs.' },
			{ name: 'NestJS', url: 'https://nestjs.com/', description: 'A progressive Node.js framework for efficient, scalable, enterprise-grade applications.' },
			{ name: 'Gatsby', url: 'https://www.gatsbyjs.com/', description: 'A React-based framework for building fast, static websites and apps.' },
			{ name: 'Hapi.js', url: 'https://hapi.dev/', description: 'A rich framework for building web applications and services in Node.js.' },
			{ name: 'Quasar Framework', url: 'https://quasar.dev/', description: 'A high-performance Vue.js framework with support for multiple platforms.' },
			{ name: 'Material-UI', url: 'https://mui.com/', description: 'A React component library that implements Google’s Material Design system.' }
		]
	},
	{
		slug: 'css-frameworks',
		name: 'CSS Frameworks',
		icon: 'Paintbrush',
		blurb: 'Foundations for responsive, consistent styling.',
		items: [
			{ name: 'Bulma', url: 'https://bulma.io/', description: 'A modern CSS framework based on Flexbox for responsive websites.' },
			{ name: 'Foundation', url: 'https://get.foundation/', description: 'A responsive front-end framework for mobile-first web projects.' },
			{ name: 'Tailwind CSS', url: 'https://tailwindcss.com/', description: 'A utility-first CSS framework for building custom designs with minimal effort.' },
			{ name: 'Bootstrap', url: 'https://getbootstrap.com/', description: 'A front-end framework with pre-built components and responsive grids.' }
		]
	},
	{
		slug: 'databases',
		name: 'Databases',
		icon: 'Database',
		blurb: 'Store, query, and scale your data.',
		items: [
			{ name: 'MongoDB', url: 'https://www.mongodb.com/', description: 'A NoSQL database for scalable, flexible data storage.' },
			{ name: 'PostgreSQL', url: 'https://www.postgresql.org/', description: 'A powerful, open-source relational database system.' },
			{ name: 'MySQL', url: 'https://www.mysql.com/', description: 'A popular open-source relational database management system.' },
			{ name: 'SQLite', url: 'https://www.sqlite.org/', description: 'A self-contained, serverless SQL database engine.' },
			{ name: 'Firebase Firestore', url: 'https://firebase.google.com/products/firestore', description: 'A NoSQL database built for real-time applications.' },
			{ name: "Redis", url: "https://redis.io/", description: "An in-memory data store used as a cache, message broker, and database." },
			{ name: "Supabase", url: "https://supabase.com/", description: "An open-source Firebase alternative built on Postgres with auth, storage, and realtime." },
			{ name: "Neon", url: "https://neon.tech/", description: "Serverless Postgres with branching, autoscaling, and a generous free tier." },
			{ name: "PlanetScale", url: "https://planetscale.com/", description: "A managed, horizontally scalable MySQL and Postgres platform." },
			{ name: "Prisma", url: "https://www.prisma.io/", description: "A type-safe ORM for Node.js and TypeScript with migrations and a visual studio." },
			{ name: "Drizzle ORM", url: "https://orm.drizzle.team/", description: "A lightweight, SQL-like TypeScript ORM with zero dependencies." },
			{ name: "Turso", url: "https://turso.tech/", description: "Edge-hosted SQLite databases built on libSQL." }
		]
	},
	{
		slug: 'design-prototyping',
		name: 'Design & Prototyping',
		icon: 'PenTool',
		blurb: 'Turn ideas into interfaces before you build.',
		items: [
			{ name: 'Figma', url: 'https://www.figma.com/', description: 'A cloud-based design tool for UI/UX design and prototyping.' },
			{ name: 'Sketch', url: 'https://www.sketch.com/', description: 'A vector-based design tool for macOS used for UI design and prototyping.' },
			{ name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', description: 'A design and prototyping tool for creating user experiences and interfaces.' },
			{ name: "Penpot", url: "https://penpot.app/", description: "An open-source design and prototyping platform for teams." },
			{ name: "Framer", url: "https://www.framer.com/", description: "Design and publish interactive websites without writing code." },
			{ name: "Excalidraw", url: "https://excalidraw.com/", description: "A virtual whiteboard for hand-drawn style diagrams and wireframes." },
			{ name: "Whimsical", url: "https://whimsical.com/", description: "Flowcharts, wireframes, and mind maps in one fast workspace." }
		]
	},
	{
		slug: 'testing',
		name: 'Testing',
		icon: 'FlaskConical',
		blurb: 'Catch regressions before your users do.',
		items: [
			{ name: "Agent QA", url: "https://github.com/vostride/agent-qa", description: "A source-available CLI and MCP tool for natural-language web and mobile application testing, with execution memory and UI adaptation." },
			{ name: 'Jest', url: 'https://jestjs.io/', description: 'A JavaScript testing framework for React and Node.js applications.' },
			{ name: 'Mocha', url: 'https://mochajs.org/', description: 'A JavaScript test framework that runs on Node.js.' },
			{ name: 'Cypress', url: 'https://www.cypress.io/', description: 'A testing framework for running end-to-end tests in web applications.' },
			{ name: 'Selenium', url: 'https://www.selenium.dev/', description: 'A suite of tools for automating web browsers.' },
			{ name: 'Chai', url: 'https://www.chaijs.com/', description: 'An assertion library for Node.js and browsers.' },
			{ name: "Vitest", url: "https://vitest.dev/", description: "A blazing-fast unit test framework powered by Vite." },
			{ name: "Playwright", url: "https://playwright.dev/", description: "Reliable end-to-end testing across Chromium, Firefox, and WebKit." },
			{ name: "Testing Library", url: "https://testing-library.com/", description: "Simple utilities that encourage testing UI the way users use it." },
			{ name: "Storybook", url: "https://storybook.js.org/", description: "A workshop for building, documenting, and testing UI components in isolation." },
			{ name: "k6", url: "https://k6.io/", description: "An open-source load testing tool for APIs and websites." }
		]
	},
	{
		slug: 'api-development',
		name: 'API Development',
		icon: 'Webhook',
		blurb: 'Design, test, and document APIs.',
		items: [
			{ name: 'Postman', url: 'https://www.postman.com/', description: 'A tool for testing and interacting with APIs.' },
			{ name: 'Swagger', url: 'https://swagger.io/', description: 'A framework for API specification, documentation, and design.' },
			{ name: 'GraphQL', url: 'https://graphql.org/', description: 'A query language for APIs with a runtime that executes queries against a type system.' },
			{ name: 'Express.js', url: 'https://expressjs.com/', description: 'A minimal and flexible Node.js web application framework for building APIs.' },
			{ name: 'Hapi.js', url: 'https://hapi.dev/', description: 'A rich Node.js framework for building web applications and API services.' },
			{ name: "Insomnia", url: "https://insomnia.rest/", description: "An open-source API client for REST, GraphQL, and gRPC." },
			{ name: "Bruno", url: "https://www.usebruno.com/", description: "A fast, git-friendly, offline-first API client." },
			{ name: "Hoppscotch", url: "https://hoppscotch.io/", description: "A lightweight, open-source API development ecosystem in the browser." },
			{ name: "Hono", url: "https://hono.dev/", description: "A small, ultrafast web framework that runs on any JavaScript runtime." },
			{ name: "Fastify", url: "https://fastify.dev/", description: "A fast, low-overhead web framework for Node.js." },
			{ name: "tRPC", url: "https://trpc.io/", description: "End-to-end typesafe APIs for TypeScript without schemas or codegen." },
			{ name: "FastAPI", url: "https://fastapi.tiangolo.com/", description: "A modern, high-performance Python framework for building APIs." }
		]
	},
	{
		slug: 'cloud-services',
		name: 'Cloud Services',
		icon: 'Cloud',
		blurb: 'Infrastructure and platforms that scale with you.',
		items: [
			{ name: 'Heroku', url: 'https://www.heroku.com/', description: 'A cloud platform as a service (PaaS) for deploying web apps.' },
			{ name: 'AWS (Amazon Web Services)', url: 'https://aws.amazon.com/', description: 'A cloud platform offering a wide range of services for scalability, storage, and computing.' },
			{ name: 'Google Cloud Platform', url: 'https://cloud.google.com/', description: 'Cloud computing services from Google for app development, hosting, and infrastructure.' },
			{ name: 'Microsoft Azure', url: 'https://azure.microsoft.com/', description: 'A cloud computing platform for building, testing, and deploying applications.' },
			{ name: "Cloudflare", url: "https://www.cloudflare.com/", description: "CDN, DNS, security, and edge compute with Workers and R2 storage." },
			{ name: "DigitalOcean", url: "https://www.digitalocean.com/", description: "Simple cloud infrastructure: droplets, managed databases, and apps." },
			{ name: "Fly.io", url: "https://fly.io/", description: "Run full-stack apps and databases close to your users worldwide." },
			{ name: "Railway", url: "https://railway.com/", description: "Deploy apps, databases, and cron jobs with minimal configuration." },
			{ name: "Render", url: "https://render.com/", description: "A unified cloud for web services, static sites, and databases." }
		]
	},
	{
		slug: 'version-control',
		name: 'Version Control',
		icon: 'GitBranch',
		blurb: 'Track changes and collaborate on code.',
		items: [
			{ name: 'Git', url: 'https://git-scm.com/', description: 'A distributed version control system for tracking code changes and project history.' },
			{ name: 'GitHub', url: 'https://github.com/', description: 'A platform for version control and collaboration using Git.' },
			{ name: 'GitLab', url: 'https://about.gitlab.com/', description: 'A platform for Git repository management and DevOps lifecycle management, including CI/CD.' },
			{ name: 'Bitbucket', url: 'https://bitbucket.org/', description: 'A Git repository management solution for teams, with cloud and on-premises options.' },
			{ name: "GitHub Desktop", url: "https://desktop.github.com/", description: "A graphical Git client for working with GitHub repositories." },
			{ name: "Lazygit", url: "https://github.com/jesseduffield/lazygit", description: "A simple terminal UI for common Git commands." },
			{ name: "Oh Shit, Git!?!", url: "https://ohshitgit.com/", description: "Plain-English fixes for common Git mistakes." },
			{ name: "Conventional Commits", url: "https://www.conventionalcommits.org/", description: "A lightweight convention for human- and machine-readable commit messages." }
		]
	},
	{
		slug: 'deployment',
		name: 'Deployment',
		icon: 'Rocket',
		blurb: 'Ship containers, static sites, and serverless apps.',
		items: [
			{ name: 'Docker', url: 'https://www.docker.com/', description: 'A platform for developing, shipping, and running applications inside containers.' },
			{ name: 'Kubernetes', url: 'https://kubernetes.io/', description: 'An open-source system for automating deployment, scaling, and containerized applications.' },
			{ name: 'Vercel', url: 'https://vercel.com/', description: 'A platform for deploying serverless applications and static sites with automatic scaling.' },
			{ name: 'Netlify', url: 'https://www.netlify.com/', description: 'A platform for building, deploying, and hosting static websites and serverless functions.' },
			{ name: 'GitHub Pages', url: 'https://pages.github.com/', description: 'A service to host static websites directly from GitHub repositories.' },
			{ name: "GitHub Actions", url: "https://github.com/features/actions", description: "CI/CD workflows that build, test, and deploy from your repository." },
			{ name: "Cloudflare Pages", url: "https://pages.cloudflare.com/", description: "Deploy static and full-stack sites to Cloudflare\u2019s edge network." },
			{ name: "Coolify", url: "https://coolify.io/", description: "An open-source, self-hostable alternative to Heroku and Netlify." },
			{ name: "Terraform", url: "https://www.terraform.io/", description: "Infrastructure as code for provisioning cloud resources." }
		]
	},
	{
		slug: 'productivity',
		name: 'Productivity',
		icon: 'ListChecks',
		blurb: 'Notes, tasks, messaging, and automation.',
		items: [
			{ name: 'Notion', url: 'https://www.notion.so/', description: 'A tool for taking notes, managing tasks, and collaborating on documents.' },
			{ name: 'Trello', url: 'https://trello.com/', description: 'A visual tool for organizing tasks and projects using boards, lists, and cards.' },
			{ name: 'Slack', url: 'https://slack.com/', description: 'A messaging platform for team collaboration and communication, with channels and integrations.' },
			{ name: 'Zapier', url: 'https://zapier.com/', description: 'A platform to automate workflows between different apps and services without coding.' },
			{ name: "Glim", url: "https://github.com/NeoPanic/Glim", description: "A free, MIT-licensed macOS file viewer for Markdown, source code, PDF/Office previews, and data files, with basic UTF-8 editing." },
			{ name: "Linear", url: "https://linear.app/", description: "A fast issue tracker and project planner built for software teams." },
			{ name: "Obsidian", url: "https://obsidian.md/", description: "A private, local-first knowledge base built on Markdown files." },
			{ name: "Raycast", url: "https://www.raycast.com/", description: "An extensible launcher for macOS with snippets, scripts, and AI." },
			{ name: "n8n", url: "https://n8n.io/", description: "A fair-code workflow automation tool you can self-host." }
		]
	},
	{
		slug: 'colors',
		name: 'Colors',
		icon: 'SwatchBook',
		blurb: 'Build accessible, intentional color systems.',
		items: [
			{ name: 'Huetone', url: 'https://huetone.ardov.me/', description: 'A tool to create accessible color systems.' },
			{ name: "Coolors", url: "https://coolors.co/", description: "A fast color palette generator with export options." },
			{ name: "Realtime Colors", url: "https://www.realtimecolors.com/", description: "Preview a color palette and fonts on a real website layout." },
			{ name: "UI Colors", url: "https://uicolors.app/", description: "Generate Tailwind CSS color scales from a single hex value." },
			{ name: "Radix Colors", url: "https://www.radix-ui.com/colors", description: "An accessible color system designed for UI with light and dark scales." },
			{ name: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", description: "Check text and background contrast against WCAG guidelines." },
			{ name: "OKLCH Color Picker", url: "https://oklch.com/", description: "A color picker and converter for the perceptual OKLCH color space." }
		]
	},
	{
		slug: 'icons',
		name: 'Icons',
		icon: 'Shapes',
		blurb: 'Consistent icon sets for polished interfaces.',
		items: [
			{ name: 'Lucide', url: 'https://lucide.dev/', description: 'Beautiful & consistent open source icons.' },
			{ name: 'Iconoir', url: 'https://iconoir.com/', description: 'Free library of 900+ open source icons.' },
			{ name: 'Ionic', url: 'https://ionic.io/ionicons', description: 'Beautifully crafted open source icons for use in web.' },
			{ name: "Heroicons", url: "https://heroicons.com/", description: "Hand-crafted SVG icons from the makers of Tailwind CSS." },
			{ name: "Phosphor Icons", url: "https://phosphoricons.com/", description: "A flexible icon family with six weights." },
			{ name: "Tabler Icons", url: "https://tabler.io/icons", description: "Thousands of free, pixel-perfect MIT-licensed SVG icons." },
			{ name: "Iconify", url: "https://iconify.design/", description: "One API and search for 200,000+ open source icons from many sets." },
			{ name: "Simple Icons", url: "https://simpleicons.org/", description: "Free SVG icons for popular brands." },
			{ name: "Remix Icon", url: "https://remixicon.com/", description: "Open-source neutral-style system icons." }
		]
	},
	{
		slug: 'editors-terminals',
		name: "Editors & Terminals",
		icon: 'Terminal',
		blurb: "Where the code actually gets written and run.",
		items: [
			{ name: "Visual Studio Code", url: "https://code.visualstudio.com/", description: "A free, extensible code editor from Microsoft." },
			{ name: "Zed", url: "https://zed.dev/", description: "A high-performance, multiplayer code editor written in Rust." },
			{ name: "Neovim", url: "https://neovim.io/", description: "A hyperextensible, Vim-based text editor." },
			{ name: "JetBrains IDEs", url: "https://www.jetbrains.com/", description: "Full-featured IDEs like IntelliJ IDEA, WebStorm, and PyCharm." },
			{ name: "Ghostty", url: "https://ghostty.org/", description: "A fast, native, feature-rich terminal emulator." },
			{ name: "WezTerm", url: "https://wezterm.org/", description: "A GPU-accelerated, cross-platform terminal and multiplexer." },
			{ name: "Warp", url: "https://www.warp.dev/", description: "A modern terminal with blocks, AI command search, and workflows." },
			{ name: "Oh My Zsh", url: "https://ohmyz.sh/", description: "A framework for managing your Zsh configuration with themes and plugins." },
			{ name: "Starship", url: "https://starship.rs/", description: "A minimal, fast, and customizable prompt for any shell." }
		]
	},
	{
		slug: 'runtimes-packages',
		name: "Runtimes & Packages",
		icon: 'Boxes',
		blurb: "Runtimes, package managers, and build tools.",
		items: [
			{ name: "Node.js", url: "https://nodejs.org/", description: "The JavaScript runtime built on Chrome\u2019s V8 engine." },
			{ name: "Bun", url: "https://bun.sh/", description: "An all-in-one JavaScript runtime, bundler, test runner, and package manager." },
			{ name: "Deno", url: "https://deno.com/", description: "A secure runtime for JavaScript and TypeScript with built-in tooling." },
			{ name: "pnpm", url: "https://pnpm.io/", description: "A fast, disk-space-efficient package manager." },
			{ name: "Vite", url: "https://vite.dev/", description: "A next-generation frontend build tool with instant dev server startup." },
			{ name: "uv", url: "https://docs.astral.sh/uv/", description: "An extremely fast Python package and project manager written in Rust." },
			{ name: "npm", url: "https://www.npmjs.com/", description: "The world\u2019s largest JavaScript package registry." },
			{ name: "Bundlephobia", url: "https://bundlephobia.com/", description: "Find the cost of adding an npm package to your bundle." }
		]
	},
	{
		slug: 'auth-security',
		name: "Auth & Security",
		icon: 'Shield',
		blurb: "Sign-in, secrets, and keeping your app safe.",
		items: [
			{ name: "Auth.js", url: "https://authjs.dev/", description: "Open-source authentication for web frameworks." },
			{ name: "Better Auth", url: "https://www.better-auth.com/", description: "A framework-agnostic, comprehensive authentication library for TypeScript." },
			{ name: "Clerk", url: "https://clerk.com/", description: "Drop-in authentication and user management components." },
			{ name: "Lucia", url: "https://lucia-auth.com/", description: "A learning resource for implementing sessions and auth from scratch." },
			{ name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/", description: "The standard awareness document for web application security risks." },
			{ name: "Snyk", url: "https://snyk.io/", description: "Find and fix vulnerabilities in code, dependencies, and containers." },
			{ name: "Infisical", url: "https://infisical.com/", description: "Open-source secret management for teams and infrastructure." },
			{ name: "Let\u2019s Encrypt", url: "https://letsencrypt.org/", description: "Free, automated TLS certificates." }
		]
	},
	{
		slug: 'monitoring-analytics',
		name: "Monitoring & Analytics",
		icon: 'Activity',
		blurb: "Know when things break and how people use your app.",
		items: [
			{ name: "Sentry", url: "https://sentry.io/", description: "Error tracking and performance monitoring for every platform." },
			{ name: "PostHog", url: "https://posthog.com/", description: "Open-source product analytics, session replay, and feature flags." },
			{ name: "Plausible", url: "https://plausible.io/", description: "Lightweight, privacy-friendly website analytics." },
			{ name: "Umami", url: "https://umami.is/", description: "Simple, open-source, privacy-focused web analytics." },
			{ name: "Grafana", url: "https://grafana.com/", description: "Dashboards and observability for metrics, logs, and traces." },
			{ name: "Better Stack", url: "https://betterstack.com/", description: "Uptime monitoring, incident management, and log management." },
			{ name: "PageSpeed Insights", url: "https://pagespeed.web.dev/", description: "Analyze page performance and Core Web Vitals." }
		]
	},
	{
		slug: 'learning-docs',
		name: "Learning & Docs",
		icon: 'GraduationCap',
		blurb: "References and courses to level up.",
		items: [
			{ name: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "The definitive reference for HTML, CSS, JavaScript, and web APIs." },
			{ name: "web.dev", url: "https://web.dev/", description: "Google\u2019s guidance for building modern, fast, accessible websites." },
			{ name: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Free, project-based coding curriculum and certifications." },
			{ name: "The Odin Project", url: "https://www.theodinproject.com/", description: "A free, open-source full-stack web development curriculum." },
			{ name: "roadmap.sh", url: "https://roadmap.sh/", description: "Community-made learning roadmaps for developer roles and skills." },
			{ name: "Can I use", url: "https://caniuse.com/", description: "Browser support tables for front-end web technologies." },
			{ name: "DevDocs", url: "https://devdocs.io/", description: "Fast, offline-capable API documentation for many languages and tools." },
			{ name: "Exercism", url: "https://exercism.org/", description: "Practice coding in 70+ languages with mentoring." },
			{ name: "javascript.info", url: "https://javascript.info/", description: "The modern JavaScript tutorial, from basics to advanced topics." }
		]
	},
	{
		slug: 'dev-utilities',
		name: "Dev Utilities",
		icon: 'Wrench',
		blurb: "Small tools that save big chunks of time.",
		items: [
			{ name: "regex101", url: "https://regex101.com/", description: "Build, test, and debug regular expressions with explanations." },
			{ name: "crontab.guru", url: "https://crontab.guru/", description: "A quick editor for cron schedule expressions." },
			{ name: "JSON Crack", url: "https://jsoncrack.com/", description: "Visualize JSON and other data formats as interactive graphs." },
			{ name: "Transform", url: "https://transform.tools/", description: "Convert between JSON, TypeScript, GraphQL, and more." },
			{ name: "IT Tools", url: "https://it-tools.tech/", description: "A collection of handy online tools for developers." },
			{ name: "Squoosh", url: "https://squoosh.app/", description: "Compress and compare images right in the browser." },
			{ name: "SVGOMG", url: "https://jakearchibald.github.io/svgomg/", description: "A GUI for SVGO to optimize SVG files." },
			{ name: "Carbon", url: "https://carbon.now.sh/", description: "Create beautiful images of your source code." },
			{ name: "ngrok", url: "https://ngrok.com/", description: "Expose a local server to the internet with a secure tunnel." }
		]
	},
	{
		slug: 'open-source-avatars',
		name: "Open-Source Avatars",
		icon: 'Users',
		blurb: "Avatar generators and libraries you can drop into any app.",
		items: [
			{ name: "DiceBear", url: "https://www.dicebear.com/", description: "An open-source avatar library with 30+ styles, available as an API, JS library, and Figma plugin." },
			{ name: "Multiavatar", url: "https://multiavatar.com/", description: "Generates unique multicultural avatars from any text, with an open-source JS library." },
			{ name: "UI Avatars", url: "https://ui-avatars.com/", description: "Generate initials avatars from a name with a simple URL API." },
			{ name: "Notion Avatar Maker", url: "https://notion-avatar.app/", description: "An open-source tool for making Notion-style illustrated avatars." },
			{ name: "Avvvatars", url: "https://avvvatars.com/", description: "Beautifully crafted, open-source React avatar placeholders." },
			{ name: "Avatar Placeholder", url: "https://avatar.iran.liara.run/", description: "A free, open-source API for random and initials-based placeholder avatars." },
			{ name: "Random User Generator", url: "https://randomuser.me/", description: "A free API for random user data, including portrait photos." }
		]
	},
	{
		slug: 'mock-data',
		name: "Mock Data & Placeholders",
		icon: 'Database',
		blurb: "Fake data, test APIs, and placeholders for building before the backend exists.",
		items: [
			{ name: "Faker", url: "https://fakerjs.dev/", description: "Generate massive amounts of realistic fake data in JavaScript and TypeScript." },
			{ name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com/", description: "A free fake REST API for testing and prototyping." },
			{ name: "DummyJSON", url: "https://dummyjson.com/", description: "A fake REST API with products, users, posts, and auth for prototyping." },
			{ name: "Mockaroo", url: "https://www.mockaroo.com/", description: "Generate realistic test data in CSV, JSON, SQL, and Excel formats." },
			{ name: "Mock Service Worker", url: "https://mswjs.io/", description: "API mocking library that intercepts requests at the network level." },
			{ name: "Placehold", url: "https://placehold.co/", description: "Fast, free placeholder images with custom sizes, colors, and text." }
		]
	}
];

export const totalResources = categories.reduce((sum, category) => sum + category.items.length, 0);
