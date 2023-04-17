import { getAllIngredients } from '../api'

export function load() {
	return getAllIngredients()
}