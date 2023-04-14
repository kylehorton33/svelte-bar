import { ingredients } from './data.js';

export function load() {
	return {
		summaries: ingredients.map((ingredient) => ({
			slug: ingredient.slug,
			title: ingredient.title
		}))
	};
}