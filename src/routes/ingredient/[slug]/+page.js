import { ingredients } from '../../data';

// @ts-ignore
export function load({ params }) {
	const ingredient = ingredients.find((ingredient) => ingredient.slug === params.slug);

	return {
		ingredient
	};
};