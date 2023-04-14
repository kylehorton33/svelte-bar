import { drinks } from '../data.js';

export function load() {
	return {
		summaries: drinks.map((drink) => ({
			slug: drink.slug,
			title: drink.title
		}))
	};
}