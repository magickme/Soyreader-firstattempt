export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/posts/[id].svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"about": [[0, 2], [1]],
	"posts/[id]": [[0, 4], [1]]
};