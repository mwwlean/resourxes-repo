import { writable } from 'svelte/store';

export type Crumb = { label: string; href?: string };

export const breadcrumb = writable<Crumb[]>([]);
