import { getAllIngredients } from '$lib/api'

export function load() {
	return getAllIngredients()
}