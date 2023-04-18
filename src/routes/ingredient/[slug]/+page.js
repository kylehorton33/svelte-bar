import { getIngredientBySlug, getImageUrlBySlug } from '../../../api'

// @ts-ignore
export async function load({ params }) {
	let ingredient = await getIngredientBySlug(params.slug);
	let imageURL = await getImageUrlBySlug(params.slug)
	console.log(ingredient);
	return {
		slug: params.slug,
		imageURL, 
		...ingredient
	}
};