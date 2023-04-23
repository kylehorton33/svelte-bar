import { getIngredientBySlug, getImageUrlBySlug } from '$lib/utils/api'

// @ts-ignore
export async function load({ params }) {
	let ingredient = await getIngredientBySlug(params.slug);
	let imageURL = await getImageUrlBySlug(ingredient.imageName);
	return {
		slug: params.slug,
		imageURL, 
		...ingredient
	}
};