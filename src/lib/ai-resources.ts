import type { ResourceCategory } from './resources';

export const aiCategories: ResourceCategory[] = [
	{
		slug: 'ai-coding-agents',
		name: 'AI Coding Agents',
		icon: 'Bot',
		blurb: 'Agents that write, refactor, and ship code alongside you.',
		items: [
			{ name: 'Claude Code', url: 'https://www.anthropic.com/claude-code', description: 'Anthropic’s agentic coding tool that lives in your terminal and works across your codebase.' },
			{ name: 'OpenAI Codex', url: 'https://openai.com/codex/', description: 'OpenAI’s software engineering agent for writing features, fixing bugs, and opening pull requests.' },
			{ name: 'Gemini CLI', url: 'https://github.com/google-gemini/gemini-cli', description: 'Google’s open-source AI agent for the terminal, powered by Gemini.' },
			{ name: 'Cursor', url: 'https://cursor.com/', description: 'An AI-first code editor with agent mode, tab completion, and codebase-aware chat.' },
			{ name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI pair programmer with inline suggestions, chat, and an autonomous coding agent.' },
			{ name: 'Aider', url: 'https://aider.chat/', description: 'An open-source AI pair programming tool that edits code in your local git repo.' },
			{ name: 'Cline', url: 'https://cline.bot/', description: 'An open-source autonomous coding agent for VS Code with tool use and browser control.' },
			{ name: 'Windsurf', url: 'https://windsurf.com/', description: 'An agentic IDE built around Cascade, a context-aware AI coding assistant.' },
			{ name: 'Continue', url: 'https://www.continue.dev/', description: 'An open-source AI code assistant you can customize and run with any model.' },
			{ name: 'OpenHands', url: 'https://github.com/All-Hands-AI/OpenHands', description: 'An open-source platform for software development agents that can code and run commands.' },
			{ name: "Zed AI", url: "https://zed.dev/ai", description: "Agentic editing and inline AI built into the Zed editor." },
			{ name: "Roo Code", url: "https://roocode.com/", description: "An open-source AI coding agent for VS Code with custom modes." },
			{ name: "Bolt.new", url: "https://bolt.new/", description: "Prompt, run, edit, and deploy full-stack web apps in the browser." },
			{ name: "v0", url: "https://v0.app/", description: "Vercel\u2019s AI app builder for generating UI and full-stack apps." },
			{ name: "Lovable", url: "https://lovable.dev/", description: "Build web apps by chatting with AI." }
		]
	},
	{
		slug: 'agent-frameworks',
		name: 'Agent Frameworks',
		icon: 'Blocks',
		blurb: 'Libraries for building multi-step, tool-using AI agents.',
		items: [
			{ name: 'LangChain', url: 'https://www.langchain.com/', description: 'A framework for composing LLM-powered applications with tools, memory, and retrieval.' },
			{ name: 'LangGraph', url: 'https://www.langchain.com/langgraph', description: 'A library for building stateful, multi-actor agents as graphs.' },
			{ name: 'LlamaIndex', url: 'https://www.llamaindex.ai/', description: 'A data framework for connecting LLMs to your private data and building agents.' },
			{ name: 'CrewAI', url: 'https://www.crewai.com/', description: 'A framework for orchestrating role-playing, collaborative multi-agent systems.' },
			{ name: 'AutoGen', url: 'https://microsoft.github.io/autogen/', description: 'Microsoft’s framework for building conversational multi-agent applications.' },
			{ name: 'Semantic Kernel', url: 'https://learn.microsoft.com/en-us/semantic-kernel/', description: 'Microsoft’s SDK for integrating LLMs into C#, Python, and Java apps.' },
			{ name: 'Mastra', url: 'https://mastra.ai/', description: 'A TypeScript agent framework with workflows, RAG, and evals.' },
			{ name: 'Pydantic AI', url: 'https://ai.pydantic.dev/', description: 'A Python agent framework that brings Pydantic-style type safety to LLM apps.' },
			{ name: 'OpenAI Agents SDK', url: 'https://openai.github.io/openai-agents-python/', description: 'A lightweight SDK for building agents with handoffs, guardrails, and tracing.' },
			{ name: "Claude Agent SDK", url: "https://docs.anthropic.com/en/docs/claude-code/sdk", description: "Build custom agents on the same harness that powers Claude Code." },
			{ name: "Vercel AI SDK", url: "https://ai-sdk.dev/", description: "A TypeScript toolkit for building AI apps and agents with any model." },
			{ name: "DSPy", url: "https://dspy.ai/", description: "A framework for programming, rather than prompting, language models." },
			{ name: "Haystack", url: "https://haystack.deepset.ai/", description: "An open-source framework for building production RAG and agent pipelines." }
		]
	},
	{
		slug: 'mcp-tooling',
		name: 'MCP & Tooling',
		icon: 'Webhook',
		blurb: 'Connect agents to tools, data, and each other.',
		items: [
			{ name: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/', description: 'An open standard for connecting AI models to tools and data sources.' },
			{ name: 'MCP Servers', url: 'https://github.com/modelcontextprotocol/servers', description: 'Reference and community MCP servers for common tools and APIs.' },
			{ name: 'Composio', url: 'https://composio.dev/', description: 'Tool integrations that let agents take actions across hundreds of apps.' },
			{ name: 'Smithery', url: 'https://smithery.ai/', description: 'A registry for discovering and installing MCP servers.' },
			{ name: 'LangSmith', url: 'https://www.langchain.com/langsmith', description: 'Tracing, evaluation, and monitoring for LLM applications and agents.' },
			{ name: 'Langfuse', url: 'https://langfuse.com/', description: 'An open-source observability platform for LLM applications.' },
			{ name: 'Promptfoo', url: 'https://www.promptfoo.dev/', description: 'An open-source tool for testing, evaluating, and red-teaming LLM prompts.' }
		]
	},
	{
		slug: 'local-models',
		name: 'Local Models & Runtimes',
		icon: 'Rocket',
		blurb: 'Run open models on your own machine or infra.',
		items: [
			{ name: 'Ollama', url: 'https://ollama.com/', description: 'Run open-source LLMs locally with a simple CLI and API.' },
			{ name: 'LM Studio', url: 'https://lmstudio.ai/', description: 'A desktop app for discovering and running local LLMs with a chat UI.' },
			{ name: 'llama.cpp', url: 'https://github.com/ggml-org/llama.cpp', description: 'An efficient C/C++ inference engine for running LLMs on consumer hardware.' },
			{ name: 'vLLM', url: 'https://www.vllm.ai/', description: 'A high-throughput, production-grade LLM serving engine.' },
			{ name: 'Hugging Face', url: 'https://huggingface.co/', description: 'The hub for open models, datasets, and ML tooling.' },
			{ name: 'OpenRouter', url: 'https://openrouter.ai/', description: 'A unified API for accessing many models and providers.' }
		]
	},
	{
		slug: 'rag-data',
		name: 'RAG & Vector Data',
		icon: 'Database',
		blurb: 'Give agents memory and grounded context.',
		items: [
			{ name: 'Pinecone', url: 'https://www.pinecone.io/', description: 'A managed vector database for semantic search and RAG.' },
			{ name: 'Weaviate', url: 'https://weaviate.io/', description: 'An open-source vector database with hybrid search and built-in modules.' },
			{ name: 'Chroma', url: 'https://www.trychroma.com/', description: 'An open-source embedding database built for AI applications.' },
			{ name: 'Qdrant', url: 'https://qdrant.tech/', description: 'A high-performance vector similarity search engine.' },
			{ name: 'pgvector', url: 'https://github.com/pgvector/pgvector', description: 'Vector similarity search for Postgres.' },
			{ name: "LanceDB", url: "https://lancedb.com/", description: "A serverless, embedded vector database for multimodal AI." },
			{ name: "Milvus", url: "https://milvus.io/", description: "An open-source vector database built for scale." },
			{ name: "Unstructured", url: "https://unstructured.io/", description: "Turn PDFs, docs, and HTML into clean data for LLMs." },
			{ name: "Firecrawl", url: "https://www.firecrawl.dev/", description: "Turn websites into LLM-ready Markdown or structured data." }
		]
	},
	{
		slug: 'ai-platforms',
		name: 'AI Platforms',
		icon: 'Sparkles',
		blurb: 'Model providers and platforms for building with AI.',
		items: [
			{ name: 'Anthropic', url: 'https://www.anthropic.com/', description: 'The AI research company behind the Claude family of models.' },
			{ name: 'OpenAI', url: 'https://openai.com/', description: 'Provider of the GPT and o-series models and the OpenAI API.' },
			{ name: 'Google AI Studio', url: 'https://aistudio.google.com/', description: 'A platform for prototyping with Google’s Gemini models.' },
			{ name: 'Groq', url: 'https://groq.com/', description: 'Ultra-fast LLM inference on custom LPU hardware.' },
			{ name: 'Mistral AI', url: 'https://mistral.ai/', description: 'An AI company building efficient open and commercial models.' },
			{ name: 'Replicate', url: 'https://replicate.com/', description: 'Run and fine-tune open models via an API.' },
			{ name: "Together AI", url: "https://www.together.ai/", description: "Run, fine-tune, and deploy open-source models via API." },
			{ name: "Fireworks AI", url: "https://fireworks.ai/", description: "Fast inference and fine-tuning for open models." },
			{ name: "Cohere", url: "https://cohere.com/", description: "Enterprise LLMs for search, retrieval, and generation." },
			{ name: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/", description: "Access foundation models from multiple providers on AWS." }
		]
	},
	{
		slug: 'prompting-learning',
		name: "Prompting & Learning",
		icon: 'GraduationCap',
		blurb: "Guides for getting better results from models.",
		items: [
			{ name: "Anthropic Docs", url: "https://docs.anthropic.com/", description: "Official guides and API reference for building with Claude." },
			{ name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", description: "A comprehensive guide to prompting techniques and research." },
			{ name: "Anthropic Courses", url: "https://github.com/anthropics/courses", description: "Free educational courses on prompting and building with Claude." },
			{ name: "Hugging Face Learn", url: "https://huggingface.co/learn", description: "Free courses on LLMs, agents, diffusion, and more." },
			{ name: "DeepLearning.AI", url: "https://www.deeplearning.ai/", description: "Short courses and specializations on AI and machine learning." },
			{ name: "fast.ai", url: "https://www.fast.ai/", description: "Practical deep learning courses for coders." }
		]
	},
	{
		slug: 'ai-media',
		name: "AI Image, Video & Voice",
		icon: 'Wand2',
		blurb: "Generate and edit images, video, and audio.",
		items: [
			{ name: "Midjourney", url: "https://www.midjourney.com/", description: "High-quality AI image generation from text prompts." },
			{ name: "Ideogram", url: "https://ideogram.ai/", description: "AI image generation with strong text rendering." },
			{ name: "Runway", url: "https://runwayml.com/", description: "AI tools for generating and editing video." },
			{ name: "ElevenLabs", url: "https://elevenlabs.io/", description: "Realistic AI voice generation, cloning, and dubbing." },
			{ name: "Suno", url: "https://suno.com/", description: "Create songs from text prompts with AI." },
			{ name: "ComfyUI", url: "https://www.comfy.org/", description: "A node-based interface for building diffusion model workflows." },
			{ name: "Krea", url: "https://www.krea.ai/", description: "Real-time AI image generation, enhancement, and video." }
		]
	},
	{
		slug: 'ai-assistants',
		name: "AI Assistants & Research",
		icon: 'Bot',
		blurb: "Chat assistants and AI-powered search.",
		items: [
			{ name: "Claude", url: "https://claude.ai/", description: "Anthropic\u2019s AI assistant for writing, analysis, coding, and research." },
			{ name: "ChatGPT", url: "https://chatgpt.com/", description: "OpenAI\u2019s conversational AI assistant." },
			{ name: "Gemini", url: "https://gemini.google.com/", description: "Google\u2019s AI assistant across apps and the web." },
			{ name: "Perplexity", url: "https://www.perplexity.ai/", description: "An AI answer engine with cited sources." },
			{ name: "NotebookLM", url: "https://notebooklm.google/", description: "An AI research notebook grounded in your own sources." },
			{ name: "Open WebUI", url: "https://openwebui.com/", description: "A self-hosted, extensible chat UI for local and remote models." }
		]
	},
	{
		slug: 'ml-frameworks',
		name: "Machine Learning Frameworks",
		icon: 'Brain',
		blurb: "Libraries for training and running machine learning models.",
		items: [
			{ name: "PyTorch", url: "https://pytorch.org/", description: "An open-source deep learning framework known for flexibility and a Pythonic API." },
			{ name: "TensorFlow", url: "https://www.tensorflow.org/", description: "Google\u2019s end-to-end open-source platform for machine learning." },
			{ name: "Keras", url: "https://keras.io/", description: "A high-level deep learning API that runs on JAX, TensorFlow, or PyTorch." },
			{ name: "JAX", url: "https://docs.jax.dev/", description: "Composable transformations of NumPy programs: autodiff, JIT compilation, and vectorization." },
			{ name: "scikit-learn", url: "https://scikit-learn.org/", description: "Simple and efficient tools for classic machine learning in Python." },
			{ name: "XGBoost", url: "https://xgboost.ai/", description: "An optimized gradient boosting library for fast, accurate tabular models." },
			{ name: "LightGBM", url: "https://lightgbm.readthedocs.io/", description: "A fast, distributed gradient boosting framework from Microsoft." },
			{ name: "Hugging Face Transformers", url: "https://huggingface.co/docs/transformers", description: "Pretrained models for text, vision, and audio with a unified API." },
			{ name: "ONNX Runtime", url: "https://onnxruntime.ai/", description: "A cross-platform engine for running and accelerating ML models." },
			{ name: "Unsloth", url: "https://unsloth.ai/", description: "Fine-tune open LLMs faster and with less memory." }
		]
	},
	{
		slug: 'data-science',
		name: "Data Science & Notebooks",
		icon: 'BarChart3',
		blurb: "Explore data, prototype models, and share results.",
		items: [
			{ name: "Jupyter", url: "https://jupyter.org/", description: "Interactive notebooks for code, data, and visualizations." },
			{ name: "Google Colab", url: "https://colab.research.google.com/", description: "Hosted Jupyter notebooks with free GPU access." },
			{ name: "Kaggle", url: "https://www.kaggle.com/", description: "Datasets, notebooks, and competitions for data science and ML." },
			{ name: "marimo", url: "https://marimo.io/", description: "A reactive Python notebook that is stored as plain Python and runs as an app." },
			{ name: "pandas", url: "https://pandas.pydata.org/", description: "Fast, flexible data analysis and manipulation for Python." },
			{ name: "NumPy", url: "https://numpy.org/", description: "The fundamental package for scientific computing with Python." },
			{ name: "Polars", url: "https://pola.rs/", description: "A lightning-fast DataFrame library written in Rust." },
			{ name: "DuckDB", url: "https://duckdb.org/", description: "An in-process analytical SQL database that runs anywhere." },
			{ name: "Matplotlib", url: "https://matplotlib.org/", description: "Comprehensive static, animated, and interactive plotting in Python." },
			{ name: "Plotly", url: "https://plotly.com/python/", description: "Interactive, publication-quality graphs for Python." }
		]
	},
	{
		slug: 'mlops',
		name: "MLOps & Model Serving",
		icon: 'Rocket',
		blurb: "Track experiments, ship models, and build ML demos.",
		items: [
			{ name: "Weights & Biases", url: "https://wandb.ai/", description: "Experiment tracking, model registry, and evaluation for ML teams." },
			{ name: "MLflow", url: "https://mlflow.org/", description: "An open-source platform for the ML lifecycle: tracking, models, and deployment." },
			{ name: "DVC", url: "https://dvc.org/", description: "Version control for data and machine learning experiments." },
			{ name: "Ray", url: "https://www.ray.io/", description: "A framework for scaling Python and AI workloads across clusters." },
			{ name: "Gradio", url: "https://www.gradio.app/", description: "Build and share web demos for ML models in a few lines of Python." },
			{ name: "Streamlit", url: "https://streamlit.io/", description: "Turn Python data scripts into shareable web apps." },
			{ name: "Label Studio", url: "https://labelstud.io/", description: "Open-source data labeling for text, images, audio, and video." },
			{ name: "BentoML", url: "https://www.bentoml.com/", description: "Package and serve AI models as production APIs." },
			{ name: "Modal", url: "https://modal.com/", description: "Serverless GPUs and infrastructure for running AI code in the cloud." },
			{ name: "Hugging Face Spaces", url: "https://huggingface.co/spaces", description: "Host and discover ML demo apps built with Gradio, Streamlit, and more." }
		]
	},
	{
		slug: 'ai-video',
		name: "AI Video Creation & Editing",
		icon: 'Video',
		blurb: "Generate, edit, and repurpose video with AI.",
		items: [
			{ name: "Higgsfield", url: "https://higgsfield.ai/", description: "AI video generation with cinematic camera controls and visual effects." },
			{ name: "Google Veo", url: "https://deepmind.google/models/veo/", description: "Google DeepMind\u2019s video generation model with native audio." },
			{ name: "Sora", url: "https://openai.com/sora/", description: "OpenAI\u2019s text-to-video model for generating realistic clips." },
			{ name: "Kling AI", url: "https://klingai.com/", description: "Text-to-video and image-to-video generation with strong motion quality." },
			{ name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", description: "Generate video from text and images with Luma AI." },
			{ name: "Pika", url: "https://pika.art/", description: "Create and edit short AI videos with playful effects." },
			{ name: "Hailuo AI", url: "https://hailuoai.video/", description: "MiniMax\u2019s AI video generator for text and image prompts." },
			{ name: "Descript", url: "https://www.descript.com/", description: "Edit video and podcasts by editing the transcript, with AI tools built in." },
			{ name: "CapCut", url: "https://www.capcut.com/", description: "A video editor with AI captions, effects, and templates." },
			{ name: "OpusClip", url: "https://www.opus.pro/", description: "Turn long videos into short, captioned clips with AI." },
			{ name: "HeyGen", url: "https://www.heygen.com/", description: "AI avatars and video translation for presenter-style videos." },
			{ name: "Synthesia", url: "https://www.synthesia.io/", description: "Create training and explainer videos with AI avatars." },
			{ name: "VEED", url: "https://www.veed.io/", description: "An online video editor with AI subtitles, cleanup, and avatars." },
			{ name: "Kapwing", url: "https://www.kapwing.com/", description: "A collaborative online video editor with AI tools." }
		]
	}
];

export const aiTotal = aiCategories.reduce((sum, category) => sum + category.items.length, 0);
