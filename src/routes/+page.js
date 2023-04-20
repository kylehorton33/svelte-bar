import { getAllIngredients } from '$lib/utils/api'

export function load() {
	return getAllIngredients()
}