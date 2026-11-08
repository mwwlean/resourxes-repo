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
			{ name: 'Firebase Firestore', url: 'https://firebase.google.com/products/firestore', description: 'A NoSQL database built for real-time applications.' }
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
			{ name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', description: 'A design and prototyping tool for creating user experiences and interfaces.' }
		]
	},
	{
		slug: 'testing',
		name: 'Testing',
		icon: 'FlaskConical',
		blurb: 'Catch regressions before your users do.',
		items: [
			{ name: 'Jest', url: 'https://jestjs.io/', description: 'A JavaScript testing framework for React and Node.js applications.' },
			{ name: 'Mocha', url: 'https://mochajs.org/', description: 'A JavaScript test framework that runs on Node.js.' },
			{ name: 'Cypress', url: 'https://www.cypress.io/', description: 'A testing framework for running end-to-end tests in web applications.' },
			{ name: 'Selenium', url: 'https://www.selenium.dev/', description: 'A suite of tools for automating web browsers.' },
			{ name: 'Chai', url: 'https://www.chaijs.com/', description: 'An assertion library for Node.js and browsers.' }
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
			{ name: 'Hapi.js', url: 'https://hapi.dev/', description: 'A rich Node.js framework for building web applications and API services.' }
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
			{ name: 'Microsoft Azure', url: 'https://azure.microsoft.com/', description: 'A cloud computing platform for building, testing, and deploying applications.' }
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
			{ name: 'Bitbucket', url: 'https://bitbucket.org/', description: 'A Git repository management solution for teams, with cloud and on-premises options.' }
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
			{ name: 'GitHub Pages', url: 'https://pages.github.com/', description: 'A service to host static websites directly from GitHub repositories.' }
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
			{ name: 'Zapier', url: 'https://zapier.com/', description: 'A platform to automate workflows between different apps and services without coding.' }
		]
	},
	{
		slug: 'colors',
		name: 'Colors',
		icon: 'SwatchBook',
		blurb: 'Build accessible, intentional color systems.',
		items: [
			{ name: 'Huetone', url: 'https://huetone.ardov.me/', description: 'A tool to create accessible color systems.' }
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
			{ name: 'Ionic', url: 'https://ionic.io/ionicons', description: 'Beautifully crafted open source icons for use in web.' }
		]
	}
];

export const totalResources = categories.reduce((sum, category) => sum + category.items.length, 0);
