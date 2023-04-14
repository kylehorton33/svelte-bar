import { drinks } from '../../data.js';

// @ts-ignore
export function load({ params }) {
	const drink = drinks.find((drink) => drink.slug === params.slug);

	return {
		drink
	};
};